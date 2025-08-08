import { EditableElement } from "@/components/editable-element"
import { Button } from "@/components/ui/button"
import { EditableText } from '@/components/editable-text'
import { EditableImage } from '@/components/editable-image'

const amounts = [25, 50, 100, 250]

export default function DonatePage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-8">
      <div className="grid gap-6 md:grid-cols-2 items-center">
        <div className="space-y-4">
          <EditableText id="donate-page-title" type="text" className="text-4xl font-bold">
            Make a Difference Today
          </EditableText>
          <EditableText id="donate-page-body" type="text" className="text-muted-foreground">
            Your support funds medical care, enrichment, and placement efforts for pets in need.
          </EditableText>
        </div>
        <EditableImage id="donate-image" src="/placeholder.svg?height=360&width=560" alt="Happy adopted dog" className="w-full rounded-lg border" />
      </div>

      <div className="rounded-lg border p-6">
        <h3 className="font-semibold mb-4">Choose an amount</h3>
        <div className="flex flex-wrap gap-3">
          {amounts.map((a) => (
            <Button key={a} variant="outline">${a}</Button>
          ))}
          <Button className="ml-auto">Donate</Button>
        </div>
      </div>
    </div>
  )
}
