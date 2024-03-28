import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/organisms/Navbar'
import StorySection from '@/components/StorySection'
import SwiperBanner from '@/components/organisms/Slider'
import { useEffect, useState } from 'react'
import  Router  from 'next/router'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [loaded,setLoaded] = useState(false)
  useEffect(() => {
      const {pathname} = Router;

      // you can prevent this behaviour using location.replace
      Router.push('/weddingandevents')
      //location.replace("/hello-nextjs")
      setLoaded(true)
    },[]);

    // if(!loaded){
      return <div></div> //show nothing or a loader
    // }

  return (
    <>
      <Head>
        <title>Luxury 5 Star Hotels in Karnal, Panipat, Kurukshetra Haryana - Hotel NoorMahal Palace, Karnal</title>
        <meta name="keywords" content="Luxury 5 Star Hotels in Karnal, Panipat, Kurukshetra Haryana - Hotel NoorMahal Palace, Karnal" />
        <meta name="description" content="One of the best 5 star luxury business hotels in Karnal, Panipat, Kurukshetra Haryana, NoorMahal Palace is located near IOCL, bus stand and railway station. Book online and get best deals." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
   <main>
   </main>
    </>
  )
}
