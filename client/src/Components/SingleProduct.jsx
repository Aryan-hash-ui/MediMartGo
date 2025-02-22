import React, { useState, useEffect } from 'react'
import { getProduct } from '../Store/ActionCreators/ProductActionCreators'
import { useDispatch, useSelector } from 'react-redux'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { addCart } from '../Store/ActionCreators/CartActionCreators';
import {addWishlist} from '../Store/ActionCreators/WishlistActionCreators'
import { Link, useNavigate, useParams } from 'react-router-dom'
export default function SingleProduct() {
  let [data, setData] = useState({

    pic1: "",
    pic2: "",
    pic3: "",
    pic4: "",

  })
  let [relatedproducts, setRelatedProducts] = useState([])
  let [qty, setQty] = useState(1)
  let dispatch = useDispatch()
  let CartStateData=useSelector((state)=>state.CartStateData)
  let WishlistStateData=useSelector((state)=>state.WishlistStateData)
  let ProductStateData = useSelector((state) => state.ProductStateData)
  let navigate = useNavigate()
  let { _id } = useParams()
function addToCart()
{
  var item=CartStateData.find((x)=>x.userid===localStorage.getItem("userid") && (x.productid===_id))
  if(item)
    navigate("/cart")
  else
  {
    item = {
      userid:localStorage.getItem("userid"),
      productid:_id,
      name:data.name,
      brand:data.brand,
      color:data.color,
      size:data.size,
      price:data.finalprice,
      qty:qty,
      total:data.finalprice*qty,
      pic:data.pic1,
    }
    dispatch(addCart(item))
    navigate("/cart")
  }
}




function addToWishlist()
{
  var item=WishlistStateData.find((x)=>x.userid===localStorage.getItem("userid") && (x.productid===_id))
  if(item)
    navigate("/profile")
  else
  {
  
  item={
userid:localStorage.getItem("userid"),
productid:_id,
name:data.name,
brand:data.brand,
color:data.color,
size:data.size,
price:data.finalprice,
pic:data.pic1
}
dispatch(addWishlist(item))
navigate("/profile")

}}



  function getAPIData() {
    dispatch(getProduct())
    if (ProductStateData.length) {
      let item = ProductStateData.find((x) => x._id ===_id)
      if (item) {
        setData(item)
        setRelatedProducts(ProductStateData.filter((x) => x.maincategory === item.maincategory && x.subcategory === item.subcategory && x.brand === item.brand))
      }
      else {
        navigate('/shop')
      }
    }
  }
  useEffect(() => {
    getAPIData()
  }, [ProductStateData.length, _id])
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-6'>

            <div id="carouselExampleIndicators" className="carousel slide">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={`/${data.pic1}`} height="500px" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={`/${data.pic2}`} height="500px" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={`/${data.pic3}`} height="500px" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={`/${data.pic4}`} height="500px" className="d-block w-100" alt="..." />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <div className='d-flex justify-content-between mt-1'>
              <img src={`/${data.pic1}`} height="100px" width="24.7%" alt="" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
              <img src={`/${data.pic2}`} height="100px" width="24.7%" alt="" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" />
              <img src={`/${data.pic3}`} height="100px" width="24.7%" alt="" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" />
              <img src={`/${data.pic4}`} height="100px" width="24.7%" alt="" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4" />
            </div>

          </div>
          <div className='col-md-6'>
            <h5 className='bg-primary text-center p-2 text-light my-2'>{data.name}</h5>
            <div className='table-responsive'>
              <table className='table table-bordered '>
                <tbody>

                  <tr >
                    <th className='text-center fs-6 mb-1'>Category</th><td>{data.maincategory}/{data.subcategory}/</td>
                  </tr>
                  <tr >
                    <th className='text-center fs-6 mb-1'>Brand</th><td>{data.brand}</td>
                  </tr>
                  <tr >
                    <th className='text-center fs-6 mb-1'>Color/Size</th><td>{data.color}/{data.size}</td>
                  </tr>
                  <tr >
                    <th className='text-center fs-6 mb-1'>Price</th><td><strike className="text-danger">&#8377;{data.baseprice}</strike>&#8377;{data.finalprice}<sup>{data.discount}</sup></td>
                  </tr>
                  <tr >
                    <th className='text-center fs-6 mb-1'>Stock</th><td>{data.stock}</td>
                  </tr>

                  <tr>
                    <th className='text-center fs-6 mb-1'>Description</th><td>{data.description}</td>
                  </tr>
                  <tr>
                    <th colSpan="2">
                      <div className='d-flex'>
                        <button className="w-25" onClick={() => {
                          if (qty > 1)
                            setQty(qty - 1)
                        }}><i className='fa fa-minus text-light bg-primary w-25'></i></button> <span className='text-center w-50' style={{ width: "10%" }}>{qty}</span>
                        <button className="w-25" onClick={() => {
                          setQty(qty + 1)
                        }}><i className='fa fa-plus text-light bg-primary w-25'></i></button>
                      </div>
                    </th>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <button className='btn btn-primary w-50' onClick={addToCart}><i className='fa fa-shopping-cart' ></i> Add to Cart</button>
                      <button className='btn btn-success w-50' onClick={addToWishlist}><i className='fa fa-heart' ></i> Add to Wishlist</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {
        relatedproducts.length ?
          <>


            <h6 className="text-light  bg-primary my-2 w-100 text-center p-2">Similar Products You May Like</h6>
            <OwlCarousel className='owl-theme' loop margin={10} nav>
              {
                relatedproducts.map((item, index) => {
                  return <div key={index} className="col-md-12 wow fadeInUp m-auto" data-wow-delay="0.1s">

                    <div className="team-item" >
                      <div className="position-relative overflow-hidden">
                        <img className="img-fluid" src={`/${item.pic1}`} alt="" style={{ height: "230px", width: "100%" }} />
                        <div className="team-overlay position-absolute start-0 top-0 w-100 h-100 " >
                          <img className="img-fluid team-overlay position-absolute start-0 top-0 w-100 " src={`/${item.pic2}`} alt="" style={{ height: "230px", width: "100%" }} />

                          <Link className="btn btn-square mx-1 text-light position-absolute bg-primary w-100" to={`/${item._id}`}><i className="fa fa-shopping-cart"></i>&emsp; Add to Cart</Link>

                        </div>
                      </div>
                      <div className="bg-light text-center p-4">
                        <h5 className="fw-bold mb-0">{item.name}</h5>
                        <small><del className='text-danger'>&#8377; {item.baseprice}</del>  &#8377; {item.finalprice}</small>
                      </div>
                    </div>
                  </div>

                })
              }

            </OwlCarousel>

          </> : ""
      }
    </>
  )
}
