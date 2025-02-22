import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
    // Open Eye Icon
const EyeOpenIcon = () => (
    <svg width="24" height="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
      <path fill="#000000" fillRule="evenodd" d="M3.415 10.242c-.067-.086-.13-.167-.186-.242a16.806 16.806 0 011.803-2.025C6.429 6.648 8.187 5.5 10 5.5c1.813 0 3.57 1.148 4.968 2.475A16.816 16.816 0 0116.771 10a16.9 16.9 0 01-1.803 2.025C13.57 13.352 11.813 14.5 10 14.5c-1.813 0-3.57-1.148-4.968-2.475a16.799 16.799 0 01-1.617-1.783zm15.423-.788L18 10l.838.546-.002.003-.003.004-.01.016-.037.054a17.123 17.123 0 01-.628.854 18.805 18.805 0 01-1.812 1.998C14.848 14.898 12.606 16.5 10 16.5s-4.848-1.602-6.346-3.025a18.806 18.806 0 01-2.44-2.852 6.01 6.01 0 01-.037-.054l-.01-.016-.003-.004-.001-.002c0-.001-.001-.001.837-.547l-.838-.546.002-.003.003-.004.01-.016a6.84 6.84 0 01.17-.245 18.804 18.804 0 012.308-2.66C5.151 5.1 7.394 3.499 10 3.499s4.848 1.602 6.346 3.025a18.803 18.803 0 012.44 2.852l.037.054.01.016.003.004.001.002zM18 10l.838-.546.355.546-.355.546L18 10zM1.162 9.454L2 10l-.838.546L.807 10l.355-.546zM9 10a1 1 0 112 0 1 1 0 01-2 0zm1-3a3 3 0 100 6 3 3 0 000-6z"/>
    </svg>
  );
  
  // Closed Eye Icon
  const EyeClosedIcon = () => (
    <svg width="24" height="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
      <path fill="#000000" fillRule="evenodd" d="M3.415 10.242c-.067-.086-.13-.167-.186-.242a16.806 16.806 0 011.803-2.025C6.429 6.648 8.187 5.5 10 5.5c1.813 0 3.57 1.148 4.968 2.475A16.816 16.816 0 0116.771 10a16.9 16.9 0 01-1.803 2.025C13.57 13.352 11.813 14.5 10 14.5c-1.813 0-3.57-1.148-4.968-2.475a16.799 16.799 0 01-1.617-1.783zm15.423-.788L18 10l.838.546-.002.003-.003.004-.01.016-.037.054a17.123 17.123 0 01-.628.854 19.25 19.25 0 01-1.094 1.275L18.3 14.4a1 1 0 01-1.6 1.2l-1.097-1.462c-1.23 1.027-2.81 2.007-4.603 2.284V18a1 1 0 11-2 0v-1.578c-1.793-.277-3.374-1.257-4.603-2.284L3.3 15.6a1 1 0 11-1.6-1.2l1.236-1.648a19.262 19.262 0 01-1.59-1.938 11.109 11.109 0 01-.169-.245l-.01-.016-.003-.004-.001-.002c0-.001-.001-.001.837-.547l-.838-.546.002-.003.003-.004.01-.016a6.84 6.84 0 01.17-.245 18.804 18.804 0 012.308-2.66C5.151 5.1 7.394 3.499 10 3.499s4.848 1.602 6.346 3.025a18.803 18.803 0 012.44 2.852l.037.054.01.016.003.004.001.002zM18 10l.838-.546.355.546-.355.546L18 10zM1.162 9.454L2 10l-.838.546L.807 10l.355-.546z"/>
    </svg>
  );
  
    let [data, setData] = useState({
        username: "",
        password: ""
    });
    let [show, setShow] = useState(false);
    let [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
    let navigate = useNavigate();

    function getInputData(e) {
        const { name, value } = e.target;
        setData((old) => ({
            ...old,
            [name]: value
        }));
    }

    async function postData(e) {
        e.preventDefault();
        let response = await fetch("/api/user/login", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ username: data.username, password: data.password })
        });
        response = await response.json();
        if (response.status === 200) {
            localStorage.setItem("login", true);
            localStorage.setItem("userid", response.data._id);
            localStorage.setItem("name", response.data.name);
            localStorage.setItem("username", response.data.username);
            localStorage.setItem("role", response.data.role);
            localStorage.setItem("token", response.token);
            if (response.data.role === "Buyer")
                navigate("/profile");
            else
                navigate("/adminhome");
        } else {
            setShow(true);
        }
    }

    return (
        <>
            <div className="container-fluid my-3">
                <div className="w-75 m-auto">
                    <h5 className='text-center bg-primary p-2 text-light'>
                        <span className='text-warning fs-3'>Login</span> to Your Account
                    </h5>
                    {show && <p className='text-danger text-center p-2'>Invalid Username or Password</p>}
                    <form onSubmit={postData}>
                        <div className="mb-3">
                            <label>Username</label>
                            <input
                                type="text"
                                name="username"
                                onChange={getInputData}
                                placeholder='User Name'
                                className='form-control'
                            />
                        </div>
                        <div className="mb-3 position-relative">
                        <label>Password</label>
                <div className="input-group">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    onChange={getInputData}
                    placeholder="Password"
                    className="form-control"
                  />
                  <span
                    className="input-group-text"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
                  </span>
                </div>
                        </div>
                        <div className="mb-3">
                            <div className="btn-group w-100">
                                <Link to="/signup" className='btn btn-success'>Signup</Link>
                                <button type="submit" className='btn btn-success'>Login</button>
                            </div>
                            <Link to="/forget-password-1">Forget Password?</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
