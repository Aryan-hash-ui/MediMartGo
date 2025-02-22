import React from 'react'
import { Link } from 'react-router-dom'

export default function Confirmation() {
  return (
    <>
       <div className='text-center my-5'>
        <h4>Thank You!!!Your Order has been placed</h4>
        <h4>Now You can track your order in profile page</h4>
        <Link to="/shop" className='btn btn-primary'>Shop More</Link>
      </div>
    </>
  )
}
