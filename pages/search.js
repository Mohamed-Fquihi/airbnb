import React from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useRouter } from "next/dist/client/router"
import InfoCard from '../components/InfoCard';

function Search ({searchResults}) {

        const router = useRouter();
        const { location, startDate, endDate, noOfGuests } = router.query;




  return (
    <div>
      <Header />

      <main className="flex">
        <section className="flex-grow pt-4 px-6 ">
            <p className="text-xs py-2 ml-3 ">100+ stays in {location} for {noOfGuests} number guests</p>
            <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>
        
        <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">

            <p className="px-4 py-2 border rounded-full
             cursor-pointer hover:shadow-lg active:scale-95
             active:bg-gray-100 mb-4 transition transform duration-100 ease-out ">cancelation flexibility</p>

            <p className="px-4 py-2 border rounded-full
             cursor-pointer hover:shadow-lg active:scale-95
             active:bg-gray-100 mb-4 transition transform duration-100 ease-out ">Type of place</p>

            <p className="px-4 py-2 border rounded-full
             cursor-pointer hover:shadow-lg active:scale-95
             active:bg-gray-100 mb-4 transition transform duration-100 ease-out ">Price</p>


<p className="px-4 py-2 border rounded-full
             cursor-pointer hover:shadow-lg active:scale-95
             active:bg-gray-100 mb-4 transition transform duration-100 ease-out ">More filters</p>
        </div>


        <div className="flex flex-col ">
        {searchResults.map(item => (
            <InfoCard 
            img={item.img}
            location={item.location}
            title={item.title}
            description={item.description}   
            star={item.star} 
            price={item.price}
            />
        ))}
        </div>

        </section>


      </main>

      <Footer />

    </div>
  )
}

export default Search;

export async function getServerSideProps(){
    const searchResults = await fetch("https://www.jsonkeeper.com/b/PFC4")
    .then(res => res.json());

    return{
        props: {
            searchResults,
        }
    }

}


