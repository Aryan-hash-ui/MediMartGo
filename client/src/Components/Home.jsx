import React from 'react'
import Testimonial from './Testimonial'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getProduct } from "../Store/ActionCreators/ProductActionCreators"
import { Link } from 'react-router-dom'


export default function Home() {
  let dispatch = useDispatch()
  let [data, setData] = useState([])
  let ProductStateData = useSelector((state) => state.ProductStateData)

  function getAPIData() {
    dispatch(getProduct())
    if (ProductStateData.length) {
      setData(ProductStateData.slice(0, 15))
    }
  }
  useEffect(() => {
    getAPIData()
  }, [ProductStateData.length])
  return (
    <>
      <>
        {/* Hero Start */}
        <div className="container-fluid bg-success py-5 mb-5 hero-header">
          <div className="container py-5">
            <div className="row justify-content-start">
              <div className="col-lg-8 text-center text-lg-start">
                <h1 className="font-secondary text-primary mb-4">Super Quality</h1>
                <h1 className="display-1 text-uppercase text-white mb-4">MediMartGo</h1>
                <h1 className="text-uppercase text-white">The Best Quality Medicines in India </h1>
                <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                  <a href="" className="btn bg-success border-inner text-light py-3 px-5 me-5">
                    Read More
                  </a>
                  <button
                    type="button"
                    className="btn-play"
                    data-bs-toggle="modal"
                    data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                    data-bs-target="#videoModal"
                  >
                    <span />
                  </button>
                  <h5 className="font-weight-normal text-white m-0 ms-4 d-none d-sm-block">
                    Play Video
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero End */}
        {/* Video Modal Start */}
        <div
          className="modal fade"
          id="videoModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content rounded-0">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Youtube Video
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                {/* 16:9 aspect ratio */}
                <div className="ratio ratio-16x9">
                  <iframe
                    className="embed-responsive-item"
                    src=""
                    id="video"
                    allowFullScreen=""
                    allowscriptaccess="always"
                    allow="autoplay"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Video Modal End */}
         {/* Products Start */}
        
         <div className="container-fluid py-5">
          <div className="container">
            <div
              className="section-title position-relative text-center mx-auto mb-5 pb-3"
              style={{ maxWidth: 600 }}
            >
              <h2 className="text-primary font-secondary">Medicines</h2>
              <h1 className="display-4 text-uppercase">Our Products</h1>
            </div>
            <div className="row g-5">
              {
                data.map((item, index) => {
                  return <div className="col-lg-4  col-md-6" key={index}>
                    
     
                    <div className="team-item cards" style={{"box-shadow":"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"}}>
                      <div className="position-relative overflow-hidden">
                        <img className="img-fluid  p-2 w-100" src={`/${item.pic1}`}  alt=""  style={{"width":"100%","height":"200px"}} />
                        <div className="team-overlay w-100 h-100 position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center">
                          <div className="d-flex align-items-center justify-content-start">
                          <img className="img-fluid team-overlay position-absolute start-0 top-0 w-100 h-100" src={`/${item.pic2}`}  alt=""  style={{"width":"100%","height":"200px"}}/>
                           
                           
                          </div>
                        </div>
                      </div>
                      <Link to={`/singleproduct/${item._id}`}><div className="bg-dark border-inner text-center p-4">
                        <h4 className="text-uppercase text-primary">{item.name}</h4>
                        <small><del className='text-danger'>&#8377; {item.baseprice}</del>  &#8377; {item.finalprice}</small>
                      </div>
                      </Link>
                    </div>
                  </div>
                })
              }
            </div>
          </div>
        </div>
        {/*  Product End */}

        {/* About Start */}
        <div className="container-fluid pt-5">
          <div className="container">
            <div
              className="section-title position-relative text-center mx-auto mb-5 pb-3"
              style={{ maxWidth: 600 }}
            >
              <h2 className="text-primary font-secondary">About Us</h2>
              <h1 className="display-4 text-uppercase">Welcome To MediMartGo</h1>
            </div>
            <div className="row gx-5">
              <div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: 400 }}>
                <div className="position-relative h-100">
                  <img
                    className="position-absolute w-100 h-100"
                    src="img/smuth1.jpeg"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className="col-lg-6 pb-5">
                <h4 className="mb-4">
                  Tempor erat elitr rebum clita. Diam dolor diam ipsum erat lorem sed
                  stet labore lorem sit clita duo
                </h4>
                <p className="mb-5">
                  Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum et
                  tempor sit. Clita erat ipsum et lorem et sit, sed stet no labore
                  lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore
                  erat amet magna
                </p>
                <div className="row g-5">
                  <div className="col-sm-6">
                    <div
                      className="d-flex align-items-center justify-content-center bg-success border-inner mb-4"
                      style={{ width: 90, height: 90 }}
                    >
                      <i className="fa fa-heartbeat fa-2x text-white" />
                    </div>
                    <h4 className="text-uppercase">100% Healthy</h4>
                    <p className="mb-0">
                      Labore justo vero ipsum sit clita erat lorem magna clita nonumy
                      dolor magna dolor vero
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <div
                      className="d-flex align-items-center justify-content-center bg-success border-inner mb-4"
                      style={{ width: 90, height: 90 }}
                    >
                      <i className="fa fa-award fa-2x text-white" />
                    </div>
                    <h4 className="text-uppercase">Award Winning</h4>
                    <p className="mb-0">
                      Labore justo vero ipsum sit clita erat lorem magna clita nonumy
                      dolor magna dolor vero
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}
        {/* Facts Start */}
        <div className="container-fluid bg-img py-5 mb-5">
          <div className="container py-5">
            <div className="row gx-5 gy-4">
              <div className="col-lg-3 col-md-6">
                <div className="d-flex">
                  <div
                    className="bg-success border-inner d-flex align-items-center justify-content-center mb-3"
                    style={{ width: 60, height: 60 }}
                  >
                    <i className="fa fa-star text-white" />
                  </div>
                  <div className="ps-4">
                    <h6 className="text-primary text-uppercase">Our Experience</h6>
                    <h1
                      className="display-5 text-white mb-0"
                      data-toggle="counter-up"
                    >
                      12345
                    </h1>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="d-flex">
                  <div
                    className="bg-success border-inner d-flex align-items-center justify-content-center mb-3"
                    style={{ width: 60, height: 60 }}
                  >
                    <i className="fa fa-users text-white" />
                  </div>
                  <div className="ps-4">
                    <h6 className="text-primary text-uppercase">Medicine Specialist</h6>
                    <h1
                      className="display-5 text-white mb-0"
                      data-toggle="counter-up"
                    >
                      12345
                    </h1>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="d-flex">
                  <div
                    className="bg-success border-inner d-flex align-items-center justify-content-center mb-3"
                    style={{ width: 60, height: 60 }}
                  >
                    <i className="fa fa-check text-white" />
                  </div>
                  <div className="ps-4">
                    <h6 className="text-primary text-uppercase">Complete Delivery</h6>
                    <h1
                      className="display-5 text-white mb-0"
                      data-toggle="counter-up"
                    >
                      12345
                    </h1>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="d-flex">
                  <div
                    className="bg-success border-inner d-flex align-items-center justify-content-center mb-3"
                    style={{ width: 60, height: 60 }}
                  >
                    <i className="fa fa-mug-hot text-white" />
                  </div>
                  <div className="ps-4">
                    <h6 className="text-primary text-uppercase">Happy Cusstomers</h6>
                    <h1
                      className="display-5 text-white mb-0"
                      data-toggle="counter-up"
                    >
                      12345
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Facts End */}
        {/* Products Start */}
        <div className="container-fluid about py-5">
          <div className="container">
            <div
              className="section-title position-relative text-center mx-auto mb-5 pb-3"
              style={{ maxWidth: 600 }}
            >
              <h2 className="text-primary font-secondary">Menu &amp; Pricing</h2>
              <h1 className="display-4 text-uppercase">Explore Our Medicines</h1>
            </div>
            <div className="tab-class text-center">
              <ul className="nav nav-pills d-inline-flex justify-content-center bg-dark text-uppercase border-inner p-4 mb-5">
                <li className="nav-item">
                  <a
                    className="nav-link text-white active"
                    data-bs-toggle="pill"
                    href="#tab-1"
                  >
                    Pills
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-white"
                    data-bs-toggle="pill"
                    href="#tab-2"
                  >
                    Syrup
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-white"
                    data-bs-toggle="pill"
                    href="#tab-3"
                  >
                    Cream
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div id="tab-1" className="tab-pane fade show p-0 active">
                  <div className="row g-3">
                    <div className="col-lg-6">
                      <div className="d-flex h-100">
                        <div className="flex-shrink-0">
                          <img
                            className="img-fluid"
                            src="img/korandil1.jpeg"
                            alt=""
                            style={{ width: 150, height: 85 }}
                          />
                          <h4 className="bg-dark text-primary p-2 m-0">$99.00</h4>
                        </div>
                        <div className="d-flex flex-column justify-content-center text-start bg-secondary border-inner px-4">
                          <h5 className="text-uppercase">Korandil Tablet</h5>
                          <span>
                            Ipsum ipsum clita erat amet dolor sit justo sea eirmod
                            diam stet sit justo
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex h-100">
                        <div className="flex-shrink-0">
                          <img
                            className="img-fluid"
                            src="img/letroz1.jpeg"
                            alt=""
                            style={{ width: 150, height: 85 }}
                          />
                          <h4 className="bg-dark text-primary p-2 m-0">$99.00</h4>
                        </div>
                        <div className="d-flex flex-column justify-content-center text-start bg-secondary border-inner px-4">
                          <h5 className="text-uppercase">Letroz Tablet</h5>
                          <span>
                            Ipsum ipsum clita erat amet dolor sit justo sea eirmod
                            diam stet sit justo
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex h-100">
                        <div className="flex-shrink-0">
                          <img
                            className="img-fluid"
                            src="img/liprose1.jpeg"
                            alt=""
                            style={{ width: 150, height: 85 }}
                          />
                          <h4 className="bg-dark text-primary p-2 m-0">$99.00</h4>
                        </div>
                        <div className="d-flex flex-column justify-content-center text-start bg-secondary border-inner px-4">
                          <h5 className="text-uppercase">Liprose Gold Tablet</h5>
                          <span>
                            Ipsum ipsum clita erat amet dolor sit justo sea eirmod
                            diam stet sit justo
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex h-100">
                        <div className="flex-shrink-0">
                          <img
                            className="img-fluid"
                            src="img/crocin.jpeg"
                            alt=""
                            style={{ width: 150, height: 85 }}
                          />
                          <h4 className="bg-dark text-primary p-2 m-0">$99.00</h4>
                        </div>
                        <div className="d-flex flex-column justify-content-center text-start bg-secondary border-inner px-4">
                          <h5 className="text-uppercase">Crocin Tablet</h5>
                          <span>
                            Ipsum ipsum clita erat amet dolor sit justo sea eirmod
                            diam stet sit justo
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex h-100">
                        <div className="flex-shrink-0">
                          <img
                            className="img-fluid"
                            src="img/calpol.jpeg"
                            alt=""
                            style={{ width: 150, height: 85 }}
                          />
                          <h4 className="bg-dark text-primary p-2 m-0">$99.00</h4>
                        </div>
                        <div className="d-flex flex-column justify-content-center text-start bg-secondary border-inner px-4">
                          <h5 className="text-uppercase">Calpol Tablet</h5>
                          <span>
                            Ipsum ipsum clita erat amet dolor sit justo sea eirmod
                            diam stet sit justo
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex h-100">
                        <div className="flex-shrink-0">
                          <img
                            className="img-fluid"
                            src="img/letroz1.jpeg"
                            alt=""
                            style={{ width: 150, height: 85 }}
                          />
                          <h4 className="bg-dark text-primary p-2 m-0">$99.00</h4>
                        </div>
                        <div className="d-flex flex-column justify-content-center text-start bg-secondary border-inner px-4">
                          <h5 className="text-uppercase">Letroz Tablet</h5>
                          <span>
                            Ipsum ipsum clita erat amet dolor sit justo sea eirmod
                            diam stet sit justo
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tab-2" className="tab-pane fade show p-0">
                  <div className="row g-3">
                    <div className="col-lg-6">
                      <div className="d-flex h-100">
                        <div className="flex-shrink-0">
                          <img
                            className="img-fluid"
                            src="img/combiflamsyrup.jpeg"
                            alt=""
                            style={{ width: 150, height: 85 }}
                          />
                          <h4 className="bg-dark text-primary p-2 m-0">$99.00</h4>
                        </div>
                        <div className="d-flex flex-column justify-content-center text-start bg-secondary border-inner px-4">
                          <h5 className="text-uppercase">Combiflam Syrup</h5>
                          <span>
                            Ipsum ipsum clita erat amet dolor sit justo sea eirmod
                            diam stet sit justo
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex h-100">
                        <div className="flex-shrink-0">
                          <img
                            className="img-fluid"
                            src="img/corex.jpeg"
                            alt=""
                            style={{ width: 150, height: 85 }}
                          />
                          <h4 className="bg-dark text-primary p-2 m-0">$99.00</h4>
                        </div>
                        <div className="d-flex flex-column justify-content-center text-start bg-secondary border-inner px-4">
                          <h5 className="text-uppercase">Corex Syrup</h5>
                          <span>
                            Ipsum ipsum clita erat amet dolor sit justo sea eirmod
                            diam stet sit justo
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex h-100">
                        <div className="flex-shrink-0">
                          <img
                            className="img-fluid"
                            src="img/diegen.jpeg"
                            alt=""
                            style={{ width: 150, height: 85 }}
                          />
                          <h4 className="bg-dark text-primary p-2 m-0">$99.00</h4>
                        </div>
                        <div className="d-flex flex-column justify-content-center text-start bg-secondary border-inner px-4">
                          <h5 className="text-uppercase">Digene Syrup</h5>
                          <span>
                            Ipsum ipsum clita erat amet dolor sit justo sea eirmod
                            diam stet sit justo
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex h-100">
                        <div className="flex-shrink-0">
                          <img
                            className="img-fluid"
                            src="img/mucaine.jpeg"
                            alt=""
                            style={{ width: 150, height: 85 }}
                          />
                          <h4 className="bg-dark text-primary p-2 m-0">$99.00</h4>
                        </div>
                        <div className="d-flex flex-column justify-content-center text-start bg-secondary border-inner px-4">
                          <h5 className="text-uppercase">Mucaine Syrup</h5>
                          <span>
                            Ipsum ipsum clita erat amet dolor sit justo sea eirmod
                            diam stet sit justo
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex h-100">
                        <div className="flex-shrink-0">
                          <img
                            className="img-fluid"
                            src="img/alkasol.jpeg"
                            alt=""
                            style={{ width: 150, height: 85 }}
                          />
                          <h4 className="bg-dark text-primary p-2 m-0">$99.00</h4>
                        </div>
                        <div className="d-flex flex-column justify-content-center text-start bg-secondary border-inner px-4">
                          <h5 className="text-uppercase">Alkasol Syrup</h5>
                          <span>
                            Ipsum ipsum clita erat amet dolor sit justo sea eirmod
                            diam stet sit justo
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex h-100">
                        <div className="flex-shrink-0">
                          <img
                            className="img-fluid"
                            src="img/cypon.jpeg"
                            alt=""
                            style={{ width: 150, height: 85 }}
                          />
                          <h4 className="bg-dark text-primary p-2 m-0">$99.00</h4>
                        </div>
                        <div className="d-flex flex-column justify-content-center text-start bg-secondary border-inner px-4">
                          <h5 className="text-uppercase">Cypon Syrup</h5>
                          <span>
                            Ipsum ipsum clita erat amet dolor sit justo sea eirmod
                            diam stet sit justo
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tab-3" className="tab-pane fade show p-0">
                  <div className="row g-3">
                    <div className="col-lg-6">
                      <div className="d-flex h-100">
                        <div className="flex-shrink-0">
                          <img
                            className="img-fluid"
                            src="img/derobin.jpeg"
                            alt=""
                            style={{ width: 150, height: 85 }}
                          />
                          <h4 className="bg-dark text-primary p-2 m-0">$99.00</h4>
                        </div>
                        <div className="d-flex flex-column justify-content-center text-start bg-secondary border-inner px-4">
                          <h5 className="text-uppercase">Derobin Cream</h5>
                          <span>
                            Ipsum ipsum clita erat amet dolor sit justo sea eirmod
                            diam stet sit justo
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex h-100">
                        <div className="flex-shrink-0">
                          <img
                            className="img-fluid"
                            src="img/panderm.jpeg"
                            alt=""
                            style={{ width: 150, height: 85 }}
                          />
                          <h4 className="bg-dark text-primary p-2 m-0">$99.00</h4>
                        </div>
                        <div className="d-flex flex-column justify-content-center text-start bg-secondary border-inner px-4">
                          <h5 className="text-uppercase">Panderm Cream</h5>
                          <span>
                            Ipsum ipsum clita erat amet dolor sit justo sea eirmod
                            diam stet sit justo
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex h-100">
                        <div className="flex-shrink-0">
                          <img
                            className="img-fluid"
                            src="img/dermiford.jpeg"
                            alt=""
                            style={{ width: 150, height: 85 }}
                          />
                          <h4 className="bg-dark text-primary p-2 m-0">$99.00</h4>
                        </div>
                        <div className="d-flex flex-column justify-content-center text-start bg-secondary border-inner px-4">
                          <h5 className="text-uppercase">Dermiford Cream</h5>
                          <span>
                            Ipsum ipsum clita erat amet dolor sit justo sea eirmod
                            diam stet sit justo
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex h-100">
                        <div className="flex-shrink-0">
                          <img
                            className="img-fluid"
                            src="img/surfaz2.jpeg"
                            alt=""
                            style={{ width: 150, height: 85 }}
                          />
                          <h4 className="bg-dark text-primary p-2 m-0">$99.00</h4>
                        </div>
                        <div className="d-flex flex-column justify-content-center text-start bg-secondary border-inner px-4">
                          <h5 className="text-uppercase">Surfaz Cream</h5>
                          <span>
                            Ipsum ipsum clita erat amet dolor sit justo sea eirmod
                            diam stet sit justo
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex h-100">
                        <div className="flex-shrink-0">
                          <img
                            className="img-fluid"
                            src="img/smuth1.jpeg"
                            alt=""
                            style={{ width: 150, height: 85 }}
                          />
                          <h4 className="bg-dark text-primary p-2 m-0">$99.00</h4>
                        </div>
                        <div className="d-flex flex-column justify-content-center text-start bg-secondary border-inner px-4">
                          <h5 className="text-uppercase">Smuth Cream</h5>
                          <span>
                            Ipsum ipsum clita erat amet dolor sit justo sea eirmod
                            diam stet sit justo
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex h-100">
                        <div className="flex-shrink-0">
                          <img
                            className="img-fluid"
                            src="img/melacare.jpeg"
                            alt=""
                            style={{ width: 150, height: 85 }}
                          />
                          <h4 className="bg-dark text-primary p-2 m-0">$99.00</h4>
                        </div>
                        <div className="d-flex flex-column justify-content-center text-start bg-secondary border-inner px-4">
                          <h5 className="text-uppercase">Melacare Cream</h5>
                          <span>
                            Ipsum ipsum clita erat amet dolor sit justo sea eirmod
                            diam stet sit justo
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Products End */}
        {/* Service Start */}
        <div
          className="container-fluid service position-relative px-5 mt-5"
          style={{ marginBottom: 135 }}
        >
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-4 col-md-6">
                <div className="bg-success border-inner text-center text-white p-5">
                  <h4 className="text-uppercase mb-3">Surgicals</h4>
                  <p>
                    Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet
                    sit justo amet tempor amet kasd lorem dolor ipsum
                  </p>
                  <a className="text-uppercase text-dark" href="">
                    Read More <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="bg-success border-inner text-center text-white p-5">
                  <h4 className="text-uppercase mb-3">Inhalers</h4>
                  <p>
                    Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet
                    sit justo amet tempor amet kasd lorem dolor ipsum
                  </p>
                  <a className="text-uppercase text-dark" href="">
                    Read More <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="bg-success border-inner text-center text-white p-5">
                  <h4 className="text-uppercase mb-3">Supliments</h4>
                  <p>
                    Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet
                    sit justo amet tempor amet kasd lorem dolor ipsum
                  </p>
                  <a className="text-uppercase text-dark" href="">
                    Read More <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="col-lg-12 col-md-6 text-center">
                <h1 className="text-uppercase text-light mb-4">
                  30% Discount For This Summer
                </h1>
                <a href="" className="btn bg-success border-inner py-3 px-5">
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Service Start */}
       

        {/* Offer Start */}
        <div className="container-fluid bg-offer my-5 py-5">
          <div className="container py-5">
            <div className="row gx-5 justify-content-center">
              <div className="col-lg-7 text-center">
                <div
                  className="section-title position-relative text-center mx-auto mb-4 pb-3"
                  style={{ maxWidth: 600 }}
                >
                  <h2 className="text-primary font-secondary">Special Kombo Pack</h2>
                  <h1 className="display-4 text-uppercase text-white">
                    Super Quality Medicines
                  </h1>
                </div>
                <p className="text-white mb-4">
                  Eirmod sed tempor lorem ut dolores sit kasd ipsum. Dolor ea et
                  dolore et at sea ea at dolor justo ipsum duo rebum sea. Eos vero eos
                  vero ea et dolore eirmod et. Dolores diam duo lorem. Elitr ut
                  dolores magna sit. Sea dolore sed et.
                </p>
                <a href="" className="btn bg-success border-inner py-3 px-5 me-3">
                  Shop Now
                </a>
                <a href="" className="btn bg-success border-inner py-3 px-5">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Offer End */}

      </>

      <Testimonial />


    </>
  )
}
