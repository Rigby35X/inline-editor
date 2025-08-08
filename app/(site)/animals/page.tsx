'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useOrg } from '@/components/org-provider'
import { withXanoAuth } from '@/components/xano-auth-client'

type Animal = {
  id: string
  name: string
  species: string
  age?: string
  description?: string
  image?: string
  traits?: string[]
}

export default function AnimalsPage() {
  const { orgId } = useOrg()
  const [q, setQ] = useState('')
  const [species, setSpecies] = useState<string>('all')
  const [loading, setLoading] = useState(false)
  const [animals, setAnimals] = useState<Animal[]>([])

  const speciesParam = species === 'all' ? '' : species

  useEffect(() => {
    const controller = new AbortController()
    const load = async () => {
      setLoading(true)
      try {
        const params = new URLSearchParams()
        if (q) params.set('q', q)
        if (speciesParam) params.set('species', speciesParam)
        const res = await fetch(`/api/org/${orgId}/animals?` + params.toString(), {
          ...withXanoAuth(),
          cache: 'no-store',
          signal: controller.signal,
        })
        const json = await res.json()
        if (res.ok) setAnimals(json.animals || [])
      } catch {}
      setLoading(false)
    }
    const t = setTimeout(load, 300)
    return () => {
      controller.abort()
      clearTimeout(t)
    }
  }, [orgId, q, speciesParam])

  const list = useMemo(() => animals, [animals])

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6 flex flex-col md:flex-row gap-4 md:items-end md:justify-between">
        <div>
          <h1 className="text-4xl font-bold">Available Animals</h1>
          <p className="text-muted-foreground">Click on a pet to learn more and apply to adopt.</p>
        </div>
        <div className="flex gap-3">
          <div className="w-64">
            <Input placeholder="Search by name..." value={q} onChange={(e) => setQ(e.target.value)} />
          </div>
          <Select value={species} onValueChange={setSpecies}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Species" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All species</SelectItem>
              <SelectItem value="Dog">Dog</SelectItem>
              <SelectItem value="Cat">Cat</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {loading ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-lg border bg-background overflow-hidden animate-pulse h-72" />
          ))}
        </div>
      ) : list.length === 0 ? (
        <div className="text-sm text-muted-foreground">No animals found. Try adjusting filters.</div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((pet) => (
            <Link
              key={pet.id}
              href={`/animals/${encodeURIComponent(pet.id)}`}
              className="group rounded-lg border bg-background overflow-hidden hover:shadow-sm transition-shadow"
            >
              <img
                src={pet.image || "/placeholder.svg?height=320&width=480&query=animal-image"}
                alt={pet.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-4 space-y-1">
                <h3 className="font-semibold group-hover:underline underline-offset-4">{pet.name}</h3>
                <p className="text-sm text-muted-foreground">{pet.species}{pet.age ? ` • ${pet.age}` : ''}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
