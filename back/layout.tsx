import Footer from '@/components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh" className="dark">
      <body className="flex flex-col min-h-screen bg-background text-foreground">
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
} 