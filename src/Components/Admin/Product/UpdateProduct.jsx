import React, { useState } from 'react'
import Sidebar from '../Sidebar'
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { getProduct, updateProduct } from '../../../Store/ActionCreators/ProductActionCreators'
import { useEffect } from 'react'
import { getMaincategory } from '../../../Store/ActionCreators/MaincategoryActionCreators'
import { getSubcategory } from '../../../Store/ActionCreators/SubcategoryActionCreators'
import { getBrand } from "../../../Store/ActionCreators/BrandActionCreators"
export default function UpdateProduct() {
  let [maincategory, setMaincategory] = useState([])
  let [subcategory, setSubcategory] = useState([])
  let [brand, setBrand] = useState([])
  let [data, setData] = useState({})
  let { id } = useParams()
  let dispatch = useDispatch()
  let ProductStateData = useSelector((state) => state.ProductStateData)
  let MainCategoryStateData = useSelector((state) => state.MaincategoryStateData)
  let SubCategoryStateData = useSelector((state) => state.SubcategoryStateData)
  let BrandStateData = useSelector((state) => state.BrandStateData)
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
  
      let fp = Math.round(data.baseprice - data.baseprice * data.discount / 100)
      let item = {
        id:data.id,
        name: data.name,
        maincategory: data.maincategory || maincategory[0].name,
        subcategory: data.subcategory || subcategory[0].name,
        brand: data.brand || brand[0].name,
        stock: data.stock,
        color: data.color,
        size: data.size,

        baseprice: parseInt(data.baseprice),
        discount: parseInt(data.discount),
        finalprice: fp,
        description: data.description,
        pic1: data.pic1,
        pic2: data.pic2,
        pic3: data.pic3,
        pic4: data.pic4

      }
      dispatch(updateProduct(item))
      navigate("/admin/product")
    }
  
  function getAPIData() {
    dispatch(getMaincategory())
    dispatch(getSubcategory())
    dispatch(getBrand())

    if (MainCategoryStateData.length)
      setMaincategory(MainCategoryStateData.slice(1).reverse())
    if (SubCategoryStateData.length)
      setSubcategory(SubCategoryStateData.slice(1).reverse())
    if (BrandStateData.length)
      setBrand(BrandStateData.slice(1).reverse())

    dispatch(getProduct())
    if (ProductStateData.length) {
      let item = ProductStateData.slice(1).find((x) => x.id === id)
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
                </div></div>
              <div className='row'>
                <div className='col-md-3 mb-3'>
                  <label>Maincategory</label>
                  <select className='form-control' name="maincategory" onChange={getData} >
                    {
                      maincategory.map((item, index) => {
                        return <option key={index} value={item.maincategory}>{item.maincategory}</option>
                      })
                    }
                  </select>
                </div>
                <div className='col-md-3 mb-3'>
                  <label>Subcategory</label>
                  <select className='form-control' name="subcategory" onChange={getData}>
                    {
                      subcategory.map((item, index) => {
                        return <option key={index} value={item.subcategory}>{item.subcategory}</option>
                      })
                    }
                  </select>
                </div>
                <div className='col-md-3 mb-3'>
                  <label>Brand</label>
                  <select className='form-control' name="brand" onChange={getData}>
                    {
                      brand.map((item, index) => {
                        return <option key={index} value={item.brand}>{item.brand}</option>
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
                  <input type="text" required placeholder='Color' name="color" className='form-control' onChange={getData} value={data.color}/>
                </div>
                <div className='col-md-6 mb-3'>
                  <label>Size</label>
                  <input type="text" required placeholder='Size' name="size" className='form-control' onChange={getData} value={data.size}/>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6 mb-3'>
                  <label>BasePrice</label>
                  <input type="number" required placeholder='BasePrice' name="baseprice" className='form-control' onChange={getData} value={data.baseprice}/>
                </div>
                <div className='col-md-6 mb-3'>
                  <label>Discount</label>
                  <input type="number" required placeholder='Discount' name="discount" className='form-control' onChange={getData} value={data.discount}/>
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
                  <input type="file" name="pic1" onChange={getInputFiles} />
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
