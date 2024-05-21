
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'

export default function AdminHome() {
    let [user, setUser] = useState({})

    async function getAPIData() {
        let response = await fetch("/user/" + localStorage.getItem("userid"), {
            method: "get",
            headers: {
                "content-type": "application/json"
            }
        })
        response = await response.json()
        setUser(response)

    }

    useEffect(() => {
        getAPIData()
    }, [])
    return (
        <>
            <div className='container-fluid my-3'>
                <div className='row'>
                    <div className='col-md-3'>
                        <Sidebar />
                    </div>
                    <div className='col-md-9'>
                        <h5 className='bg-primary text-light w-100 mb-2 text-center p-2'>Admin</h5>
                        <div className='row'>
                            <div className='col-md-6'>
                                {
                                    user.pic ?
                                        <img src={`/products/${user.pic}`} height="380px" width="100%" alt="" /> :
                                        <img src={`/img/nouser.jpg`} height="380px" width="100%" alt="" />
                                }
                            </div>
                            <div className='col-md-6'>
                                <table className='table table-bordered table-striped'>
                                    <tbody>
                                        <tr>
                                            <th>Name</th>
                                            <td>{user.name}</td>
                                        </tr>
                                        <tr>
                                            <th>UserName</th>
                                            <td>{user.username}</td>
                                        </tr>
                                        <tr>
                                            <th>Email</th>
                                            <td>{user.email}</td>
                                        </tr>
                                        <tr>
                                            <th>Phome</th>
                                            <td>{user.phone}</td>
                                        </tr>
                                        <tr>
                                            <th colSpan='2'>
                                                <Link to="/updateprofile" className='btn btn-primary w-100 text-light text-center'>UpdateProfile</Link>
                                            </th>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </>
    )
}
