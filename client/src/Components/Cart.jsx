import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { deleteCart, getCart, updateCart } from "../Store/ActionCreators/CartActionCreators"
export default function Cart() {
  let [cart, setCart] = useState([])
  let [subtotal, setSubtotal] = useState(0)
  let [shipping, setShipping] = useState(0)
  let [total, setTotal] = useState(0)

  let dispatch = useDispatch()
  let CartStateData = useSelector((state) => state.CartStateData)
  function updateData(_id, option) {
    var item = cart.find((x) => x._id === _id)
    if (option === "dec" && item.qty === 1)
      return
    else if (option === "dec") {
      item.qty = item.qty - 1
      item.total = item.total - item.price
    }
    else {
      item.qty = item.qty + 1
      item.total = item.total + item.price
    }
    dispatch(updateCart(item))
    getAPIData()
  }
  function deleteData(_id) {
    if(window.confirm("Are You Sure to Delete the item from Cart")){
   
    dispatch(deleteCart({ _id: _id }))
    getAPIData()
  }}
  function getAPIData() {
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
      {/* <!-- Page Header Start --> */}
      <div className="container-fluid page-header mb-5 p-0" style={{ backgroundImage: "url(img/carousel-bg-1.jpg)" }}>
        <div className="container-fluid page-header-inner py-5">
          <div className="container text-center">
            <h1 className="display-3 text-white mb-3 animated slideInDown">Cart</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item text-white active" aria-current="page">Cart</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* <!-- Page Header End --> */}
      <div className="container-fluid my-3">
        {
          cart.length ?
            <>
              <div className="table-responsive">
                <table className='table table-bordered table-striped table-hover'>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Name</th>
                      <th>Brand</th>
                      <th>Color/Size</th>
                      <th>Price</th>
                      <th></th>
                      <th>QTY</th>
                      <th></th>
                      <th>Total</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cart.map((item, index) => {
                        return <tr key={index}>
                          <td>
                            <a href={`/${item.pic}`} target='_blank' rel="noreferrer">
                              <img src={`/${item.pic}`} className='rounded-1' height="80px" width="80px" alt="" />
                            </a>
                          </td>
                          <td>{item.name}</td>
                          <td>{item.brand}</td>
                          <td>{item.color}/{item.size}</td>
                          <td>&#8377;{item.price}</td>
                          <td><button className='btn' onClick={(() => updateData(item._id, "dec"))}><i className='fa fa-minus text-primary'></i></button></td>
                          <td>{item.qty}</td>
                          <td><button className='btn' onClick={(() => updateData(item._id, "inc"))}><i className='fa fa-plus text-primary'></i></button></td>
                          <td>&#8377;{item.total}</td>
                          <td><button className='btn' onClick={(() => deleteData(item._id))}><i className='fa fa-trash text-primary'></i></button></td>
                        </tr>
                      })
                    }
                  </tbody>
                </table>
              </div>
              <div className="row">
                <div className="col-md-6"></div>
                <div className="col-md-6">
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
                        <th colSpan={2}><Link to="/checkout" className='btn btn-primary w-100'>Checkout</Link></th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </> :
            <div className='text-center my-5'>
              <p>No Items in Cart</p>
              <Link to="/shop" className='btn btn-primary'>Shop</Link>
            </div>
        }
      </div>
    </>
  )
}
