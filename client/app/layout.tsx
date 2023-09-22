import './globals.css'
import AuthProvider from '@/providers/AuthProvider'
import UiProvider from '@/providers/UiProvider'

export const metadata = {
  title: 'Learniak',
  description: 'Fun quizz for everyone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <AuthProvider>
      <html lang="en" className=''>
        <body className=''>
          <UiProvider>
            {children}
          </UiProvider>
        </body>
      </html>
    </AuthProvider>
  )
}
