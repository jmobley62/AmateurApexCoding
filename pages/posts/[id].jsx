import { useRouter } from 'next/router'
import React from 'react'

export default function post() {
    const router = useRouter()

  return (
    <div class='bg-black w-screen h-screen text-red-900'>
        <title>Apex Stats | Post</title>
        <div>This is post: {router.query.id}</div>
    </div>
  )
}
