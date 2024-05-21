import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Profile() {
    let [user,setUser] = useState({})
    async function getAPIData(){
        let response = await fetch("/user/"+localStorage.getItem("userid"),{
            method:"get",
            headers:{
                "content-type":"application/json"
            }
        })
        response = await response.json()
           setUser(response)
    }
    useEffect(()=>{
        getAPIData()
    },[])
  return (
    <>
        <div className="container-fluid my-3">
            <div className="row">
                <div className="col-md-6">
                    {
                        user.pic?
                        <img src={`/products/${user.pic}`} height="400px" width="100%" alt="" />:
                        <img src={`/img/nouser.jpg`} height="400px" width="100%" alt="" />
                    }
                </div>
                <div className="col-md-6">
                    <table className='table table-bordered table-striped table-hover'>
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
                                <th>Phone</th>
                                <td>{user.phone}</td>
                            </tr>
                            <tr>
                                <th>Address</th>
                                <td>{user.address}</td>
                            </tr>
                            <tr>
                                <th>PIN</th>
                                <td>{user.pin}</td>
                            </tr>
                            <tr>
                                <th>City</th>
                                <td>{user.city}</td>
                            </tr>
                            <tr>
                                <th>State</th>
                                <td>{user.state}</td>
                            </tr>
                            <tr>
                                <td colSpan={2}><Link to="/updateprofile" className='btn btn-success w-100'>Update</Link></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
  )
}