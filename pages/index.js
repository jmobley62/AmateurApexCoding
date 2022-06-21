import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div class='bg-black w-screen h-screen text-red-900 px-4 py-2'>
      <title>Apex Stats | Home</title>

      <form class='container w-full l-full px-36 py-4'> 
        <label class='text-2xl font-bold px-7'>First name:  </label>
        <input class='mt-2'></input><br></br>
        <label class='text-2xl font-bold px-7'>Last name:  </label>
        <input class='mt-2'></input>
      </form>

      <div>Home</div>

    </div>
  )
}

console.log('hello world')