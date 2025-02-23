import React from 'react'
import { Button } from '@/components/ui/button'
import { Bold, Italic, Underline, StrikethroughIcon as StrikeThrough } from 'lucide-react'

interface AnnouncementStylerProps {
  styles: {
    bold?: boolean
    italic?: boolean
    underline?: boolean
    strikethrough?: boolean
  }
  onChange: (styles: any) => void
}

export function AnnouncementStyler({ styles, onChange }: AnnouncementStylerProps) {
  const toggleStyle = (style: string) => {
    onChange({
      ...styles,
      [style]: !styles[style as keyof typeof styles]
    })
  }

  return (
    <div className="flex space-x-2">
      <Button
        variant={styles.bold ? "default" : "outline"}
        size="icon"
        onClick={() => toggleStyle('bold')}
      >
        <Bold className="h-4 w-4" />
      </Button>
      <Button
        variant={styles.italic ? "default" : "outline"}
        size="icon"
        onClick={() => toggleStyle('italic')}
      >
        <Italic className="h-4 w-4" />
      </Button>
      <Button
        variant={styles.underline ? "default" : "outline"}
        size="icon"
        onClick={() => toggleStyle('underline')}
      >
        <Underline className="h-4 w-4" />
      </Button>
      <Button
        variant={styles.strikethrough ? "default" : "outline"}
        size="icon"
        onClick={() => toggleStyle('strikethrough')}
      >
        <StrikeThrough className="h-4 w-4" />
      </Button>
    </div>
  )
}

