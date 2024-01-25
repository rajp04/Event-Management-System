import React from 'react'
import { useNavigate } from 'react-router-dom'

function Footer() {

    const navigate = useNavigate()

    return (
        <div className='bg-blue-950 flex flex-col pt-5'>
            <div className='items-center flex-col flex'>
                <h1 className='font-semibold text-7xl xl:px-64 px-2 text-center pb-8 bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent'>Do you want to step in to the future of Your Upcoming Event</h1>
                <button className='bg-transparent border-2 py-2 px-5 rounded-sm  text-white mb-5'>Request Early Access</button>
            </div>
            <div className='sm:flex text-white justify-around px-3'>
                <div className='pb-5'>
                    <h1 className='text-3xl font-bold'>Links</h1>
                    <p className='text-gray-300 cursor-pointer text-xl font-medium' onClick={() => navigate('/about')}>About</p>
                    <p className='text-gray-300 cursor-pointer text-xl font-medium' onClick={() => navigate('/event')}>Event</p>
                    <p className='text-gray-300 cursor-pointer text-xl font-medium' onClick={() => navigate('/gallery')}>Gallery</p>
                    <p className='text-gray-300 cursor-pointer text-xl font-medium' onClick={() => navigate('/contact')}>Contact</p>
                </div>
                <div className='pb-5'>
                    <h1 className='text-3xl font-bold'>Company</h1>
                    <p className='text-gray-300 cursor-pointer text-xl font-medium'>Terms & Condition</p>
                    <p className='text-gray-300 cursor-pointer text-xl font-medium'>Privacy Policy</p>
                    <p className='text-gray-300 cursor-pointer text-xl font-medium' onClick={() => navigate('/contact')}>Contact</p>
                </div>
                <div className='pb-5'>
                    <h1 className='text-3xl font-bold'>Get in touch</h1>
                    <p className='text-gray-300 cursor-pointer text-xl font-medium'>Ahmedabad India</p>
                    <p className='text-gray-300 cursor-pointer text-xl font-medium'>085-132-4523</p>
                    <p className='text-gray-300 cursor-pointer text-xl font-medium'>Info@sparkstoideas.in</p>
                </div>
            </div>
            <p className='text-white text-center text-xl pb-3'>Harmoni Event Management &copy; 2023 | All Rights Reserved.</p>
        </div>
    )
}

export default Footer
