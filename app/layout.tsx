import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LearnHub - Your Personal Learning Companion',
  description: 'Personalized learning platform for students from Class 3 to Class 10',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{
      scrollBehavior: 'smooth'
    }}>
      <body style={{
        margin: 0,
        padding: 0,
        fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
        backgroundColor: 'linear-gradient(to bottom, rgb(214, 219, 220), rgb(255, 255, 255))'
      }}>
        {children}
      </body>
    </html>
  )
}
