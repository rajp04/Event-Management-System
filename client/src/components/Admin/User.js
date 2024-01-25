import axios from 'axios';
import React, { useEffect, useState } from 'react';
import deleteImage from '../../image/delete.png';

function User() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5001/signup`)
            .then(res => {
                setUsers(res.data.result);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    // console.log(users)

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5001/delete/${id}`)
            .then(res => {
                console.log(res.data.message);
                setUsers(users.filter(item => item.id !== id));
            })
            .catch(error => console.error('Error deleting user', error));
    };

    return (
        <div>
            <div className="flex flex-col">
                <div className='flex bg-gray-500 font-bold text-2xl ps-10 pe-5 py-2'>
                    <h1 className='w-32 ps-5'>Id</h1>
                    <h1 className='w-80 ps-5'>Name</h1>
                    <h1 className='w-96 ps-5'>Email</h1>
                    <h1 className='ps-5'>Phone Number</h1>
                    <h1 className='ps-12'>Delete</h1>
                </div>
                {users.map(item => (
                    <div key={item.id} className='flex ps-10 pe-5 text-xl font-semibold border-b-2 py-2 text-gray-800 bg-gray-50'>
                        <h1 className='w-32 ps-5 overflow-x-hidden'>{item.id}</h1>
                        <h1 className='w-80 ps-5 overflow-x-hidden'>{item.name}</h1>
                        <h1 className='w-96 overflow-x-hidden ps-5'>{item.email}</h1>
                        <h1 className='ps-5 w overflow-x-hidden w-64'>{item.phone}</h1>
                        <img
                            src={deleteImage}
                            className='h-8 w-8 cursor-pointer'
                            onClick={() => handleDelete(item.id)}
                            alt="Delete"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default User;
