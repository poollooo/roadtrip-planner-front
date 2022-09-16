import React, { useState } from 'react'
import BasicDateRangePicker from './BasicDateRangePicker'
import { Link } from 'react-router-dom'


const SearchBar = ({ searchQuery, setSearchQuery }) => {
    const [searchCity, setSearchCity] = useState('');

    const handleSearch = (e) => {
        setSearchCity(e.target.value.toLocaleLowerCase())
        // update the searchQuery state with the new city
        setSearchQuery({ ...searchQuery, city: e.target.value.toLocaleLowerCase() })
    }

    return (
        <div className="flex flex-row justify-between items-center mx-auto h-20 bg-white rounded-2xl text-black w-[70vw]">
            <div className='flex flex-col justify-center pl-4 w-[20vw]'>
                <input
                    type="text"
                    id="search-city"
                    name="search-city"
                    placeholder='Search a city'
                    className='focus:outline-none text-lg'
                    value={searchCity}
                    onChange={handleSearch}

                />
            </div>
            <div className='w-[30vw]'>
                <BasicDateRangePicker searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            </div>
            <Link to={searchCity} className='bg-green-pine w-[16vw] h-full rounded-tr-2xl rounded-br-2xl'>
                <button className='justify-center lg:text-[1.5vw] text-[2vw] text-white w-[16vw] h-full'>Start Exploring</button>
            </Link>
        </div>
    )
}

export default SearchBar