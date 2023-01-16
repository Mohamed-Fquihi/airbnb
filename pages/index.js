import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner';
import Header from '../components/Header';
import SmallCard from '../components/SmallCard';
import MediumCard from '../components/MediumCard';
import Footer from '../components/Footer'
import Signin from "./signin"


export default function Home({ exploreData, cardsData }) {
  exploreData
  return (
    <div className="">
      <Head>
        <title>Airbnb 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
       {/*Banner*/} 
      <Banner />
      

      <main className='max-w-7xl mx-auto px-10 sm:px-20'>
       <section className="pt-6 ">
          <h2 className='text-3xl font-bold pb-5'>Explore Nearby</h2>

       {/*Pull some data from a server - API endpoints*/} 
      <div className='grid grid-cols-1 sm:grid-cols-2
      lg:grid-cols-3 xl:grid-cols-4'>
       {exploreData?.map(item => (
        <SmallCard
         key={item.img}
         img={item.img}
         location={item.location} />
       ))}
      </div>

       </section> 

       <section>
        <h2 className='text-3xl font-bold py-8'>Live Anywhere</h2>

        <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3"> 

        {cardsData?.map(({img, title}) => (
          <MediumCard key={img} img={img} title={title} />
        ))}

        </div>
      
       </section>
      </main>

      <Footer />
     
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").
  then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://www.jsonkeeper.com/b/VHHT").
  then((res) => 
   res.json()
   );


  return {
    props: { 
      exploreData,
      cardsData
    }
  }
}

