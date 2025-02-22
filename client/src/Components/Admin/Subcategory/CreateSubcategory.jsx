import React, { useRef, useState } from 'react'
import Sidebar from '../Sidebar'
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { addSubcategory, getSubcategory } from '../../../Store/ActionCreators/SubcategoryActionCreators'
import { useEffect } from 'react'
import FormValidation from '../CustomFormValidation/FormValidation'

export default function CreateSubcategory() {
  let name = useRef("")
  let dispatch = useDispatch()
  let SubcategoryStateData = useSelector((state) => state.SubcategoryStateData)
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
      let item = SubcategoryStateData.length && SubcategoryStateData.find((x) => x.name === name.current)
      if (item) {
        setShow(true)
        setMessage("Subcategory Name Already Exists")
      }
      else {
        dispatch(addSubcategory({ name: name.current }))
        navigate("/admin/subcategory")
      }
    }
    else
    setShow(true)
  }
  function getAPIData() {
    dispatch(getSubcategory())
  }
  useEffect(() => {
    getAPIData()
  }, [SubcategoryStateData.length])




  return (
    <>
      <div className='container-fluid my-3'>
        <div className='row'>
          <div className='col-md-3'>
            <Sidebar />
          </div>
          <div className='col-md-9'>
            <h5 className='bg-primary text-light w-100 mb-2 text-center p-2'>Create Subcategory </h5>

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
