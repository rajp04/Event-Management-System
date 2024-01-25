/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'

function Gallery() {
    return (
        <>
            <div className='' style={{
                backgroundImage: 'url("https://c4.wallpaperflare.com/wallpaper/979/646/504/desert-moon-stars-night-wallpaper-preview.jpg")', backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: 'center'
            }}>
                <div className='flex justify-center items-center flex-col mx-auto lg:w-1/3 md:p-24 p-2'>
                    <h1 className='text-white text-3xl text-center pb-5'>HARMONI EVENT</h1>
                    <h1 className='text-yellow-500 font-bold text-5xl pb-5'>HARMONI</h1>
                    <h1 className='font-semibold text-5xl text-white pb-5'>GALLERY</h1>
                    <div className='flex space-x-8 text-lg'>
                        <h1 className='text-white'>Home</h1>
                        <h1 className='text-white'>|</h1>
                        <h1 className='text-gray-200'>Harmoni Gallery</h1>
                    </div>
                </div>
            </div>



            <div className='bg-sky-700'>
                <div>
                    <h1 className='text-white text-4xl p-4 text-center'>-----⭐⭐ Our Gallery ⭐⭐-----</h1>
                </div>
            </div>
        </>
    )
}

export default Gallery
