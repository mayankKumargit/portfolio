import React from 'react'
import personal from "../assets/personal.jpg" 
import {MdOutlineKeyboardArrowRight} from "react-icons/md" 
import { Link } from 'react-scroll'
function Home() {
    return (
        <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>I am a full stack web developer</h2>
                    <p className='text-gray-500 py-4 max-w-md text-1.5xl'>I am a aspiring web developer I am a aspiring web developer 
                            I am a aspiring web developer I am a aspiring web developer
                    </p>
                    <div>
                        <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-5 py-2 my-2 flex
                         items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-800 cursor-pointer'>
                            portfolio
                            <span className='group-hover:rotate-90 duration-200'>
                                <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight>
                            </span>
                        </Link>
                    </div>
                </div>
                <div>
                    <img src={personal} style={{height:"300px",width:"400px"}} alt='personal' className='rounded-2xl mx-auto w-2/3 md:w-full'></img>
                </div>
            </div>
        </div>
    )
}

export default Home
