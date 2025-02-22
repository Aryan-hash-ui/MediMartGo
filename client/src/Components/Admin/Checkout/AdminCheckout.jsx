import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import DataTable from 'react-data-table-component';

import { getCheckout } from "../../../Store/ActionCreators/CheckoutActionCreators"
export default function AdminCheckout() {
    const columns = [
        {
            name: 'Id',
            selector: row => row._id,
            sortable: true,
        },
        {
            name: 'Order Status',
            selector: row => row.orderstatus,
            sortable: true,
        },
        {
            name: 'Payment Mode',
            selector: row => row.paymentmode,
            sortable: true,
        },
        {
            name: 'Payment Status',
            selector: row => row.paymentstatus,
            sortable: true,
        },
        {
            name: 'Sub Total',
            selector: row => <p>&#8377;{row.subtotal}</p>,
            sortable: true,
        },
        {
            name: 'Shipping',
            selector: row => <p>&#8377;{row.shipping}</p>,
            sortable: true,
        },
        {
            name: 'Total',
            selector: row => <p>&#8377;{row.total}</p>,
            sortable: true,
        },
        {
            name: 'Date',
            selector: row => new Date(row.date).toLocaleDateString(),
            sortable: true,
        },
        {
            name: 'RPPID',
            selector: row => row.rppid,
            sortable: true,
        },
        {
            name: 'Show',
            sortable: false,
            selector: row => <Link to={`/admin/checkout/show/${row._id}`}><i className='fa fa-eye text-success'></i></Link>
        }
    ]
    let [data, setData] = useState([])
    let dispatch = useDispatch()
    let CheckoutStateData = useSelector((state) => state.CheckoutStateData)
    function getAPIData() {
        dispatch(getCheckout())
        if (CheckoutStateData.length) {
            setData(CheckoutStateData)
        }
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
                        <h5 className='bg-primary text-light p-2 text-center'>Checkout</h5>
                        <div className="table-responsive">
                            {/* <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Order Status</th>
                                        <th>Payment Mode</th>
                                        <th>Payment Status</th>
                                        <th>Subtotal</th>
                                        <th>Shipping</th>
                                        <th>Total</th>
                                        <th>Date</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((item, index) => {
                                            return <tr key={index}>
                                                <td>{item.orderstatus}</td>
                                                <td>{item.paymentmode}</td>
                                                <td>{item.paymentstatus}</td>
                                                <td>&#8377;{item.subtotal}</td>
                                                <td>&#8377;{item.shipping}</td>
                                                <td>&#8377;{item.total}</td>
                                                <td>{new Date(item.date).toLocaleDateString()}</td>
                                                <td><Link to={`/admin/checkout/show/${item._id}`}><i className='fa fa-eye text-success'></i></Link></td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table> */}
                             <DataTable
                                className='table'
                                columns={columns}
                                data={data}
                                pagination = {true}
                                load
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
