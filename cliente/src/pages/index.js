import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Articles from '@/components/Articles'
import Hero from '@/components/Hero'
import Categories from '@/components/Categories'
import Business from '@/components/Business'
import Brilla from '@/components/Brilla'
import PromoBanners from '@/components/PromoBanners'

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
        <Hero/>
        <Categories/>
        <Articles/>
        <Business/>
        <Brilla/>
        <PromoBanners/>
      </main>

      {/* <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>src/pages/index.js</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Docs <span>-&gt;</span>
            </h2>
            <p>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Learn <span>-&gt;</span>
            </h2>
            <p>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Templates <span>-&gt;</span>
            </h2>
            <p>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Deploy <span>-&gt;</span>
            </h2>
            <p>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main> */}
    </>
  )
}
