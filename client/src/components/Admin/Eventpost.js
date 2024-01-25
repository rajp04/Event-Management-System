import React, { useState } from 'react'
import axios from 'axios'

function Eventpost() {

  const [image, setImage] = useState()
  const [date, setDate] = useState()
  const [price, setPrice] = useState()
  const [timestart, setTimestart] = useState()
  const [timeend, setTimeend] = useState()
  const [details, setDetails] = useState()
  const [category, setCategory] = useState()
  const [name, setName] = useState()

  const wedding = async (e) => {
    e.preventDefault()
    const data = new FormData()
    data.append("image", image)
    data.append("date", date)
    data.append("price", price)
    data.append("timestart", timestart)
    data.append("timeend", timeend)
    data.append("details", details)
    data.append("category", category)
    data.append("name", name)

    console.log(...data)

    // const data = { image, name, date, price, timestart, timeend, category, details }
    // console.log(data)

    await axios.post("http://localhost:5001/wedding", data)
      .then(res => {
        console.log(res)
        if (res.data.success === 1) {
          alert(res.data.message)
        } else {
          alert("Data Not Send Successfully")
        }

      })
      .catch(err => console.log(err))
  }

  return (
    <div className='flex justify-center items-center py-10'>
      <div className="flex flex-col space-y-4">
        <div className='flex justify-center items-center flex-col'>
          <img src={require('../../image/padlock.png')} className='h-10 w-10' alt="" />
          <h1 className='font-semibold text-4xl'>Event Post</h1>
        </div>
        <div className='bg-blue-700 py-2 px-5 rounded-md'>
          <input type="file" name="file" onChange={e => setImage(e.target.files[0])} />
        </div>
        <input type="text" placeholder='Name' className='outline-none border-black text-xl border-2 py-1 px-2 text-black font-semibold rounded-md' onChange={e => setName(e.target.value)} value={name} />
        <input type="date" placeholder='Date' className='outline-none border-black text-xl border-2 py-1 px-2 text-black font-semibold rounded-md' onChange={e => setDate(e.target.value)} value={date} />
        <input type="text" placeholder='Price' className='outline-none border-black text-xl border-2 py-1 px-2 text-black font-semibold rounded-md' onChange={e => setPrice(e.target.value)} value={price} />
        <input type="time" placeholder='Time' className='outline-none border-black text-xl border-2 py-1 px-2 text-black font-semibold rounded-md borde' onChange={e => setTimestart(e.target.value)} value={timestart} />
        <input type="time" placeholder='Time' className='outline-none border-black text-xl border-2 py-1 px-2 text-black font-semibold rounded-md' onChange={e => setTimeend(e.target.value)} value={timeend} />


        <select className='outline-none border-black text-xl border-2 py-1 px-2 text-black font-semibold rounded-md' onChange={e => setCategory(e.target.value)} value={category} >
          <option value="Select Category">Select Category</option>
          <option value="wedding">wedding</option>
          <option value="sport">sport</option>
          <option value="birthday">birthday</option>
        </select>


        <input type="text" placeholder='details' className='outline-none border-black text-xl border-2 py-1 px-2 text-black font-semibold rounded-md' onChange={e => setDetails(e.target.value)} value={details} />
        <button className='bg-blue-600 rounded-md text-2xl font-semibold py-1' onClick={wedding}> Post</button>
      </div>
    </div>
  )
}

export default Eventpost
