import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div class='bg-black w-screen h-screen text-red-900'>
      <title>Apex Stats | Home</title>

      <form class='container w-full l-full px-40 py-4'> 
        <label class='text-2xl font-bold px-7'>First name:  </label>
        <input class='mt-2'></input><br></br>
        <label class='text-2xl font-bold px-7'>Last name:  </label>
        <input class='mt-2'></input>
        <button class='bg-red-900 rounded-md text-white text-lg mx-14 mt-4 p-1 '>Submit</button>
      </form>

      <footer class='container w-full l-full flex justify-center items-center text-white bg-red-900 fixed bottom-0'>
          <div>Copyright to JaQuan Mobley 2022<br></br>All rights reserved</div>
        </footer>

    </div>
  )
}

console.log('hello world')