import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { deleteTestimonial, getTestimonial } from "../../../Store/ActionCreators/TestimonialActionCreators"
export default function Testimonial() {
    let dispatch = useDispatch()
    let [data,setData]=useState([])
    let TestimonialStateData = useSelector((state) => state.TestimonialStateData)
    function deleteItem(id){
        if(window.confirm("Are You Sure!!! You Want to Delete tha Item! Please Cofirm : ")){
           dispatch(deleteTestimonial({id:id})) 
           getAPIData()
        }
    }
    function getAPIData() {
        dispatch(getTestimonial())
        if(TestimonialStateData.length)
        {
            setData(TestimonialStateData.slice(1).reverse())
        }
    }
    useEffect(() => {
        getAPIData()
    }, [TestimonialStateData.length])
    return (
        <>
            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='bg-primary text-light p-2 text-center'>Testimonial <Link to="/admin/testimonial/create"><i className='fa fa-plus text-light float-end'></i></Link></h5>
                        <div className="table-responsive">
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Profile</th>
                                        <th>Pic</th>
                                        <th>Message</th>

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
                                                <td>{item.profile}</td>
                                                <td>{item.pic}</td>
                                                <td>{item.message.slice(0,150)+"..."}</td>
                                                <td><Link to={`/admin/testimonial/update/${item.id}`}><i className='fa fa-edit text-success'></i></Link></td>
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
