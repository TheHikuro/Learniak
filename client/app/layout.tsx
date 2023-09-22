import './globals.css'
import AuthProvider from '@/providers/AuthProvider'
import UiProvider from '@/providers/UiProvider'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import Navbar from '@/(dashboard)/(routes)/(root)/_components/Navbar'

export const metadata = {
  title: 'Inso Quizz',
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
