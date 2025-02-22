import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { deleteMaincategory, getMaincategory } from "../../../Store/ActionCreators/MaincategoryActionCreators"
import DataTable from 'react-data-table-component';
export default function Maincategory() {
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
            name: 'Edit',
            selector: row => <Link to={`/admin/maincategory/update/${row._id}`}><i className='fa fa-edit text-success'></i></Link>,
            sortable: false,
        },
        {
            name: 'Delete',
            selector: row => <button className='btn' onClick={() => deleteItem(row._id)}><i className='fa fa-trash text-danger'></i></button>,
            sortable: false,
        }
    ]


    let dispatch = useDispatch()
    let [data, setData] = useState([])
    let MaincategoryStateData = useSelector((state) => state.MaincategoryStateData)
    function deleteItem(_id) {
        if (window.confirm("Are You Sure!!! You Want to Delete tha Item! Please Cofirm : ")) {
            dispatch(deleteMaincategory({ _id: _id }))
            getAPIData()
        }
    }
    function getAPIData() {
        dispatch(getMaincategory())
        if (MaincategoryStateData.length) {
            setData(MaincategoryStateData)
        }
    }
    useEffect(() => {
        getAPIData()
    }, [MaincategoryStateData.length,data.length])
    return (
        <>
            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='bg-primary text-light p-2 text-center'>Maincategory <Link to="/admin/maincategory/create"><i className='fa fa-plus text-light float-end'></i></Link></h5>
                        <div className="table-responsive">
                            <DataTable
                                className='table'
                                columns={columns}
                                data={data}
                                pagination={true}
                                load

                            />
                            {/* <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
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
                                                <td><Link to={`/admin/maincategory/update/${item._id}`}><i className='fa fa-edit text-success'></i></Link></td>
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
