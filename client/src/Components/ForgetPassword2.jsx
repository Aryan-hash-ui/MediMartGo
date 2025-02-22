import React, { useState,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function ForgetPassword2() {
    let [data, setData] = useState({
       otp: ""
        
    })
    let [show, setShow] = useState(false)
    let [message,setMessage]=useState("")
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
        let response = await fetch("/api/user/forget-password-2", {
            method: "post",
            headers: {
                "content-type": "application/json"

            },
            body: JSON.stringify({ username: localStorage.getItem("password-reset-username"),otp:data.otp })
        })
        response = await response.json()
        if (response.status == 200) {
                      
                navigate("/forget-password-3")
        }
                        
        else
        {
            setShow(true)
            setMessage(response.message)
            
    }}
    useEffect(()=>{
        if(!localStorage.getItem("password-reset-username"))
            navigate("/forget-password-1")
    },[])
    return (
        <>
            <div className="container-fluid my-3">
                <div className="w-75 m-auto">
                    <h5 className='text-center bg-primary p-2 text-light'><span className='text-warning fs-3'>Reset</span> Password</h5>
                   
                    <form onSubmit={postData}>
                        <div className="mb-3">
                            <label>OTP</label>
                            <input type="text" name="otp" onChange={getInputData} placeholder='Check OTP From your Registered Email' className='form-control' />
                        </div>
                        {
                        show ?
                            <p className='text-danger text-center p-2'>{message} </p>
                            : ""
                    }
                        <div className="mb-3">
                            <div className="btn-group w-100">
                                <Link to="/login" className='btn btn-success'>Login</Link>
                                <button type="submit" className='btn btn-primary'>Submit</button>
                            </div>
                           
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
























// import React, { useState } from 'react'
// import { Link ,useNavigate} from 'react-router-dom'
// export default function Login() {
//     let [data, setData] = useState({
//         username: "",
//         password: ""

//     })
//     let [show,setShow]=useState(false)
//     let navigate=useNavigate()
//     function getInputData(e) {
//         var { name, value } = e.target
//         setData((old) => {
//             return {
//                 ...old,
//                 [name]: value
//             }
//         })

//     }

//     async function postData(e) {
//         e.preventDefault()
//         let response = await fetch("/user", {
//             method: "get",
//             headers: {
//                 "content-type": "application/json"
//             }
//         })
//         response = await response.json()
//         let item = response.slice(1).filter((x) => x.username === data.username && x.password === data.password)
//         if (item) {
//             localStorage.setItem("login", true)
//             localStorage.setItem("userid", item.id)
//             localStorage.setItem("name", item.name)
//             localStorage.setItem("username", item.username)
//             localStorage.setItem("role", item.role)
//             if (item.role === "Buyer")
//                 navigate("/profile")
//             else
//                 navigate("/admin")
//         }
//         else
//         setShow(true)
//     }


// return (
//     <>

//         <h5 className='text-light bg-primary text-center p-2 my-2 w-75 m-auto'><span className='text-warning fs-4'>Login!!!</span> Your Account</h5>
//         {
// show?
// <p className="text-danger text-center p-2 my-2">Invalid Username/ Password!!! Try Again!!</p>:""
// }
//         <form onSubmit={postData}>

//             <div className='container w-75'>
//                 <div className='row mb-2'>
//                     <label>UserName</label>
//                     <input type="text" className="form-control" name="username" placeholder='Username' required onChange={getInputData} />

//                 </div>
//                 <div className='row mb-2'>
//                     <label>Password</label>
//                     <input type="password" name="password" className="form-control" placeholder='Password' required onChange={getInputData} />
//                 </div>
//                 <div className='row mb-2 btn-group w-100'>
//                     <Link to="/signup" className='bg-primary text-light text-center w-50'>Signup</Link>
//                     <button className='bg-success text-light text-center w-50'>Login</button>
//                 </div>
//             </div>
//         </form>

//     </>
// )
//     }
