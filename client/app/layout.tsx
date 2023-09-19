import './globals.css'
import AuthProvider from '@/providers/AuthProvider'
import UiProvider from '@/providers/UiProvider'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import Navbar from '@/components/Navbar'

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
          <Navbar />
          <UiProvider>
            <div className='h-[calc(100vh-64px)]'>
              {children}
            </div>
          </UiProvider>
        </body>
      </html>
    </AuthProvider>
  )
}
