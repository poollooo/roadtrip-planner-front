import React from 'react'
import BasicDateRangePicker from './BasicDateRangePicker'
import HeroImage from '../images/Hero-Image.svg'


const SearchBar = () => {
    return (
        <div className="flex flex-row justify-between items-center mx-auto h-20 bg-white border-solid border-[2px] border-green-pine rounded-md text-black w-[70vw]">
            <div className='flex flex-col justify-between pl-4 w-[20vw] gap-1'>
                <h1 className='text-md text-green-pine'>Search a city</h1>
                <input type="text" id="search-city" name="search-city" placeholder='Paris, Katmandhu, Cancun?' className='focus:outline-none' />
            </div>
            <div className='flex flex-col justify-between w-[30vw]'>
                <BasicDateRangePicker />
            </div>
            <button className='bg-green-pine justify-center lg:text-[1.5vw] text-[2vw] text-white w-[16vw] h-full'>Start Exploring</button>
        </div>
    )
}

export default SearchBar