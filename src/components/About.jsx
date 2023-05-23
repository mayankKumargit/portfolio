import React from 'react'

function About() {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-700 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-20'>"Hello! I'm <bold>Mayank Kumar</bold>, a passionate web developer with a deep love for 
                creating innovative and user-friendly websites. 
                I am dedicated to delivering exceptional digital experiences through clean, efficient, and visually 
                captivating code.</p>
                <br></br>
                <p className='text-xl'>Over time, my passion grew, and I honed my skills in front-end and back-end development, 
                mastering HTML, CSS, JavaScript, and various frameworks like React and Node.js.
                I believe in the power of combining aesthetics with functionality, and I strive to create websites that 
                not only captivate users visually but also provide seamless and intuitive navigation.</p>
            </div>
        </div>
    )
}

export default About
