import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import DataTable from 'react-data-table-component';

import { deleteTestimonial, getTestimonial } from "../../../Store/ActionCreators/TestimonialActionCreators"
export default function Testimonial() {
    const columns = [
        {
            name: 'Id',
            selector: row => row._id,
            sortable: true,
        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Profile',
            selector: row => row.profile,
            sortable: true,
        },
        {
            name: 'Pic',
            selector: row =><a href={`${process.env.REACT_APP_SERVER}/${row.pic}`}><img src={`/${row.pic}`} alt=".." target="_blank" rel="noreferrer" width="50px" height="50px"/></a>,
            sortable: true,
        },
        {
            name: 'Message',
            selector: row => row.message.slice(0,100)+"...",
            sortable: true,
        },
        {
            name: 'Edit',
            selector: row => <Link to={`/admin/testimonial/update/${row._id}`}><i className='fa fa-edit text-success'></i></Link>,
            sortable: false,
        },
        {
            name: 'Delete',
            selector: row => <button className='btn' onClick={() => deleteItem(row._id)}><i className='fa fa-trash text-danger'></i></button>,
            sortable: false,
        }
    ]


        
    let dispatch = useDispatch()
    let [data,setData]=useState([])
    let TestimonialStateData = useSelector((state) => state.TestimonialStateData)
    function deleteItem(_id){
        if(window.confirm("Are You Sure!!! You Want to Delete tha Item! Please Cofirm : ")){
           dispatch(deleteTestimonial({_id:_id})) 
           getAPIData()
        }
    }
    function getAPIData() {
        dispatch(getTestimonial())
        if(TestimonialStateData.length)
        {
            setData(TestimonialStateData)
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
                        <DataTable
                                className='table'
                                columns={columns}
                                data={data}
                                pagination={true}


                            />
                            {/* <table className='table table-bordered'>
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
                                                <td>{item._id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.profile}</td>
                                                <td><img src={`/${item.pic}`} alt=".." width="70px" height="70px"/></td>
                                                <td>{item.message.slice(0,100)+"..."}</td>
                                                <td><Link to={`/admin/testimonial/update/${item._id}`}><i className='fa fa-edit text-success'></i></Link></td>
                                                <td><button className='btn' onClick={()=>deleteItem(item._id)}><i className='fa fa-trash text-danger'></i></button></td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
