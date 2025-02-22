import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { getCheckout, updateCheckout } from "../../../Store/ActionCreators/CheckoutActionCreators"
export default function ShowCheckout() {
    let { _id } = useParams()
    let [data, setData] = useState([])
    let [user, setUser] = useState({})
    let [orderstatus, setOrderStatus] = useState("")
    let [paymentstatus, setPaymentStatus] = useState("")

    let dispatch = useDispatch()
    let CheckoutStateData = useSelector((state) => state.CheckoutStateData)
    function getInputData(e) {
        var { name, value } = e.target
        if (name === "orderstatus")
            setOrderStatus(value)
        else
            setPaymentStatus(value)
    }
    function updateItem() {
        dispatch(updateCheckout({ ...data, orderstatus: orderstatus,paymentstatus:paymentstatus }))
        setData((old) => {
            return {
                ...old,
                'orderstatus': orderstatus,
                'paymentstatus': paymentstatus
            }
        })
    }
    async function getAPIData() {
        dispatch(getCheckout())
        if (CheckoutStateData.length) {
            let item = CheckoutStateData.slice(1).find((x) => x._id === _id)
            setData(item)
            let response = await fetch("/api/user/" + item.userid, {
                method: "get",
                headers: {
                    "content-type": "application/json"
                }
            })
            response = await response.json()
            setUser(response)
            setOrderStatus(item.orderstatus)
            setPaymentStatus(item.paymentstatus)
        }
    }
    function getDate(a) {
        let date = new Date(a)
        return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()
    }
    useEffect(() => {
        getAPIData()
    }, [CheckoutStateData.length])
    return (
        <>
            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='bg-primary text-light p-2 text-center'>Checkout Query</h5>
                        <table className='table table-bordered table-striped table-hover'>
                            <tbody>
                                <tr>
                                    <th>ID</th>
                                    <td>{data._id}</td>
                                </tr>
                                <tr>
                                    <th>User</th>
                                    
                                    <td>
                                        {user.name}
                                    
                                        <br />
                                        {user.phone},{user.email}
                                        <br />
                                        {user.address}
                                        <br />
                                        {user.pin},{user.city},{user.state}
                                    </td>
                                </tr>
                                <tr>
                                    <th>Order Status</th>
                                    <td>{data.orderstatus}
                                        <br />
                                        {
                                            data.orderstatus !== "Delivered" ?
                                                <select onChange={getInputData} value={orderstatus} name="orderstatus" className='form-select mt-3'>
                                                    <option value="Order is Placed">Order is Placed</option>
                                                    <option value="Packed">Packed</option>
                                                    <option value="Ready to Ship">Ready to Ship</option>
                                                    <option value="Shipped">Shipped</option>
                                                    <option value="Order in Transit">Order in Transit</option>
                                                    <option value="Order Reached to the Final Delivery Station">Order Reached to the Final Delivery Station</option>
                                                    <option value="Our for Delivery">Our for Delivery</option>
                                                    <option value="Delivered">Delivered</option>
                                                </select> : ''
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <th>Payment Mode</th>
                                    <td>{data.paymentmode}</td>
                                </tr>
                                <tr>
                                    <th>Payment Status</th>
                                    <td>{data.paymentstatus}
                                        <br />
                                        {
                                            data.paymentstatus !== "Done" ?
                                                <select onChange={getInputData} value={paymentstatus} name="paymentstatus" className='form-select mt-3'>
                                                    <option value="Pending">Pending</option>
                                                    <option value="Done">Done</option>
                                                </select> : ''
                                        }</td>
                                </tr>
                                <tr>
                                    <th>Subtotal</th>
                                    <td>&#8377;{data.subtotal}</td>
                                </tr>
                                <tr>
                                    <th>Shipping</th>
                                    <td>&#8377;{data.shipping}</td>
                                </tr>
                                <tr>
                                    <th>Total</th>
                                    <td>&#8377;{data.total}</td>
                                </tr>
                                <tr>
                                    <th>Date</th>
                                    <td>{getDate(data.date)}</td>
                                </tr>
                                <tr>
                                    <th>RPPID</th>
                                    <td>{data.rppid}</td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                        {
                                            data.orderstatus !== "Delivered" && data.paymentstatus !== "Done" ?
                                                <button className='btn btn-primary w-100' onClick={updateItem}>Update</button> : ""
                                        }
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="table-responsive">
                            <table className='table table-bordered table-striped table-hover'>
                                <tbody>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Brand</th>
                                        <th>Color/Size</th>
                                        <th>Price</th>
                                        <th>QTY</th>
                                        <th>Total</th>
                                    </tr>
                                    {
                                        data.products && data.products.map((item, index) => {
                                            return <tr key={index}>
                                                <td>
                                                    <a href={`/${item.pic}`} target='_blank' rel='noreferrer'>
                                                        <img src={`/${item.pic}`} height="80px" width="80px" className='rounded-1' alt="" />
                                                    </a>
                                                </td>
                                                <td>{item.name}</td>
                                                <td>{item.brand}</td>
                                                <td>{item.color}/{item.size}</td>
                                                <td>&#8377;{item.price}</td>
                                                <td>{item.qty}</td>
                                                <td>&#8377;{item.total}</td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
