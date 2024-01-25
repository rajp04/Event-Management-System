/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Myaccount() {
    const navigate = useNavigate()
    const [image, setImage] = useState()
    const [data, setData] = useState()
    const location = useLocation()
    console.log(location);
    const fdata = new FormData()

    const id = JSON.parse(localStorage.getItem('id'))

    const hiddenFileInput = useRef();

    const handleClick = async () => {
        fdata.append("image", image)
        await axios.patch(`http://localhost:5001/picture/${id}`, fdata)
            .then(res => {
                console.log(res)
                if (res.data.success === 1) {
                    window.location.reload()
                } else {
                    alert("update Fail")
                }
            })
            .catch(err => console.log(err))
    };

    useEffect(() => {
        if (image) {
            handleClick()
        }
    }, [image])

    useEffect(() => {
        axios.get(`http://localhost:5001/signup/${id}`)
            .then(res => {
                setData(res.data.result);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <>
            <div className='p-5 max-w-xl mx-auto my-10'>
                <div className="rounded-xl p-3 shadow-lg bg-gray-200">
                    <div className='flex flex-col items-center'>
                        {/* <img src={require('../image/pngegg.png')} alt="" className='h-28 w-28' /> */}
                        {data ? (
                            data.map(item => (
                                <img
                                    src={item.image}
                                    alt="Preview"
                                    onClick={() => hiddenFileInput.current.click()}
                                    style={{ cursor: 'pointer' }}
                                    className='w-24 h-24 rounded-full'
                                />
                            ))
                        ) : (
                            <img
                                src={require('../image/pngegg.png')}
                                onClick={() => hiddenFileInput.current.click()}
                                alt=""
                                style={{ cursor: 'pointer' }}
                                className='w-24 h-24'
                            />
                        )}

                        <input type="file" onChange={(e) => setImage(e.target.files[0])} ref={hiddenFileInput} style={{ display: 'none' }} />
                        <h1 className='text-black text-3xl font-bold'>{location.state.name}</h1>
                    </div>

                    <div className='p-3 rounded-md flex flex-col'>
                        <div className='flex items-center border-b-2 border-black p-2 hover:bg-white'>
                            <img src={require('../image/user.png')} alt="" className='w-6 h-6' />
                            <div className='text-xl ps-5 font-bold cursor-pointer' onClick={() => navigate('/account', { state: location.state })} >Profile</div>
                        </div>
                        <div className='flex border-b-2 border-black p-2  hover:bg-white items-center'>
                            <img src={require('../image/padlock.png')} alt="" className='w-6 h-6' />
                            <div className='text-xl ps-5 font-bold cursor-pointer' onClick={() => navigate('/changepassword')}>Change Password</div>
                        </div>
                        <div className='flex border-b-2 items-center border-black p-2  hover:bg-white'>
                            <img src={require('../image/checkout.png')} alt="" className='w-6 h-6' />
                            <Link className='text-xl ps-5 font-bold cursor-pointer' to='/book'>My Booking</Link>
                        </div>
                        <div className='flex border-b-2 items-center border-black p-2 hover:bg-white'>
                            <img src={require('../image/power-off.png')} alt="" className='w-6 h-6' />
                            <div className='text-xl ps-5 font-bold cursor-pointer' onClick={() => {
                                localStorage.removeItem("id")
                                navigate('/')
                                window.location.reload()
                            }}>Logout</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Myaccount
