import React from 'react'

function About() {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-700 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-20'>Software developers create software to meet user needs by employing diagrams and models, writing code, 
                    and ensuring  overall functionality. 
                    These professionals design, build, and implement computer programs and applications.
                    Applications software developers focus on applications used on mobile devices and computer desktops. 
                    Systems software developers create and oversee software used in network distribution, along with database, 
                    game, and web development.</p>
                <br></br>
                <p className='text-xl'>Software transcends industries, allowing software developers to design and build programs for companies and 
                    organizations in the private and public sectors. 
                    Discover the skills, duties, and opportunities associated with software development in this guide.</p>
            </div>
        </div>
    )
}

export default About
