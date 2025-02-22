import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import DataTable from 'react-data-table-component';
import { deleteContactUs, getContactUs } from "../../../Store/ActionCreators/ContactUsActionCreators"
export default function ContactUs() {
    
    let [data,setData] = useState([])
    let dispatch = useDispatch()
    let ContactusStateData = useSelector((state) => state.ContactusStateData)
    function deleteItem(_id){
        if(window.confirm("Are You Sure!!! You Want to Delete tha Item! Please Cofirm : ")){
           dispatch(deleteContactUs({_id:_id})) 
           getAPIData()
        }
    }
    function getAPIData() {
        dispatch(getContactUs())
        if(ContactusStateData.length){
            setData(ContactusStateData)
        }
    }
    
    useEffect(() => {
        getAPIData()
    }, [ContactusStateData.length])
    return (
        <>
            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='bg-primary text-light p-2 text-center'>ContactUs</h5>
                        <div className="table-responsive">
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Subject</th>
                                        <th>Date</th>
                                        <th>Status</th>
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
                                                <td>{item.email}</td>
                                                <td>{item.phone}</td>
                                                <td>{item.subject.slice(0,100)+"..."}</td>
                                                <td>{new Date(item.date).toLocaleDateString()}</td>
                                                <td>{item.active?"Active":"InActive"}</td>
                                                <td><Link to={`/admin/contactus/show/${item.id}`}><i className='fa fa-eye text-success'></i></Link></td>
                                                <td>
                                                    {
                                                        item.active!==false?
                                                        <button className='btn' onClick={()=>deleteItem(item.id)}><i className='fa fa-trash text-danger'></i></button>:
                                                        ""
                                                    }
                                                </td>
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
