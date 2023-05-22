import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Slider from '@/components/Slider'
import Pizza from '@/components/Pizza'
import axios from 'axios'


const inter = Inter({ subsets: ['latin'] })

export default function Home({pizzaList}) {
  return (
    <>
    
      <Head>
        <title>Pizza Restaurant</title>
        <meta name="description" content="Best Shop in Town !!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Slider/>
      <Pizza pizzaList={pizzaList} />
   
    </>
  )
}

export const getServerSideProps = async () =>{
  const res = await axios.get("http://localhost:3000/api/products");
  return{
    props:{
      pizzaList: res.data,
    }
  }
}


