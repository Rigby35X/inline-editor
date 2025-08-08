'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Edit3, Eye, History, Users, Settings, Home } from 'lucide-react'
import Link from 'next/link'

export default function AdminDashboard() {
  const [isEditingActive, setIsEditingActive] = useState(false)

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Barkhaus Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage your website content and settings</p>
          </div>
          <Badge variant={isEditingActive ? "destructive" : "secondary"}>
            {isEditingActive ? "Editor Active" : "Editor Inactive"}
          </Badge>
        </div>

        <Tabs defaultValue="website" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="website">Website</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="website" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Edit3 className="h-5 w-5" />
                    Website Editor
                  </CardTitle>
                  <CardDescription>
                    Edit your website content and styling in real-time
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Link href="/?edit=true">
                    <Button className="w-full" size="lg">
                      <Edit3 className="mr-2 h-4 w-4" />
                      Edit Website
                    </Button>
                  </Link>
                  <div className="flex gap-2">
                    <Link href="/" className="flex-1">
                      <Button variant="outline" className="w-full">
                        <Eye className="mr-2 h-4 w-4" />
                        Preview
                      </Button>
                    </Link>
                    <Button variant="outline" className="flex-1">
                      <History className="mr-2 h-4 w-4" />
                      History
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Changes</CardTitle>
                  <CardDescription>Latest website updates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span>Hero section updated</span>
                      <span className="text-muted-foreground">2h ago</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>New image uploaded</span>
                      <span className="text-muted-foreground">1d ago</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>CTA button modified</span>
                      <span className="text-muted-foreground">3d ago</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Stats</CardTitle>
                  <CardDescription>Website performance overview</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Total Edits</span>
                      <span className="font-semibold">247</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Active Editors</span>
                      <span className="font-semibold">3</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Last Published</span>
                      <span className="font-semibold">Today</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="content">
            <Card>
              <CardHeader>
                <CardTitle>Content Management</CardTitle>
                <CardDescription>Manage your website content and media</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Content management features coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Manage user permissions and access</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">User management features coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Settings</CardTitle>
                <CardDescription>Configure your website settings</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Settings panel coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
