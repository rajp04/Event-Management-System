import React from 'react'

function About() {
  return (
    <>
      <div className='' style={{
        backgroundImage: 'url("https://c4.wallpaperflare.com/wallpaper/979/646/504/desert-moon-stars-night-wallpaper-preview.jpg")', backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: 'center'
      }}>
        <div className='flex justify-center items-center flex-col mx-auto lg:w-1/3 md:p-24 p-2'>
          <h1 className='text-white text-3xl text-center pb-5'>ALL YOU NEED TO KNOW</h1>
          <h1 className='text-yellow-500 font-bold text-5xl pb-5'>ABOUT</h1>
          <h1 className='font-semibold text-5xl text-white pb-5'>HARMONI</h1>
          <div className='flex space-x-8 text-lg'>
            <h1 className='text-white'>Home</h1>
            <h1 className='text-white'>|</h1>
            <h1 className='text-gray-200'>About</h1>
          </div>
        </div>
      </div>

      <div className='bg-gradient-to-r from-sky-800 to-cyan-950'>
        <div className='lg:flex flex-row w-5/6 mx-auto py-5 pb-16'>
          <div className='flex flex-col basis-1/3 pb-5'>
            <h1 className='text-gray-200 text-2xl pb-2'>We are harmoni</h1>
            <h1 className='text-white text-5xl pb-3'>No.1 Events Management</h1>
            <h1 className='text-gray-200 text-2xl'>Get Started!</h1>
          </div>

          <div className='flex flex-col basis-1/3 pb-5'>
            <div className='flex items-center pb-2'>
              <h1 className='text-3xl text-white font-medium'>Our Mission</h1>
              <div className='h-2 w-16 bg-yellow-500 ms-3'></div>
            </div>
            <p className='pe-12 pb-3 text-gray-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum neque dolore quia officiis id consequatur non et nostrum quaerat quos ratione quae perspiciatis quo placeat mollitia voluptates laboriosam, itaque molestiae error pariatur sit nemo inventore cum! Quaerat dignissimos vel non?</p>
            <p className='pe-12 text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptates natus illo aliquid qui ducimus labore beatae nihil veniam at!</p>
          </div>

          <div className='flex flex-col basis-1/3 '>
            <div className='flex items-center pb-2'>
              <h1 className='text-3xl text-white font-medium'>Our Mission</h1>
              <div className='h-2 w-16 bg-yellow-500 ms-3'></div>
            </div>
            <p className='pe-12 pb-3 text-gray-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum neque dolore quia officiis id consequatur non et nostrum quaerat quos ratione quae perspiciatis quo placeat mollitia voluptates laboriosam, itaque molestiae error pariatur sit nemo inventore cum! Quaerat dignissimos vel non?</p>
            <p className='pe-12 text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptates natus illo aliquid qui ducimus labore beatae nihil veniam at!</p>
          </div>
        </div>



        <div className='lg:flex flex-row w-5/6 mx-auto pb-16'>
          <div className='basis-1/2'>
            <div style={{
              backgroundImage: 'url("https://skylineentourage.com/wp-content/uploads/2018/04/pexels-photo-290151-1024x577-540x540.jpeg")', backgroundSize: "cover", backgroundRepeat: "no-repeat"
            }} className='flex justify-center items-center lg:p-20 p-5'>
              <img src={require('../image/company-banner.png')} alt="" />
            </div>
          </div>

          <div className='basis-1/2 lg:ps-5'>
            <div className='pb-5'>
              <h1 className='text-gray-400 text-3xl font-medium'>Harmoni Award</h1>
              <h1 className='text-gray-200 text-5xl font-medium'>Our Winning Awards</h1>
            </div>
            <div>
              {/* <div className='w-1 bg-white h-96 ms-2'></div>
              <div className='w-28 h-1 bg-white relative -top-24 mb-1'></div>
              <div className='rounded-xl bg-yellow-500 w-5 h-5 relative -top-28'></div> */}
            </div>
          </div>
        </div>



        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-4 w-11/12 mx-auto pb-12'>
          <div className='bg-white p-3 rounded-md '>
            <h1 className='text-center font-medium text-xl'>Study With Us</h1>
            <p>Visit Our World class Faclilty for South Affican Scientist and Spectrum</p>
          </div>
          <div className='bg-white p-3 rounded-md '>
            <h1 className='text-center font-medium text-xl'>Study With Us</h1>
            <p>Visit Our World class Faclilty for South Affican Scientist and Spectrum</p>
          </div>
          <div className='bg-white p-3 rounded-md '>
            <h1 className='text-center font-medium text-xl'>Study With Us</h1>
            <p>Visit Our World class Faclilty for South Affican Scientist and Spectrum</p>
          </div>
          <div className='bg-white p-3 rounded-md '>
            <h1 className='text-center font-medium text-xl'>Study With Us</h1>
            <p>Visit Our World class Faclilty for South Affican Scientist and Spectrum</p>
          </div>
          <div className='bg-white p-3 rounded-md '>
            <h1 className='text-center font-medium text-xl'>Study With Us</h1>
            <p>Visit Our World class Faclilty for South Affican Scientist and Spectrum</p>
          </div>
          <div className='bg-white p-3 rounded-md '>
            <h1 className='text-center font-medium text-xl'>Study With Us</h1>
            <p>Visit Our World class Faclilty for South Affican Scientist and Spectrum</p>
          </div>
          <div className='bg-white p-3 rounded-md '>
            <h1 className='text-center font-medium text-xl'>Study With Us</h1>
            <p>Visit Our World class Faclilty for South Affican Scientist and Spectrum</p>
          </div>
          <div className='bg-white p-3 rounded-md '>
            <h1 className='text-center font-medium text-xl'>Study With Us</h1>
            <p>Visit Our World class Faclilty for South Affican Scientist and Spectrum</p>
          </div>
        </div>
      </div>
    </>

  )
}

export default About
