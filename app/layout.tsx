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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
