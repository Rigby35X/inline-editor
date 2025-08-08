'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useOrg } from '@/components/org-provider'

type Animal = {
  id: string
  name: string
  species: string
  age?: string
  description?: string
  image?: string
  traits?: string[]
}

export default function AnimalDetailPage({ params }: { params: { id: string } }) {
  const { orgId } = useOrg()
  const [pet, setPet] = useState<Animal | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      setLoading(true)
      try {
        const res = await fetch(`/api/org/${orgId}/animals/${encodeURIComponent(params.id)}`, { cache: 'no-store' })
        const json = await res.json()
        if (res.ok) setPet(json.animal || json)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [orgId, params.id])

  if (loading) {
    return <div className="container mx-auto px-4 py-12">Loading...</div>
  }

  if (!pet) {
    return (
      <div className="container mx-auto px-4 py-12">
        <Link href="/animals" className="text-sm underline underline-offset-4">← Back to Available Animals</Link>
        <p className="mt-6 text-muted-foreground">Animal not found.</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/animals" className="text-sm underline underline-offset-4">
        ← Back to Available Animals
      </Link>

      <div className="grid gap-8 md:grid-cols-2 mt-6">
        <img
          src={pet.image || "/placeholder.svg?height=360&width=560&query=animal-detail"}
          alt={pet.name}
          className="w-full h-[360px] object-cover rounded-lg border"
        />
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">{pet.name}</h1>
          <p className="text-muted-foreground">{pet.species} {pet.age ? `• ${pet.age}` : ''}</p>
          <p className="text-sm text-muted-foreground">{pet.description}</p>
          <div className="flex flex-wrap gap-2 pt-2">
            {(pet.traits || []).map((t) => (
              <span key={t} className="px-2 py-1 rounded border text-xs">
                {t}
              </span>
            ))}
          </div>

          <div className="pt-4 flex gap-3">
            <Link
              href={`/applications#adopt`}
              className="inline-flex rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90"
            >
              Apply to Adopt
            </Link>
            <Link
              href="/contact"
              className="inline-flex rounded-md border px-4 py-2 text-sm font-medium hover:bg-muted"
            >
              Ask a Question
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
