import React from 'react'
import { currentUser, auth } from '@clerk/nextjs/server'
import Image from 'next/image'
export default async function UserPage() {
    const { userId } = await auth()
    const user = await currentUser()
  return (
    <div>
        <h2>Hello, {userId}</h2>

        <p>Welcome, {user?.username},<Image src={user?.imageUrl} width={100} height={100} alt="Image" /></p>
    </div>
  )
}
