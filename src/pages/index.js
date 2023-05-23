import Header from '@/components/coming-soon/Header';
import Hero from '@/components/coming-soon/Hero';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Em Breve | IVenta</title>
        <meta name="description" content="Nos acompanhe nas redes sociais e fique sabendo em primeira o que está por vir." />
        <link rel="icon" href="/images/icon.svg" />
      </Head>

      <Header />

      <main>
        <Hero />
      </main>
    </>
  )
}
