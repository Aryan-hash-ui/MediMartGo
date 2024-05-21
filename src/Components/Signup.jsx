import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Signup() {
    let [data, setData] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        password: "",
        cpassword: ""
    })
    let [show, setShow] = useState(false)
    let [message, setMessage] = useState("")
    let navigate = useNavigate()
    function getInputData(e) {
        var { name, value } = e.target
        setData((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }
    async function postData(e) {
        e.preventDefault()
        if (data.password === data.cpassword) {
            let response = await fetch("/user", {
                method: "get",
                headers: {
                    "content-type": "application/json"
                }
            })
            response = await response.json()
            let item = response.slice(1).find((x) => x.username === data.username)
            if (item) {
                setShow(true)
                setMessage("Username Already Taken!!!!")
            }
            else {
                item = {
                    name: data.name,
                    username: data.username,
                    email: data.email,
                    phone: data.phone,
                    password: data.password,
                    role: "Buyer",
                    address:"",
                    pin:"",
                    city:"",
                    state:"",
                    pic:""
                }
                response = await fetch("/user", {
                    method: "post",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(item)
                })
                response = await response.json()
                navigate("/login")
            }
        }
        else {
            setShow(true)
            setMessage("Password and Confirm Password Doesn't Matched!!!!")
        }

    }
    return (
        <>
            <div className="container-fluid my-3">
                <div className="w-75 m-auto">
                    <h5 className='text-center bg-primary p-2 text-light'><span className='text-warning fs-3'>Create</span> Your Account</h5>
                    {
                        show ?
                            <p className='text-danger text-center p-2'>{message}</p>
                            : ""
                    }
                    <form onSubmit={postData}>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label>Name</label>
                                <input type="text" name="name" onChange={getInputData} placeholder='Full Name' className='form-control' />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label>Username</label>
                                <input type="text" name="username" onChange={getInputData} placeholder='User Name' className='form-control' />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label>Email</label>
                                <input type="email" name="email" onChange={getInputData} placeholder='Email Address' className='form-control' />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label>Phone</label>
                                <input type="text" name="phone" onChange={getInputData} placeholder='Phone Number' className='form-control' />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label>Password</label>
                                <input type="password" name="password" onChange={getInputData} placeholder='Password' className='form-control' />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label>Confirm Password</label>
                                <input type="password" name="cpassword" onChange={getInputData} placeholder='Confirm Password' className='form-control' />
                            </div>

                        </div>
                        <div className="mb-3">
                            <div className="btn-group w-100">
                                <Link to="/login" className='btn btn-success'>Login</Link>
                                <button type="submit" className='btn btn-success'>Signup</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}