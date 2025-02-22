import React, { useRef, useState } from 'react'
import Sidebar from '../Sidebar'
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { addMaincategory, getMaincategory } from '../../../Store/ActionCreators/MaincategoryActionCreators'
import { useEffect } from 'react'
import FormValidation from '../CustomFormValidation/FormValidation'

export default function CreateMaincategory() {
  let name = useRef("")
  let dispatch = useDispatch()
  let MaincategoryStateData = useSelector((state) => state.MaincategoryStateData)
  let navigate = useNavigate()
  let [message, setMessage] = useState("Name Must Required")
  let [show, setShow] = useState(false)

  function getData(e) {

    setMessage(FormValidation(e))
    name.current = e.target.value
  }
  async function postData(e) {
    e.preventDefault()
    if (message.length === 0) {
      let item = MaincategoryStateData.length && MaincategoryStateData.find((x) => x.name === name.current)
      if (item) {
        setShow(true)
        setMessage("Maincategory Name Already Exists")
      }
      else {
        dispatch(addMaincategory({ name: name.current }))
        navigate("/admin/maincategory")
      }
    }
    else
    setShow(true)
  }
  function getAPIData() {
    dispatch(getMaincategory())
  }
  useEffect(() => {
    getAPIData()
  }, [MaincategoryStateData.length])




  return (
    <>
      <div className='container-fluid my-3'>
        <div className='row'>
          <div className='col-md-3'>
            <Sidebar />
          </div>
          <div className='col-md-9'>
            <h5 className='bg-primary text-light w-100 mb-2 text-center p-2'>Create Maincategory </h5>

            <form onSubmit={postData}>
              <label>Name</label>
              <input type="text" placeholder='Name' name="name" className='form-control' onChange={getData} />
              {
                show? <p className='text-capitalize text-danger'>{message}</p> : "  "
              }
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
