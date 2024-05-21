import React, { useState } from 'react'
import Sidebar from '../Sidebar'
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import {  getSubcategory, updateSubcategory } from '../../../Store/ActionCreators/SubcategoryActionCreators'
import { useEffect } from 'react'
export default function UpdateSubcategory() {
  let [name,setName]= useState("")
  let {id}=useParams()
  let dispatch = useDispatch()
  let SubcategoryStateData = useSelector((state) => state.SubcategoryStateData)
  let navigate = useNavigate()

  function getData(e) {
    setName(e.target.value)
  }
  async function postData(e) {
    e.preventDefault()
    let item = SubcategoryStateData.length && SubcategoryStateData.slice(1).find((x) => x.name === name)
    if (item)
      alert("Subcategory Already Exists")
    else {
      dispatch(updateSubcategory({ id:id,name: name }))
      navigate("/admin/subcategory")
    }
  }
  function getAPIData() {
    dispatch(getSubcategory())
      if(SubcategoryStateData.length)
    {
     let item=SubcategoryStateData.slice(1).find((x)=>x.id===id)
     if(item)
     setName(item.name)
    }
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
            <h5 className='bg-primary text-light w-100 mb-2 text-center p-2'>Update Subcategory </h5>

            <form onSubmit={postData}>
              <label>Name</label>
              <input type="text" placeholder='Name' name="name" className='form-control' value={name} onChange={getData} />

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
