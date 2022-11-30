import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner';
import Header from '../components/Header';
import SmallCard from '../components/SmallCard';



export default function Home({ exploreData }) {
  exploreData
  return (
    <div className="">
      <Head>
        <title>D&M</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    

      <Header />
       {/*Banner*/} 
      <Banner />
      

      <main className='max-w-7xl mx-auto px-10 sm:px-20'>
       <section className="pt-6 ">
          <h2 className='text-3xl font-bold pb-5'>Explore Nearby</h2>

       {/*Pull some data from a server - API endpoints*/} 

       {exploreData?.map(item => (
        <SmallCard
         img={item.img}
         distance={item.img}
         location={item.location} />
       ))}


       </section> 
      </main>

     
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").
  then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData
    }
  }
}

