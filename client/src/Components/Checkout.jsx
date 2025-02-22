import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"

import { deleteCart, getCart } from "../Store/ActionCreators/CartActionCreators"
import { addCheckout } from '../Store/ActionCreators/CheckoutActionCreators'

export default function Checkout() {
    let [user, setUser] = useState({})
    let [mode, setMode] = useState('COD')
    let [cart, setCart] = useState([])
    let [subtotal, setSubtotal] = useState(0)
    let [shipping, setShipping] = useState(0)
    let [total, setTotal] = useState(0)

    let navigate = useNavigate("")
    let dispatch = useDispatch()
    let CartStateData = useSelector((state) => state.CartStateData)
    
    function placeOrder() {
        var item = {
            userid: localStorage.getItem("userid"),
            paymentmode: mode,
            paymentStatus: "Pending",
            orderstatus: "Order is Placed",
            subtotal: subtotal,
            shipping: shipping,
            total: total,
            date: new Date(),
            products: cart
        }
        dispatch(addCheckout(item))
        for (let item of cart) {
            dispatch(deleteCart({ _id: item._id }))
        }
        if (mode === "COD")
            navigate("/confirmation")
          else
            navigate("/payment")
        }

    
    async function getAPIData() {
        //user data from API
        let response = await fetch("/api/user/" + localStorage.getItem("userid"), {
            method: "get",
            headers: {
                "content-type": "application/json",
                "Authorization":localStorage.getItem("token")
            }
        })
        response = await response.json()
        setUser(response.data)
        //cart data from store
        dispatch(getCart())
        if (CartStateData.length) {
            let item = CartStateData
            setCart(item)
            let total = 0
            for (let c of item) {
                total = total + c.total
            }
            if (total > 0 && total < 1000) {
                setShipping(150)
                setTotal(total + 150)
            }
            else {
                setTotal(total)
                setShipping(0)
            }
            setSubtotal(total)
        }
    }
    useEffect(() => {
        getAPIData()
    }, [CartStateData.length])
    return (
        <>
            <div className="container-fluid my-3">
                {
                    cart.length?
                    <div className="row">
                    <div className="col-md-6">
                        <h5 className='text-center text-light bg-primary'>Shipping Details</h5>
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
                                    <td colSpan={2}><Link to="/updateprofile" className='btn btn-primary w-100'>Update</Link></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-6">
                        <h5 className='text-center text-light bg-primary'>Products in Cart</h5>
                        <table className='table table-bordered table-striped table-hover'>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map((item, index) => {
                                        return <tr key={index}>
                                            <td>{item.name}</td>
                                            <td>&#8377;{item.price}</td>
                                            <td>{item.qty}</td>
                                            <td>&#8377;{item.total}</td>
                                        </tr>
                                    })
                                }

                            </tbody>
                        </table>
                        <table className='table table-striped table-hover table-bordered'>
                            <tbody>
                                <tr>
                                    <th>Subtotal</th>
                                    <td>&#8377;{subtotal}</td>
                                </tr>
                                <tr>
                                    <th>Shipping</th>
                                    <td>&#8377;{shipping}</td>
                                </tr>
                                <tr>
                                    <th>Total</th>
                                    <td>&#8377;{total}</td>
                                </tr>
                                <tr>
                                    <th>Payment Mode</th>
                                    <td>
                                        <select name="mode" onChange={(e) => setMode(e.target.value)} className='form-select'>
                                            <option value="COD">COD</option>
                                            <option value="Net Banking">Net Banking/Card/UPI</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th colSpan={2}><button className='btn btn-primary text-light w-100 text-center' onClick={placeOrder}>Place Order</button></th>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>:
                <div className='text-center my-5'>
              <p>No Items in Cart</p>
              <Link to="/shop" className='btn btn-primary'>Shop</Link>
            </div>
                }
            </div>


        </>
    )
}
