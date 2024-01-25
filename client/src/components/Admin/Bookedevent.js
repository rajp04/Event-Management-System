import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Bookedevent() {
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5001/booking`)
      .then(res => {
        setBooking(res.data.result);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  // console.log(booking)

  return (
    <div>
      <div className="flex flex-col">
        <div className='flex bg-gray-500 font-bold text-2xl ps-10 pe-5 py-2'>
          <h1 className='w-96 ps-5'>Id</h1>
          <h1 className='w-96 ps-5'>LoginId</h1>
          <h1 className='w-96 ps-5'>EventId</h1>
        </div>
        {booking.map(item => (
          <div key={item.id} className='flex ps-10 pe-5 text-xl font-semibold border-b-2 py-2 text-gray-800 bg-gray-50'>
            <h1 className='w-96 ps-5 overflow-x-hidden'>{item.id}</h1>
            <h1 className='w-96 ps-5 overflow-x-hidden'>{item.loginId}</h1>
            <h1 className='w-96 overflow-x-hidden ps-5'>{item.eventId}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Bookedevent
