import React from 'react'
import { AiFillDashboard } from 'react-icons/ai'
import { BsCalendarEventFill } from 'react-icons/bs'
import { MdCategory } from "react-icons/md";
import { IoLogOut, IoCloudDoneSharp } from 'react-icons/io5'
import { FaListCheck } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom';

function Sidebar() {
    const navigate = useNavigate()
    return (
        <div className="flex flex-col h-full min-h-screen bg-cyan-950 text-white">
            <div className="justify-center items-center pt-5 flex">
                <h1 className='text-4xl font-bold'>Admin Panel</h1>
            </div>
            <div className="p-10 space-y-12">
                <div className='flex items-center cursor-pointer'>
                    <AiFillDashboard className='text-3xl' />
                    <h1 className='ps-2 text-2xl font-semibold ' onClick={() => navigate('/admin')}>Dashboard</h1>
                </div>
                <div className='flex items-center cursor-pointer'>
                    <FaListCheck className='text-2xl' />
                    <h1 className='ps-2 text-2xl font-semibold' onClick={() => navigate('/admin/userlist')}>User List</h1>
                </div>
                <div className='flex items-center cursor-pointer'>
                    <BsCalendarEventFill className='text-2xl' />
                    <h1 className='ps-2 text-2xl font-semibold' onClick={() => navigate('/admin/eventpost')}>Event Post</h1>
                </div>
                <div className='flex items-center cursor-pointer'>
                    <IoCloudDoneSharp className='text-3xl' />
                    <div className='underline-offset-0'></div>
                    <h1 className='ps-2 text-2xl font-semibold' onClick={() => navigate('/admin/bookedevent')}>Booked Event</h1>
                </div>
                <div className='flex items-center cursor-pointer'>
                    <MdCategory className='text-3xl' />
                    <h1 className='ps-2 text-2xl font-semibold' onClick={() => navigate('/admin/category')}>Post Categoty</h1>
                </div>
                <div className='flex items-center cursor-pointer'>
                    <IoLogOut className='text-3xl' />
                    <h1 className='ps-2 text-2xl font-semibold' onClick={() => {
                        sessionStorage.removeItem("admin")
                        navigate('/')
                    }}>Logout</h1>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
