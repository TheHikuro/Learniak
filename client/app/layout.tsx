import './globals.css'
import AuthProvider from '@/providers/AuthProvider'
import UiProvider from '@/providers/UiProvider'
import { ToasterProvider } from './providers/toaster-provider'
import { ConfettiProvider } from './providers/confetti-provider'

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
      <ToasterProvider>
        <html lang="en">
          <body>
            <ConfettiProvider />
            <UiProvider>
              {children}
            </UiProvider>
          </body>
        </html>
      </ToasterProvider>
    </AuthProvider>
  )
}
