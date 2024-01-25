/* eslint-disable jsx-a11y/iframe-has-title */
import axios from 'axios'
import React, { useState } from 'react'

function Contact() {


    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [message, setMessage] = useState()

    const contact = async (e) => {
        e.preventDefault()
        const data = { name, email, message }
        console.log(data)

        await axios.post("http://localhost:5001/contact", data)
            .then(res => {
                console.log(res)
                setName("")
                setEmail("")
                setMessage("")
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <div className='' style={{
                backgroundImage: 'url("https://c4.wallpaperflare.com/wallpaper/979/646/504/desert-moon-stars-night-wallpaper-preview.jpg")', backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: 'center'
            }}>
                <div className='flex justify-center items-center flex-col mx-auto sm:p-24 p-10'>
                    <h1 className='text-white text-3xl text-center pb-5'>CONTACT US NOW</h1>
                    <h1 className='  text-white font-bold text-4xl pb-5 text-center'><span className='text-yellow-500'>KEEP</span> IN TOUCH</h1>
                    <div className='flex space-x-8 text-lg'>
                        <h1 className='text-white'>Home</h1>
                        <h1 className='text-white'>|</h1>
                        <h1 className='text-gray-200'>Contact Us</h1>
                    </div>
                </div>
            </div>


            <div className='bg-sky-800 xl:p-20 lg:p-15 md:p-10 sm:p-5'>
                <div className='md:flex flex-row xl:w-3/4 lg:w-2/3 md:1/2 mx-auto bg-cyan-500 p-10 rounded-lg items-center justify-center mb-10'>
                    <div className=' flex basis-3/5'>
                        <img src={require('../image/contactpng.png')} alt="" />
                    </div>
                    <div className='items-center flex-wrap flex-col flex basis-2/5 '>
                        <img src={require('../image/padlock.png')} alt="" className='h-8' />
                        <h1 className='text-3xl text-white pb-6'>Contact Us</h1>
                        <input type="text" placeholder='Name' className='p-2  w-full  mb-4 rounded-md font-medium text-xl outline-none' onChange={e => setName(e.target.value)} value={name} />
                        <input type="email" placeholder='Email' className='p-2  mb-4 w-full rounded-md font-medium text-xl outline-none' onChange={e => setEmail(e.target.value)} value={email} />
                        <textarea placeholder='Enter Your Message' className='p-2  mb-4 w-full rounded-md font-medium text-xl outline-none' cols="30" rows="5" onChange={e => setMessage(e.target.value)} value={message}></textarea>
                        <button className='bg-white py-2 w-full mb-4 rounded-md font-medium text-xl' onClick={contact}>SEND</button>
                    </div>
                </div>

                <div>
                    <h1 className='text-center text-4xl text-white'>⭐⭐ Your Location ⭐⭐</h1>
                </div>
            </div>

            <div style={{ width: "100%" }}>
                <iframe
                    width="100%"
                    height={600}
                    frameBorder={0}
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                    src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=sparks%20to%20ideas+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                >
                    &lt;a href="https://www.maps.ie/population/"&gt;Find Population on
                    Map&lt;/a&gt;
                </iframe>
            </div>

        </>
    )
}

export default Contact
