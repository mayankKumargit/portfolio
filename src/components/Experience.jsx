import React from 'react'
import html from "../assets/skillImages/html5.png"
import css from "../assets/skillImages/css.png"
import javascript from "../assets/skillImages/js.png"
import react from "../assets/skillImages/react.png"
import node from "../assets/skillImages/node2.png"
import express from "../assets/skillImages/express.png"
import mongodb from "../assets/skillImages/mongodb.png"
import tailwind from "../assets/skillImages/tailwind.png"
function Experience() {
    const technologies=[
        {
            id:1,
            src:html,
            title:"HTML",
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:css,
            title:"CSS",
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:javascript,
            title:"Javascript",
            style:'shadow-yellow-500'
        },
        {
            id:5,
            src:react,
            title:"React",
            style:'shadow-blue-800'
        },
        {
            id:4,
            src:node,
            title:"Node.js",
            style:'shadow-green-500'
        },
        
        {
            id:6,
            src:express,
            title:"Express",
            style:'shadow-blue-100'
        },
        {
            id:7,
            src:mongodb,
            title:"Mongodb",
            style:'shadow-green-600'
        },
        {
            id:8,
            src:tailwind,
            title:"Tailwind",
            style:'shadow-sky-400'
        }
    ]
    return (
        <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                    <p className='py-6'>These are the technologies I kow</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {
                        technologies.map(({id,src,title,style})=>{
                            return(
                                <div className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                    <img src={src} alt='html' className='w-20 mx-auto'></img>
                                    <p className='mt-4'>{title}</p>
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Experience
