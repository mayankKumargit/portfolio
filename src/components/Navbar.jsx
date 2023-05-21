import React, { useState } from 'react'
import {FaBars,FaTimes} from "react-icons/fa"
import {Link} from "react-scroll"
export default function Navbar() {
    const [nav,setNav]=useState()
    const links=[
        {
            id:1,
            link:"home"
        },
        {
            id:2,
            link:"about"
        },
        {
            id:3,
            link:"portfolio"
        },
        {
            id:4,
            link:"experience"
        },
        {
            id:5,
            link:"contact"
        },
    ]
    return (
        
        <div className='flex justify-between items-center w-full h-20 px-4 text-white fixed bg-black'>
            <div>
                <h1 className='font-signature text-3xl'>Mayank</h1>
            </div>
            <ul className='hidden md:flex'>
                {
                    links.map((link)=>{
                        return (<li key={link.id} 
                        className='px-4 cursor-pointer capitalize font-medium text-violet-200 hover:scale-105 duration-200 text-2xl'>
                            <Link to={link.link} smooth duration={500}>{link.link}</Link></li>)
                    })
                } 
            </ul>
            <div onClick={()=>setNav(!nav)} 
                className='cursor-pointer pr-4 z-10 text-violet-200 md:hidden'>
                {
                    nav ? <FaTimes size={30} /> : <FaBars size={30}/>
                }
            </div>
            {
                nav && <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen
                bg-gradient-to-b from-black to-gray-800 text-violet-200'>
                {
                    links.map((link)=>{
                        return (<li key={link.id} 
                        className='px-4 cursor-pointer capitalize text-4xl py-6 hover:scale-105 duration-200'>
                            <Link to={link.link} smooth duration={500} onClick={()=>setNav(!nav)}>{link.link}</Link></li>)
                    })
                }
                </ul>
            }
            
        </div>
    )
}
