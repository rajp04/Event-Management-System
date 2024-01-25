import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
    const [click, setClick] = useState(false)
    const [data, setData] = useState()
    const navigate = useNavigate()
    const id = JSON.parse(localStorage.getItem('id'))

    // console.log(id)

    useEffect(() => {
        (async () => {
            await axios.get(`http://localhost:5001/userbyid/${id}`)
                .then(res => setData(res.data.result[0]))
                .catch(err => console.log(err))
        })()
    }, [id])

    // console.log(data)

    const navigates = () => {
        navigate('/myaccount', { state: data })
    }

    const handlenavigate = () => {
        navigate('/')
    }   
    return (
        <div className='bg-sky-950 sm:flex justify-around text-white items-center py-3 px-5'>
            <div className='flex justify-between items-center '>
                <img className='w-24 pb-3 cursor-pointer' src={require("../image/2.site-logo.png")} alt='' onClick={handlenavigate} />
                <div className='sm:hidden text-5xl' onClick={() => click === false ? setClick(true) : setClick(false)}>&#8801;</div>
            </div>
            {click ? <ul className='grid sm:hidden font-bold sm:space-x-5 text-xl sm:text-lg'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/event'>Event</Link></li>
                <li><Link to='/gallery'>Gallery</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul> : null}
            <ul className='hidden sm:flex font-bold sm:space-x-5 text-xl sm:text-lg'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/event'>Event</Link></li>
                <li><Link to='/gallery'>Gallery</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
            {data ? <div className='flex items-center'><span className='text-2xl font-semibold pe-3'>{data.name}</span> <img src={require('../image/user.png')} alt="" onClick={navigates} className='cursor-pointer' /></div> : <Link className='py-2 px-6 bg-green-500 rounded-md' to='/signin'>SignIn</Link>}

        </div>
    )
}

export default Header
