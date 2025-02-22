import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <>
        <div className="list-group">
  <Link to="/admin" className="list-group-item list-group-item-action active" aria-current="true">
   <i className='fa fa-home'></i><span className='float-end fw-bold'>Home</span>
</Link>
  <Link to="/admin/user" className="list-group-item list-group-item-action"><i className='fa fa-user'></i><span className='float-end fw-bold'>Users</span></Link>
  <Link to="/admin/maincategory" className="list-group-item list-group-item-action"><i className='fa fa-list'></i><span className='float-end fw-bold'>MainCategory</span></Link>
  <Link to="/admin/subcategory" className="list-group-item list-group-item-action"><i className='fa fa-list'></i><span className='float-end fw-bold'>SubCategory</span></Link>
  <Link to="/admin/brand" className="list-group-item list-group-item-action"><i className='fa fa-list'></i><span className='float-end fw-bold'>Brand</span></Link>
  <Link to="/admin/product" className="list-group-item list-group-item-action"><i className='fa fa-list'></i><span className='float-end fw-bold'>Products</span></Link>
  <Link to="/admin/newsletter" className="list-group-item list-group-item-action"><i className='fa fa-envelope'></i><span className='float-end fw-bold'>Newsletter</span></Link>
  <Link to="/admin/contactus" className="list-group-item list-group-item-action"><i className='fa fa-phone'></i><span className='float-end fw-bold'>ContactUs</span></Link>
  <Link to="/admin/checkout" className="list-group-item list-group-item-action"><i className='fa fa-shopping-cart'></i><span className='float-end fw-bold'>Checkout</span></Link>
  <Link to="/admin/testimonial" className="list-group-item list-group-item-action"><i className='fa fa-user'></i><span className='float-end fw-bold'>Testimonial</span></Link>


</div>
    </>
  )
}
