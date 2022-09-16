import React from 'react'
import BasicDateRangePicker from './BasicDateRangePicker'
import HeroImage from '../images/Hero-Image.svg'


const SearchBar = () => {
    return (
        <div className="flex flex-row justify-between items-center mx-auto h-20 bg-white rounded-2xl text-black w-[70vw]">
            <div className='flex flex-col justify-center pl-4 w-[20vw]'>
                <input type="text" id="search-city" name="search-city" placeholder='Search a city' className='focus:outline-none text-lg' />
            </div>
            <div className='flex flex-col justify-between w-[30vw]'>
                <BasicDateRangePicker />
            </div>
            <button className='bg-green-pine justify-center lg:text-[1.5vw] text-[2vw] text-white w-[16vw] h-full rounded-tr-2xl rounded-br-2xl'>Start Exploring</button>
        </div>
    )
}

export default SearchBar