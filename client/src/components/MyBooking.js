/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function MyBooking() {
  const [bookings, setBookings] = useState();
  const [eventId, setEventId] = useState()
  const [data, setData] = useState()


  const loginId = JSON.parse(localStorage.getItem('id'))

  useEffect(() => {
    axios.get(`http://localhost:5001/mybooking/${loginId}`)
      .then(res => {
        setBookings(res.data.result);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [loginId]);


  useEffect(() => {
    axios.get(`http://localhost:5001/wedding`)
      .then(res => {
        setData(res.data.result);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);



  console.log(bookings)
  console.log(data)

  useEffect(() => {
    if (data && bookings) {
      console.log(data, bookings, "abcd")
      const obj = []
      for (let x = 0; x < bookings.length; x++) {
        data.map((el, i) => {
          if (el.id == bookings[x].eventId) {
            obj.push(el)
          }
        })
      }
      setEventId(obj, "data")
    }
  }, [data, bookings])

  return (
    <>
      <div className='' style={{
        backgroundImage: 'url("https://c4.wallpaperflare.com/wallpaper/979/646/504/desert-moon-stars-night-wallpaper-preview.jpg")', backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: 'center'
      }}>
        <div className='flex justify-center items-center flex-col mx-auto lg:w-1/3 md:p-24 p-2'>
          <h1 className='text-white text-3xl text-center pb-5'>HARMONI EVENT</h1>
          <h1 className='text-yellow-500 font-bold text-5xl pb-5'>HARMONI</h1>
          <h1 className='font-semibold text-5xl text-white pb-5'>MyBooking</h1>
          <div className='flex space-x-8 text-lg'>
            <h1 className='text-white'>Home</h1>
            <h1 className='text-white'>|</h1>
            <h1 className='text-gray-200'>MyBooking</h1>
          </div>
        </div>
      </div>

      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 py-10 w-11/12 mx-auto '>
        {eventId?.map(item => (
          <div className='flex flex-col rounded-md text-black font-semibold' style={{
            backgroundImage: 'url("https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjU0NmJhdGNoMy1teW50LTM0LWJhZGdld2F0ZXJjb2xvcl8xLmpwZw.jpg")', backgroundSize: "cover", backgroundRepeat: "no-repeat"
          }}>
            <img src={item.image} alt="" className='rounded-t-md h-80' />
            <div className='items-center flex flex-col'>
              <button className='py-2 bg-slate-300 text-2xl rounded-xl w-fit px-10 my-2'>{item.name}</button>
              <button className='py-2 bg-slate-300 text-2xl rounded-xl w-fit px-10 my-2'>{item.date}</button>
              <button className='py-2 bg-slate-300 text-2xl rounded-xl w-fit px-10 my-2'>{item.price}</button>
            </div>
            <h1> 🕗 Start: {item.timestart} - {item.timeend}</h1>
            <h1> 📍 {item.details}</h1>
          </div>
        ))}
      </div>
    </>
  )
}

export default MyBooking
