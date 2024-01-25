import axios from 'axios'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Booking() {
    const location = useLocation()
    console.log(location)

    const navigate = useNavigate()

    const handleBook = async (e) => {
        e.preventDefault()
        const loginId = localStorage.getItem('id')
        const eventId = location.state.item.id
        // console.log('Logged User Id:', loginId)
        // console.log('Wedding Plan Id:', location.state.item.id)

        const data = { loginId, eventId }
        console.log(data)
        await axios.post('http://localhost:5001/booking', data)
            .then(res => {
                const result = res.data.result;
                console.log('Result:', result);
                navigate('/')
            })
            .catch(error => {
                console.error('Error:', error);
            });

    }

    return (
        <div className='bg-cyan-700 sm:p-12 p-2'>
            <div className='xl:w-4/6 lg:w-5/6 mx-auto '>
                <div className='flex flex-col rounded-md text-black font-semibold' style={{
                    backgroundImage: 'url("https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjU0NmJhdGNoMy1teW50LTM0LWJhZGdld2F0ZXJjb2xvcl8xLmpwZw.jpg")', backgroundSize: "cover", backgroundRepeat: "no-repeat"
                }}>
                    <img src={location.state.item.image} alt="" className='rounded-t-md h-96' />
                    <div className='flex flex-col items-center'>
                        <button className='py-2 bg-slate-300 text-2xl rounded-xl w-fit px-10 my-2'>{location.state.item.name}</button>
                        <button className='py-2 bg-slate-300 text-2xl rounded-xl w-fit px-10 my-2'>{location.state.item.date}</button>
                        <button className='py-2 bg-slate-300 text-2xl rounded-xl w-fit px-10 my-2'>{location.state.item.price}</button>
                        <h1> 🕗 Start: {location.state.item.timestart} - {location.state.item.timeend}</h1>
                        <h1 className='text-center'> 📍 {location.state.item.details}</h1>
                        <div className='py-2 bg-slate-300 text-2xl rounded-xl w-fit px-10 my-2 cursor-pointer' onClick={handleBook}>Book Event</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Booking
