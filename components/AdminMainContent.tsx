'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Card } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ColorPicker } from '@/components/ColorPicker'
import { IPBanList } from '@/components/IPBanList'
import { AccessLogs } from '@/components/AccessLogs'
import { SpecialEventCountdown } from '@/components/SpecialEventCountdown'
import { AnnouncementStyler } from '@/components/AnnouncementStyler'
import { AdminStatistics } from '@/components/AdminStatistics'
import { saveAnnouncementSettings } from '@/utils/api'

interface AdminMainContentProps {
  settings: any
  setSettings: React.Dispatch<React.SetStateAction<any>>
}

export default function AdminMainContent({
  settings,
  setSettings
}: AdminMainContentProps) {
  const [activeTab, setActiveTab] = useState('general')

  useEffect(() => {
    // Auto-fetch website status
    const fetchWebsiteStatus = async () => {
      // In a real scenario, this would be an API call
      const status = {
        isWebsiteOpen: true,
        showMaintenancePage: false
      }
      setSettings(prev => ({ ...prev, ...status }))
    }
    fetchWebsiteStatus()
  }, [setSettings])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, section?: string) => {
    const { name, value } = e.target
    setSettings(prev => {
      if (section) {
        return { ...prev, [section]: { ...prev[section], [name]: value } }
      }
      return { ...prev, [name]: value }
    })
  }

  const handleSwitchChange = (checked: boolean, name: string, section?: string) => {
    setSettings(prev => {
      if (section) {
        return { ...prev, [section]: { ...prev[section], [name]: checked } }
      }
      return { ...prev, [name]: checked }
    })
  }

  const handleSave = async (section: string) => {
    let settingsToSave;
    if (section === 'all') {
      settingsToSave = {
        ...settings,
        specialEvent: settings.specialEvent || {},
        announcement: settings.announcement || {}
      };
    } else if (section === 'announcement') {
      settingsToSave = { 
        announcement: settings.announcement || {}
      };
    } else {
      settingsToSave = { 
        [section]: section === 'specialEvent' 
          ? (settings.specialEvent || {}) 
          : (settings[section] || {})
      };
    }
    localStorage.setItem('adminSettings', JSON.stringify(settingsToSave));
    if (section === 'announcement' || section === 'all') {
      await saveAnnouncementSettings(settings.announcement);
    }
    alert(`${section === 'all' ? 'All' : section} settings saved successfully!`);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="h-14 border-b bg-white flex items-center justify-between px-4">
        <h1 className="text-lg font-semibold">管理后台</h1>
        <Button onClick={() => handleSave('all')}>保存所有设置</Button>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-4">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-4">
              <TabsTrigger value="general">常规设置</TabsTrigger>
              <TabsTrigger value="announcement">公告设置</TabsTrigger>
              <TabsTrigger value="special-event">特别活动</TabsTrigger>
              <TabsTrigger value="theme">主题设置</TabsTrigger>
              <TabsTrigger value="access">访问管理</TabsTrigger>
            </TabsList>

            <TabsContent value="general">
              <Card className="p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <Label className="flex-grow">开放网站</Label>
                  <Switch
                    checked={settings.isWebsiteOpen}
                    onCheckedChange={(checked) => handleSwitchChange(checked, 'isWebsiteOpen')}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label className="flex-grow">显示维护页面</Label>
                  <Switch
                    checked={settings.showMaintenancePage}
                    onCheckedChange={(checked) => handleSwitchChange(checked, 'showMaintenancePage')}
                  />
                </div>
                <div>
                  <Label>网站标题</Label>
                  <Input
                    name="pageTitle"
                    value={settings.pageTitle || ''}
                    onChange={handleChange}
                    className="w-full mt-1"
                  />
                </div>
                <Button onClick={() => handleSave('general')}>保存常规设置</Button>
              </Card>
            </TabsContent>

            <TabsContent value="announcement">
              <div className="flex flex-col lg:flex-row gap-4">
                <Card className="p-4 space-y-4 flex-1">
                  <div>
                    <Label>公告内容</Label>
                    <Textarea
                      name="text"
                      value={settings.announcement?.text || ''}
                      onChange={(e) => handleChange(e, 'announcement')}
                      rows={4}
                      className="w-full mt-1"
                    />
                  </div>
                  <AnnouncementStyler
                    styles={settings.announcement?.styles || {}}
                    onChange={(styles) => setSettings(prev => ({
                      ...prev,
                      announcement: { ...prev.announcement, styles }
                    }))}
                  />
                  <div className="flex items-center justify-between">
                    <Label className="flex-grow">启用公告</Label>
                    <Switch
                      checked={settings.announcement?.isActive || false}
                      onCheckedChange={(checked) => handleSwitchChange(checked, 'isActive', 'announcement')}
                    />
                  </div>
                  <Button onClick={() => handleSave('announcement')}>保存公告设置</Button>
                </Card>
                <Card className="p-4 flex-1">
                  <AdminStatistics />
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="special-event">
              <Card className="p-4 space-y-4">
                <div>
                  <Label>活动标题</Label>
                  <Input
                    name="title"
                    value={settings.specialEvent?.title || ''}
                    onChange={(e) => handleChange(e, 'specialEvent')}
                    className="w-full mt-1"
                  />
                </div>
                <div>
                  <Label>活动描述</Label>
                  <Textarea
                    name="description"
                    value={settings.specialEvent?.description || ''}
                    onChange={(e) => handleChange(e, 'specialEvent')}
                    rows={4}
                    className="w-full mt-1"
                  />
                </div>
                <div>
                  <Label>按钮文字</Label>
                  <Input
                    name="buttonText"
                    value={settings.specialEvent?.buttonText || ''}
                    onChange={(e) => handleChange(e, 'specialEvent')}
                    className="w-full mt-1"
                  />
                </div>
                <div>
                  <Label>活动日期</Label>
                  <Input
                    type="datetime-local"
                    name="eventDate"
                    value={settings.specialEvent?.eventDate || ''}
                    onChange={(e) => handleChange(e, 'specialEvent')}
                    className="w-full mt-1"
                  />
                </div>
                {settings.specialEvent && settings.specialEvent.eventDate && (
                  <SpecialEventCountdown date={settings.specialEvent.eventDate} />
                )}
                <Button onClick={() => handleSave('specialEvent')}>保存特别活动设置</Button>
              </Card>
            </TabsContent>

            <TabsContent value="theme">
              <Card className="p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <Label className="flex-grow">启用春节主题</Label>
                  <Switch
                    checked={settings.enableChineseNewYearTheme}
                    onCheckedChange={(checked) => handleSwitchChange(checked, 'enableChineseNewYearTheme')}
                  />
                </div>
                {settings.enableChineseNewYearTheme && (
                  <>
                    <div>
                      <Label>主题背景色</Label>
                      <ColorPicker
                        color={settings.chineseNewYearTheme?.backgroundColor || '#FF0000'}
                        onChange={(color) => setSettings(prev => ({
                          ...prev,
                          chineseNewYearTheme: { ...prev.chineseNewYearTheme, backgroundColor: color }
                        }))}
                      />
                    </div>
                    <div>
                      <Label>按钮颜色</Label>
                      <ColorPicker
                        color={settings.chineseNewYearTheme?.buttonColor || '#FFD700'}
                        onChange={(color) => setSettings(prev => ({
                          ...prev,
                          chineseNewYearTheme: { ...prev.chineseNewYearTheme, buttonColor: color }
                        }))}
                      />
                    </div>
                  </>
                )}
                <Button onClick={() => handleSave('theme')}>保存主题设置</Button>
              </Card>
            </TabsContent>

            <TabsContent value="access">
              <Card className="p-4 space-y-4">
                <AccessLogs />
                <IPBanList />
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </ScrollArea>
    </div>
  )
}

