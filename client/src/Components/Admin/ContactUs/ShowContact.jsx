import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { deleteContactUs, getContactUs, updateContactUs } from "../../../Store/ActionCreators/ContactUsActionCreators"
export default function ShowContact() {
    let { id } = useParams()
    let [data, setData] = useState([])
    let dispatch = useDispatch()
    let navigate = useNavigate()
    let ContactusStateData = useSelector((state) => state.ContactusStateData)
    function updateItem() {
        dispatch(updateContactUs({ ...data, status: "Done" }))
        setData((old) => {
            return {
                ...old,
                'status': "Done"
            }
        })
    }
    function deleteItem() {
        if (window.confirm("Are You Sure!!! You Want to Delete tha Item! Please Confirm : ")) {
            dispatch(deleteContactUs({ id: id }))
            getAPIData()
        }
        navigate("/admin/contactus")
    }
    function getAPIData() {
        dispatch(getContactUs())
        if (ContactusStateData.length) {
            setData(ContactusStateData.slice(1).find((x) => x.id === id))
        }
    }
    function getDate(a) {
        let date = new Date(a)
        return date.toLocaleDateString()
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
                        <h5 className='bg-primary text-light p-2 text-center'>ContactUs Query</h5>
                        <table className='table table-bordered table-striped table-hover'>
                            <tbody>
                                <tr>
                                    <th>ID</th>
                                    <td>{data.id}</td>
                                </tr>
                                <tr>
                                    <th>Name</th>
                                    <td>{data.name}</td>
                                </tr>
                                <tr>
                                    <th>Email</th>
                                    <td>{data.email}</td>
                                </tr>
                                <tr>
                                    <th>Phone</th>
                                    <td>{data.phone}</td>
                                </tr>
                                <tr>
                                    <th>Subject</th>
                                    <td>{data.subject}</td>
                                </tr>
                                <tr>
                                    <th>Message</th>
                                    <td>{data.message}</td>
                                </tr>
                                <tr>
                                    <th>Date</th>
                                    <td>{getDate(data.date)}</td>
                                </tr>
                                <tr>
                                    <th>Status</th>
                                    <td>{data.status}</td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                        {
                                            data.status === "Active" ?
                                                <button className='btn btn-success w-100 text-light' onClick={updateItem}>Update Status to Done</button> :
                                                <button className='btn btn-primary w-100 text-light' onClick={deleteItem}>Delete</button>
                                        }
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
