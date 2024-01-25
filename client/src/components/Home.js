import React from 'react'
import Main from './Main'
import img from '../image/abstract-1846226.jpg'

function Home() {
  
  return (
    <>
      <div className='flex flex-row flex-wrap bg-cover bg-center' style={{ backgroundImage: `url(${img})` }}>
        <div className='basis-1/3 sm:ms-20 ms-2 py-12 text-red-400 font-semibold '>
          <h1 className='text-6xl pb-10'>One Stop Event Planner</h1>
          <p className='text-gray-300 text-lg pb-10 sm:whitespace-pre-wrap'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
          <p className='text-cyan-400 text-lg pb-10'>Every event should be Perfect</p>
          <div className='sm:flex pb-10'>
            <input type="email" placeholder='Your Email Address' className='py-3 px-5 text-white bg-cyan-950 outline-none text-2xl rounded-s-md' />
            <button className='bg-orange-600 py-2 px-2 text-2xl sm:rounded-e-md  text-white'>Get Started</button>
          </div>
          <div className='flex'>
            <img src={require('../image/people.png')} alt="" />
            <p className='text-xs flex items-center text-white ps-2'>1,600 people requested access a visit in last 24 hours</p>
          </div>
        </div>
      </div>
      <Main />
    </>
  )
}

export default Home
