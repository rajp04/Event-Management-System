import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import { Outlet, useNavigate } from 'react-router-dom'
import Header from './Header'

function Dashboard() {

  const admin = sessionStorage.getItem('admin')
  const navigate = useNavigate()

  useEffect(() => {
    if (admin == null) {
      navigate('/admin/login')
    }
  })
  return (
    <div className='flex'>
      <div className='basis-1/5'>
        <Sidebar />
      </div>
      <div className='basis-4/5'>
        <Header />
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard
