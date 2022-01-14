import type { NextPage } from 'next'
import Head from 'next/head'
import {Header} from "./home/components/Header/Header";
import {Welcome} from "./home/components/Welcome/Welcome";
import {Attractions} from "./home/containers/Attractions/Attractions";
import {Tours} from "./home/containers/Tours/Tours";
import {Contacts} from "./home/components/Contacts/Contacts";
import {Footer} from "./home/components/Footer/Footer";



const Home: NextPage = () => {
  return (
      <section>
        <Head>
          <meta name="viewport" content="width=device-width, user-scalable=yes"/>
          <title>Хакасия</title>
        </Head>
        <Header />
        <Welcome />
        <Attractions />
        <Tours />
        <Contacts />
        <Footer />
      </section>
  )
}
