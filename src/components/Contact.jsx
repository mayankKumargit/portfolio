import React from 'react'

function Contact() {
    return (
        <div name="contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Contact</p>
                    <p className="py-6">Submit the form below to get in touch with me</p>
                </div>
                <div className='flex justify-center items-center'>
                    <form action='https://getform.io/f/bce1ba7b-64dc-452c-870c-bd1f4e85c78e' 
                            className='flex flex-col w-full md:w-1/2' method='POST'>
                        <input type='text' name='name' placeholder='enter your name' required
                                className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></input>
                        <input type='text' name='email' placeholder='enter your email' required
                                className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></input>
                        <textarea rows={10} name='message' placeholder='enter your message' required
                                className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                        <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8
                                            mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
