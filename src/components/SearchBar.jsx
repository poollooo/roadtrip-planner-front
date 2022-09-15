import React from 'react'
import BasicDateRangePicker from './BasicDateRangePicker'


const SearchBar = () => {
    return (
        <div className='flex flex-row justify-between items-center mx-20 h-20 bg-white border-solid border-[2px] border-green-pine rounded-md text-black w-[70vw]'>
            <div className='flex flex-col justify-between pl-4 w-[20vw] gap-2'>
                <h1>Search a city</h1>
                <input type="text" id="search-city" name="search-city" placeholder='Paris, Katmandhu, Cancun?' className='focus:outline-none' />
            </div>
            <div className='flex flex-col justify-between'>
                <h1 className=''>Dates</h1>
                <BasicDateRangePicker />
            </div>
            <button className='bg-green-pine justify-center text-white my-auto w-[16vw] h-full'>Start Exploring</button>
        </div>
    )
}

export default SearchBar