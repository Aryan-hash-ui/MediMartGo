import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { deleteProduct, getProduct } from "../../../Store/ActionCreators/ProductActionCreators"
export default function Product() {
    let dispatch = useDispatch()
    let [data,setData]=useState([])
    let ProductStateData = useSelector((state) => state.ProductStateData)

    function deleteItem(id){
        if(window.confirm("Are You Sure!!! You Want to Delete tha Item! Please Cofirm : ")){
           dispatch(deleteProduct({id:id})) 
           getAPIData()
        }
    }
    function getAPIData() {
        dispatch(getProduct())
        // dispatch(getMainCategory())
        // dispatch(getSubCategory())
        // dispatch(brand())
        if(ProductStateData.length)
        {
            setData(ProductStateData.slice(1).reverse())
        }
    }
    useEffect(() => {
        getAPIData()
    }, [ProductStateData.length])
    return (
        <>
            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='bg-primary text-light p-2 text-center'>Product <Link to="/admin/product/create"><i className='fa fa-plus text-light float-end'></i></Link></h5>
                        <div className="table-responsive">
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Category</th>
                                        <th>Color/Size</th>
                                        <th>BasePrice &nbsp; FinalPrice</th>
                                        <th>Stock</th>
                                        <th>Pic1</th>
                                        <th>Pic2</th>
                                        <th>Pic3</th>
                                        <th>Pic4</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                       data.map((item, index) => {
                                            return <tr key={index}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.maincategory}/{item.subcategory}/{item.brand}</td>
                                                <td>{item.color} / {item.size}</td>
                                            <td><strike className="text-danger">{item.baseprice}</strike> &nbsp; {item.finalprice}  <sup>{item.discount}% off</sup></td>
                                            <td>{item.stock}</td>
                                            <td><a href={`/products/${item.pic1}`}><img src={`/products/${item.pic1}`} alt=".." width="50px" height="50px"/></a></td>
                                            <td><a href={`/products/${item.pic2}`}><img src={`/products/${item.pic2}`} alt=".." width="50px" height="50px"/></a></td>
                                            <td><a href={`/products/${item.pic3}`}><img src={`/products/${item.pic3}`} alt=".." width="50px" height="50px"/></a></td>
                                            <td><a href={`/products/${item.pic4}`}><img src={`/products/${item.pic4}`} alt=".." width="50px" height="50px"/></a></td>
                                                <td><Link to={`/admin/product/update/${item.id}`}><i className='fa fa-edit text-success'></i></Link></td>
                                                <td><button className='btn' onClick={()=>deleteItem(item.id)}><i className='fa fa-trash text-danger'></i></button></td>
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
