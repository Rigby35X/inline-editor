import { ReactNode } from "react"
import { OrgProvider } from "@/components/org-provider"
import { EditorProvider } from "@/components/editor-provider"
import { SiteSettingsProvider } from "@/components/site-settings-provider"
import { InlineEditor } from "@/components/inline-editor"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <OrgProvider>
      <EditorProvider>
        <SiteSettingsProvider>
          <div className="min-h-screen flex flex-col bg-background">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
            <InlineEditor />
          </div>
        </SiteSettingsProvider>
      </EditorProvider>
    </OrgProvider>
  )
}
