import axios from 'axios'
import React, { useState } from 'react'

function Category() {

  const [images, setImg] = useState()
  const [name, setName] = useState()

  const category = async (e) => {
    e.preventDefault()
    const data = new FormData()
    data.append('images', images)
    data.append('name', name)
    console.log(...data)

    await axios.post('http://localhost:5001/category', data)
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
          <h1 className='font-semibold text-4xl'>Post Category</h1>
        </div>
        <div className='bg-blue-700 py-2 px-5 rounded-md'>
          <input type="file" name="" id="" onChange={e => setImg(e.target.files[0])} />
        </div>
        <input type="text" placeholder='Category-Name' className='outline-none border-black text-xl border-2 py-1 px-2 text-black font-semibold rounded-md' onChange={e => setName(e.target.value)} value={name} />
        <button className='bg-blue-600 rounded-md text-2xl font-semibold py-1' onClick={category}> Post</button>
      </div>
    </div>
  )
}

export default Category
