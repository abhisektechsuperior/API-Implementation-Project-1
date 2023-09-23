//Using .async method Promises Get Method API Implementation 

import React, { useEffect, useState } from 'react'

const UseEffectApi = () => {
    const [users, setUsers] = useState([]);
    const getUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/album/1/photos');
        setUsers(await response.json());
    }
    useEffect(() => {
        getUsers();
    }, []);
    return (
        <div>
            <h2>List of GitHub Users</h2>
            <div className='container-fluid mt-5'>
                <div className='row text-center'>

                    {
                        users.map((item) => {
                            const { id, thumbnailUrl, albumId, url, title } = item
                            return (
                                <div>
                                    <div className='row row-cols-12'>
                                        <div className='col-10 col-md-4 mt-5 ' key={id}>
                                            <div className='card p-2'>
                                                <div className='d-flex align-items-center'>
                                                    <div className='image'>
                                                        <img src={thumbnailUrl} className='rounded' width='155' /></div>
                                                    <div className='ml-3 w-100'>
                                                        <h4 className='mb-0 mt-0 textLeft'>Abhisek Kumar</h4><span className='textLeft'>Web Developer</span>
                                                        <div className='p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats'>
                                                            <div className='d-flex flex-column'><span className='articles'>Articles</span><span className='number1'>38</span></div>
                                                            <div className='d-flex flex-column'><span className='followers'>Followers</span><span className='number2'>980</span></div>
                                                            <div className='d-flex flex-column'><span className='rating'>Rating</span><span className='number3'>9.9</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default UseEffectApi