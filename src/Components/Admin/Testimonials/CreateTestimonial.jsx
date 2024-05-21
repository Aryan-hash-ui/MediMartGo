import React, { useState } from 'react'
import Sidebar from '../Sidebar'
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { addTestimonial, getTestimonial } from '../../../Store/ActionCreators/TestimonialActionCreators'
import { useEffect } from 'react'
export default function CreateTestimonial() {
  let [data, setData] = useState({
    name: "",
    profile: "",
    pic: "",
    message: ""
  })
  let dispatch = useDispatch()
  let TestimonialStateData = useSelector((state) => state.TestimonialStateData)
  let navigate = useNavigate()

  function getData(e) {
    var { name, value } = e.target
    setData((old) => {
      return {
        ...old,
        [name]: value
      }
    })
  }
  function getInputFiles(e) {
    var { name, files } = e.target
    setData((old) => {
      return {
        ...old,
        [name]: files[0].name
      }
    })

  }
  async function postData(e) {
    e.preventDefault()
    dispatch(addTestimonial({ ...data }))
    navigate("/admin/testimonial")
  }

function getAPIData() {
  dispatch(getTestimonial())

}
useEffect(() => {
  getAPIData()
}, [TestimonialStateData.length])




return (
  <>
    <div className='container-fluid my-3'>
      <div className='row'>
        <div className='col-md-3'>
          <Sidebar />
        </div>
        <div className='col-md-9'>
          <h5 className='bg-primary text-light w-100 mb-2 text-center p-2'>Create Testimonial </h5>

          <form onSubmit={postData}>
            <div className='mb-3'>
              <label>Name</label>
              <input type="text" placeholder='Name' name="name" className='form-control' onChange={getData} />
            </div>
            <div className='row'>
              <div className='col-md-6 mb-3'>
                <label>Profession</label>
                <input type="text" placeholder='Profile' name="profile" className='form-control' onChange={getData} />
              </div>
              <div className='col-md-6 mb-3'>
                <label>Pic</label>
                <input type="file" name="pic" className='form-control' onChange={getInputFiles} />
              </div>
            </div>
            <div className='mb-3'>
              <label>Message</label>
              <textarea placeholder='Message...' name="message" className='form-control' onChange={getData} />
            </div>

            <div className='mt-2'>
              <button type="button" className='btn btn-success p-2 w-50' onClick={() => window.history.back()}>Back</button>
              <button type="submit" className='btn btn-primary p-2 w-50' >Create</button>
            </div>
          </form>
        </div>


      </div>
    </div>

  </>
)
}
