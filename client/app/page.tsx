'use client'

import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image'

export default function Home() {

  const { data } = useSession()

  return (
    <div className={'flex flex-col justify-center items-center h-full w-full bg-gray-400'}>
      <h1>Home</h1>
    </div>
  )
}
