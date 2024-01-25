import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Event() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5001/category`)
            .then(res => {
                setData(res.data.result);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    console.log(data)
    return (
        <>
            <div className='' style={{
                backgroundImage: 'url("https://c4.wallpaperflare.com/wallpaper/979/646/504/desert-moon-stars-night-wallpaper-preview.jpg")', backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: 'center'
            }}>
                <div className='flex justify-center items-center flex-col mx-auto lg:w-1/3 md:p-24 p-2'>
                    <h1 className='text-white text-3xl text-center pb-5'>HARMONI EVENT</h1>
                    <h1 className='text-yellow-500 font-bold text-5xl pb-5'>HARMONI</h1>
                    <h1 className='font-semibold text-5xl text-white pb-5'>EVENT</h1>
                    <div className='flex space-x-8 text-lg'>
                        <h1 className='text-white'>Home</h1>
                        <h1 className='text-white'>|</h1>
                        <h1 className='text-gray-200'>Event</h1>
                    </div>
                </div>
            </div>

            <div className='bg-cyan-700 py-10'>

                <div className='md:flex justify-center pb-10 text-3xl  md:space-x-5 space-x-1 text-white'>
                    <Link className='py-2 mb-2 px-5 rounded-full bg-black' to='/event'>Category</Link>
                    <Link className='py-2 mb-2 px-5 rounded-full bg-black' to='/wedding'>Wedding</Link>
                    <Link className='py-2 mb-2 px-5 rounded-full bg-black' to='/sportevent'>Sport Event</Link>
                    <Link className='py-2 mb-2 px-5 rounded-full bg-black' to='/bdparty'>Birthday Party</Link>
                </div>

                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 w-11/12 mx-auto text-black font-semibold'>
                    {data.map(item => (
                        <div className='flex flex-col'>
                            <img src={item.images} className='rounded-t-md h-80' alt="" />
                            <div className='w-full bg-white text-center text-3xl p-2 rounded-b-md'>{item.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Event
