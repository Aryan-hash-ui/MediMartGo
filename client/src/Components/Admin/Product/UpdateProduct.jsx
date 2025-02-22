  import React, { useState } from 'react'
import Sidebar from '../Sidebar'
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { getProduct, updateProduct } from '../../../Store/ActionCreators/ProductActionCreators'
import { useEffect } from 'react'
import { getMaincategory } from '../../../Store/ActionCreators/MaincategoryActionCreators'
import { getSubcategory } from '../../../Store/ActionCreators/SubcategoryActionCreators'
import { getBrand } from "../../../Store/ActionCreators/BrandActionCreators"
import FormValidation from '../CustomFormValidation/FormValidation'

export default function UpdateProduct() {
  let [show, setShow] = useState(false)

  let [errorMessage, setErrorMessage] = useState({
    name: "",
    color: "",
    size: "",
    baseprice: "",
    discount: "",
    pic1: ""

  })

  let [maincategory, setMaincategory] = useState([])
  let [subcategory, setSubcategory] = useState([])
  let [brand, setBrand] = useState([])
  let [data, setData] = useState({})
  let { _id } = useParams()
  let dispatch = useDispatch()
  let ProductStateData = useSelector((state) => state.ProductStateData)
  let MainCategoryStateData = useSelector((state) => state.MaincategoryStateData)
  let SubCategoryStateData = useSelector((state) => state.SubcategoryStateData)
  let BrandStateData = useSelector((state) => state.BrandStateData)
  let navigate = useNavigate()

  function getData(e) {
    var { name, value } = e.target
    setErrorMessage((old)=>{
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
    let error=Object.keys(errorMessage).find((x)=>errorMessage[x] && errorMessage[x].length!==0)
    if(!error)    {
      let fp = Math.round(data.baseprice - data.baseprice * data.discount / 100)
      let item =new FormData()
      item.append("_id",_id)
    item.append("name",data.name)
      item.append("maincategory",data.maincategory || maincategory[0].name)
    item.append("subcategory",data.subcategory || subcategory[0].name)
    item.append("brand",data.brand || brand[0].name)
    item.append("stock",data.stock)
    item.append("color",data.color)
    item.append("size",data.size)
    item.append("baseprice",parseInt(data.baseprice))
    item.append("discount",parseInt(data.discount))
    item.append("finalprice", fp)
    item.append("description",data.description)
    item.append("pic1", data.pic1)
    item.append("pic2", data.pic2)
    item.append("pic3", data.pic3)
    item.append("pic4", data.pic4)
      dispatch(updateProduct(item))
      navigate("/admin/product")
    
  }
  else
        setShow(true)
   
}
  function getAPIData() {
    dispatch(getMaincategory())
    dispatch(getSubcategory())
    dispatch(getBrand())

    if (MainCategoryStateData.length)
      setMaincategory(MainCategoryStateData)
    console.log(maincategory)
    if (SubCategoryStateData.length)
      setSubcategory(SubCategoryStateData)
    if (BrandStateData.length)
      setBrand(BrandStateData)

    dispatch(getProduct())
    if (ProductStateData.length) {
      let item = ProductStateData.find((x) => x._id === _id)
       if(item)
       setData({...item})
    }
  }
  useEffect(() => {
    getAPIData()
  }, [ProductStateData.length, MainCategoryStateData.length, SubCategoryStateData.length, BrandStateData.length])




  return (
    <>
      <div className='container-fluid my-3'>
        <div className='row'>
          <div className='col-md-3'>
            <Sidebar />
          </div>
          <div className='col-md-9'>
            <h5 className='bg-primary text-light w-100 mb-2 text-center p-2'>Update Product </h5>

            <form onSubmit={postData}>
              <div className='row'>
                <div className=' mb-3'>
                  <label>Name</label>
                  <input type="text" placeholder='Name' name="name" className='form-control' value={data.name} onChange={getData} />
                  {
                show? <p className='text-capitalize text-danger'>{errorMessage.name}</p> : "  "
              }
                </div></div>
              <div className='row'>
                <div className='col-md-3 mb-3'>
                  <label>Maincategory</label>
                 
                  <select className='form-control' name="maincategory" value={data.maincategory} onChange={getData} >
                    {
                      maincategory.map((item, index) => {
                        return <option key={index}  value={item.name}>{item.name}</option>
                   

                      })
                    }
                  </select>
                </div>
                <div className='col-md-3 mb-3'>
                  <label>Subcategory</label>
                  <select className='form-control' name="subcategory" value={data.subcategory}onChange={getData}>
                    {
                      subcategory.map((item, index) => {
                        return <option key={index} value={item.name}>{item.name}</option>
                      })
                    }
                  </select>
                </div>
                <div className='col-md-3 mb-3'>
                  <label>Brand</label>
                  <select className='form-control' name="brand" onChange={getData} value={data.brand}>
                    {
                      brand.map((item, index) => {
                        return <option key={index} value={item.name}>{item.name}</option>
                      })
                    }
                  </select>
                </div>
                <div className='col-md-3 mb-3'>
                  <label>Stock</label>
                  <select className='form-control' name="stock" onChange={getData}>
                    <option>In Stock</option>
                    <option>Out of Stock</option>

                  </select>
                </div>
              </div>

              <div className='row'>
                <div className='col-md-6 mb-3'>
                  <label>Color</label>
                  <input type="text"  placeholder='Color' name="color" className='form-control' onChange={getData} value={data.color}/>
                  {
                show? <p className='text-capitalize text-danger'>{errorMessage.color}</p> : "  "
              }
                </div>
                <div className='col-md-6 mb-3'>
                  <label>Size</label>
                  <input type="text"  placeholder='Size' name="size" className='form-control' onChange={getData} value={data.size}/>
                  {
                show? <p className='text-capitalize text-danger'>{errorMessage.size}</p> : "  "
              }
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6 mb-3'>
                  <label>BasePrice</label>
                  <input type="number"  placeholder='BasePrice' name="baseprice" className='form-control' onChange={getData} value={data.baseprice}/>
                  {
                show? <p className='text-capitalize text-danger'>{errorMessage.baseprice}</p> : "  "
              }
                </div>
                <div className='col-md-6 mb-3'>
                  <label>Discount</label>
                  <input type="number"  placeholder='Discount' name="discount" className='form-control' onChange={getData} value={data.discount}/>
                  {
                show? <p className='text-capitalize text-danger'>{errorMessage.discount}</p> : "  "
              }
                </div>
                
              </div>
              <div className='row'>
                <div className=' mb-3'>
                  <label>Description</label>
                  <textarea className='form-control' placeholder='Description' name="description" value={data.description} onChange={getData} ></textarea>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6 mb-3'>
                  <label>Pic1 </label>
                  <input type="file" name="pic1" onChange={getInputFiles}  />
                  {
                show? <p className='text-capitalize text-danger'>{errorMessage.pic1}</p> : "  "
              }
                </div>
                <div className='col-md-6 mb-3'>
                  <label>Pic2 </label>
                  <input type="file" name="pic2" onChange={getInputFiles} />
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6 mb-3'>
                  <label>Pic3 </label>
                  <input type="file" name="pic3" onChange={getInputFiles} />
                </div>
                <div className='col-md-6 mb-3'>
                  <label>Pic4 </label>
                  <input type="file" name="pic4" onChange={getInputFiles} />
                </div>
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
