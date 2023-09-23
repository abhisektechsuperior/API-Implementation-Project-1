//Using .Then Promises Get Method API Implementation 

import React, { useEffect, useState } from 'react'

const Practice = () => {
    const [data, setData] = useState([]);
    const url = "  https://api.github.com/users"
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(JSON => {

                setData(JSON)
            })
            .catch(e => {
                console.log("e", e)
            })
    }, [])
    return (
        <div>
            <h2>List of GitHub Users</h2>
            <div className='container container-fluid mt-5'>
                <div className='row text-center'>
                <div className='col mt-5 ' >
                    {
                        data.map((item) => {
                            const { id, login, avatar_url, followers_url, following_url } = item
                            return (
                                <div>
                                    {/* <div className='row row-col-12'> */}
                                       
                                            <div className='card  p-2 mt-5' key={id}>
                                                <div className='d-flex align-items-center'>
                                                    <div className='image'>
                                                        <img src={avatar_url} className='rounded' width='155' /></div>
                                                    <div className='ml-3 w-100'>
                                                        <h4 className='mb-0 mt-0 textLeft'>{login}</h4><span className='textLeft'>Web Developer</span>
                                                        <div className='p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats'>
                                                            <div className='d-flex flex-column'><span className='articles'>Articles</span><span className='number1'>38</span></div>
                                                            <div className='d-flex flex-column'><span className='followers'>Followers</span><span className='number2'>957</span></div>
                                                            <div className='d-flex flex-column'><span className='rating'>Rating</span><span className='number3'>9.9</span></div>
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

        </div>
    )
}

export default Practice;