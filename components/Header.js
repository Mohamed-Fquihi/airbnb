import React from 'react'
import Image from 'next/image'
import { SearchIcon,
         GlobeAltIcon,
         UserCircleIcon,
         UsersIcon,
         MenuIcon,            
} from '@heroicons/react/solid';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';


function Header() {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();


  const resetInput = () =>{
    setSearchInput("")
  }

  const search = () =>{
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      }
    });
  }

  
  const handleSelect = (ranges) =>{
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);

  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-4 md:px-10'>
      

      {/*left section*/}  
      <div onClick={() => router.push("/")} className='relative flex items-center h-10 cursor-pointer my-auto'>
        <Image
                  src='https://links.papareact.com/qd3'
                  layout='fill'
                  objectFit='contain'
                  objectPosition='left' 
                  alt={''}                  />
                  
      </div>


      {/*Middle section*/}  
      <div className='flex items-center border-2 rounded-full py-2 md:shadow-sm'>
        <input 
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
          className='flex-grow pl-5 bg-transparent outline-none text-sm
                         text-gray-400 placeholder-gray-400'
               type="text"
               placeholder='search'/>

        <SearchIcon className='hidden md:inline-flex h-8 bg-red-400
         text-white rounded-full p-2 cursor-pointer md:mx-2' />
      </div>




      {/*Right section*/}  
      <div className='flex items-center space-x-4 justify-end text-gray-500'>

        <p className='hidden md:inline mt-3 cursor-pointer'>Become a host</p>
            <GlobeAltIcon className='h-5'/>

            <div className='flex items-center space-x-1 border-2 p-2 rounded-full'>
            <MenuIcon className='h-6 cursor-pointer'/>
            <UserCircleIcon onClick={() => router.push("/signin")}
            className='h-6 cursor-pointer' />

            </div>

      </div> 

      {searchInput && (  
        <div className="flex flex-col col-span-3 mx-auto ">
            <DateRangePicker ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={[" #FD5B61"]}
            onChange={handleSelect}  />

            <div className="flex items-center border-b mb-4">
              <h2 className="text-2xl flex-grow font-semibold">Number of guests </h2>
            
              <UsersIcon  className="h-5"/>
              <input 
              value={noOfGuests}
              onChange={event => setNoOfGuests(event.target.value)}
              type="number" 
              min={1}
              className="w-12 pl-2 text-lg outline-none text-red-400"></input>
            </div>

            <div className="flex ">
              <button onClick={resetInput} 
              className="flex-grow bg-red-400 text-white rounded-full font-semibold mr-4 py-2 hover:shadow-lg ">Cancel</button>
              <button onClick={search} className="flex-grow bg-red-400 text-white rounded-full font-semibold ml-4 py-2 hover:shadow-lg">Search</button>
            </div>

        </div> 

      )}


    </header>
  );
}

export default Header
