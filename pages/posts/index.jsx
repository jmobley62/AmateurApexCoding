import React from 'react'

export default function posts() {
  return (
    <div class='bg-black w-screen h-screen text-red-900'>
      <title>Apex Stats | Posts</title>
      <div>List of posts</div>
    </div>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}