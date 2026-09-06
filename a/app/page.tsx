import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className="flex gap-2 justify-center items-center h-screen">
      <Link href="./vikings-minerals">
        Vikings Minerals
      </Link>
    </div>
  )
}
