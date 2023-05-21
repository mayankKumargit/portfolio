import React from 'react'
import calculator from "../assets/projects/calculator.PNG"
import extension from "../assets/projects/extension.jpg"
import railway from "../assets/projects/railway.jpg"
import tictac from "../assets/projects/tictac.jpg"
import todolist from "../assets/projects/todolist.jpg"
import weather from "../assets/projects/weather.jpg"

function Portfolio() {
    const portfoilos=[
        {
            id:1,
            src:calculator,
            href:"#",
            name:"Calculator"
        },
        {
            id:2,
            src:extension,
            href:"#",
            name:"Chrome Extension"
        },
        {
            id:3,
            src:railway,
            href:"#",
            name:"Railway reservation system"
        },
        {
            id:4,
            src:tictac,
            href:"#",
            name:"Tic Tac Toe game"
        },
        {
            id:5,
            src:todolist,
            href:"#",
            name:"Todo List"
        },
        {
            id:6,
            src:weather,
            href:"#",
            name:"Weather website"
        }
    ]
    return (
        <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my work</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                        portfoilos.map(({id,src,href,name})=>{
                            return(
                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                                <img src={src} alt='calc' className='rounded-md duration-200 hover:scale-105'></img>
                                <div className='flex flex-col'>
                                <p className='flex justify-center items-center py-2'>{name}</p>
                                <button className='hover:scale-125 duration-200'><a href={href} target='_blank' rel='noreferrer'>
                                                                                Code</a></button>
                                </div>
                            </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Portfolio
