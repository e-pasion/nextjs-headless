import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Articles from '@/components/Articles'
import Hero from '@/components/hero/Hero'
import Categories from '@/components/Categories'
import Business from '@/components/Business'
import Brilla from '@/components/Brilla'
import PromoBanners from '@/components/PromoBanners'
import Modal from '@/components/Modal'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
        <title>Efigas S.A. E.S.P.</title>
        <meta name="description" content="Por seguridad y cumplimiento Agenda la visita de un técnico experto para la revisión de los gasodomésticos y redes internas de gas natural domiciliario." />
        <meta name="keywords" content="Gas natural, Eje Cafetero, Caldas, Quindío, Risaralda, Manizales, Armenia, Pereira, gas natural vehicular en el eje cafetero, Revisión Técnica Reglamentaria, Construcción de redes de gas natural, prevención de daños, emergencias de gas natural, venta de calentadores de gas, venta de estufas de gas, reparación de calentadores de gas, reparación de estufas de gas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      


      <main className='main'>
        <Modal/>
        <Hero/>
        <Categories/>
        <Articles/>
        <Business/>
        <Brilla/>
        <PromoBanners/>
      </main>

   
    </>
  )
}
