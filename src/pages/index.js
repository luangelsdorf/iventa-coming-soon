import Header from '@/components/coming-soon/Header';
import Hero from '@/components/coming-soon/Hero';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Em Breve | Abarca</title>
        <meta name="description" content="Nos acompanhe nas redes sociais e fique sabendo em primeira mão sobre os novos rumos da Abarca. Vem navegar com a gente!" />
        <link rel="icon" href="/images/icon.svg" />
      </Head>

      <Header />

      <main>
        <Hero />
      </main>
    </>
  )
}
