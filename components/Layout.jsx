import Link from 'next/link'
import React from 'react'

export default function Layout({children}) {
  return (
    <div>
      <div class='container flex justify-between items-center p-1 bg-red-900'>
        <logo>
        <Link href="/"><img src="ApexLogoS.png" alt="Apex Logo" class='scale-75'/></Link>
        </logo>
        <nav class='space-x-12 text-white'>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/posts">Posts</Link>
        </nav>
      </div>
      <div>{children}</div>
    </div>
  );
}
