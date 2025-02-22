import React, { useState } from 'react'
import Sidebar from '../Sidebar'
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { getTestimonial, updateTestimonial } from '../../../Store/ActionCreators/TestimonialActionCreators'
import { useEffect } from 'react'
import FormValidation from '../CustomFormValidation/FormValidation'

export default function UpdateTestimonial() {
  let [data, setData] = useState({})
  let { _id } = useParams()
  let dispatch = useDispatch()
  let TestimonialStateData = useSelector((state) => state.TestimonialStateData)
  let navigate = useNavigate()
  let [show, setShow] = useState(false)

  let [errorMessage, setErrorMessage] = useState({
    name: "",
    profile: "",
    message: "",
    pic: ""

  })


  function getData(e) {
    var { name, value } = e.target
    setErrorMessage((old) => {
      return {
        ...old,
        [name]: FormValidation(e)
      }
    })
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
        [name]: files[0]
      }
    })

  }
  async function postData(e) {
    e.preventDefault()
    let error = Object.keys(errorMessage).find((x) => errorMessage[x] && errorMessage[x].length !== 0)
    if (!error) {
      let item = new FormData()
      item.append("_id",_id)
      item.append("name", data.name)
      item.append("profile", data.profile)
      item.append("message", data.message)
      item.append("pic", data.pic)
      dispatch(updateTestimonial(item))
    navigate("/admin/testimonial")

  }
  else
  setShow(true)
}
  function getAPIData() {
    dispatch(getTestimonial())
    if (TestimonialStateData.length) {
      let item = TestimonialStateData.  find((x) => x._id === _id)
      if (item)
        setData(item)
    }
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
            <h5 className='bg-primary text-light w-100 mb-2 text-center p-2'>Update Testimonial </h5>

            <form onSubmit={postData}>
              <div className="mb-3">
                <label>Name</label>
                <input type="text" placeholder='Name' name="name" className='form-control' value={data.name} onChange={getData} />
                {
                  show ? <p className='text-capitalize text-danger'>{errorMessage.name}</p> : "  "
                }
              </div>
              <div className='row'>
              <div className='col-md-6 mb-3'>
                <label>Profession</label>
                <input type="text" placeholder='Profile' name="profile" className='form-control' onChange={getData} value={data.profile} />
                {
                    show ? <p className='text-capitalize text-danger'>{errorMessage.profile}</p> : "  "
                  }
              </div>
              <div className='col-md-6 mb-3'>
                <label>Pic</label>
                <input type="file" name="pic" className='form-control' onChange={getInputFiles} />
                {
                    show ? <p className='text-capitalize text-danger'>{errorMessage.pic}</p> : "  "
                  }
              </div>
            </div>
            <div className='mb-3'>
              <label>Message</label>
              <textarea placeholder='Message...' name="message" className='form-control' onChange={getData} value={data.message}/>
              {
                    show ? <p className='text-capitalize text-danger'>{errorMessage.message}</p> : "  "
                  }
            </div>




              <div className='mt-2'>
                <button type="button" className='btn btn-success p-2 w-50' onClick={() => window.history.back()}>Back</button>
                <button type="submit" className='btn btn-primary p-2 w-50' >Update</button>
              </div>
            </form>
          </div>


        </div>
      </div>

    </>
  )
}
