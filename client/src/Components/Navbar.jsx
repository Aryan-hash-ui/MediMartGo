import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
export default function Navbar() {

  let navigate = useNavigate()
  function logout() {
    localStorage.clear()
    navigate("/login")
  }



  return (
    <>

      {/* <!-- Topbar Start --> */}
      {/* <div className="container-fluid text-light bg-light p-0">
        <div className="row gx-0 d-none d-lg-flex">
          <div className="col-lg-6 px-5 text-start">
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              <small className="fa fa-map-marker-alt text-primary me-2"></small>
              <small>A-43, Sector-16 , Noida</small>
            </div>
            <div className="h-100 d-inline-flex text-light align-items-center py-3">
              <small className="far fa-clock text-primary me-2"></small>
              <small>Always Available - 24 x 7 </small>
            </div>
          </div>
          <div className="col-lg-6 px-5 text-light text-end">
            <div className="h-100 d-inline-flex text-light align-items-center py-3 me-4">
              <small className="fa fa-phone-alt text-light me-2"></small>
              <small className='text-light'><a href="tel:9999107432">91-9999107432</a></small>&nbsp;
              <small className="fa fa-envelope text-light me-2"></small>
              <small className='text-light'><a href="mailto:flipkart@gmail.com">flipkart@gmail.com</a></small>
            </div>
            <div className="h-100 d-inline-flex text-light align-items-center">
              <a className="btn btn-sm-square  text-light me-1" href=""><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-sm-square  text-light me-1" href=""><i className="fab fa-twitter"></i></a>
              <a className="btn btn-sm-square  text-light me-1" href=""><i className="fab fa-linkedin-in"></i></a>
              <a className="btn btn-sm-square text-light me-0" href=""><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div> */}
      {/* <!-- Topbar End --> */}

      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg bg-light text-primary navbar-dark shadow-sm px-3 px-lg-0">
        <Link to="/" className="navbar-brand d-block d-lg-none">
          <h1 className="m-0 text-uppercase text-white">
            <i className="fa fa-plus fs-1  me-3" />
            MediMartGo
          </h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse text-primary" id="navbarCollapse">
          <div className="col-lg-4 text-center text-dark border-inner py-3 mx-0">
            <div className="d-inline-flex align-items-center justify-content-center">
              <Link to="/" className="navbar-brand">
                <h1 className="m-0 text-uppercase text-dark">
                  <i className="fa fa-plus fs-1 text-danger me-3" />
                  MediMartGo
                </h1>
              </Link>
            </div>
          </div>
          <div className="navbar-nav ms-auto  text-primary mx-lg-auto py-0">
            <Link to="/" className="nav-item text-primary nav-link active">Home</Link>
            <Link to="/about" className="nav-item text-primary nav-link">About Us</Link>
            <Link to="/shop" className="nav-item text-primary nav-link">Shop</Link>
            {
              localStorage.getItem('role') === 'Admin' ?
                <Link to="/admin" className="nav-item  text-primary nav-link">Admin</Link> : ""

            }
            <Link to="/contact" className="nav-item  text-primary nav-link">Contact Us</Link>
          </div>
          <Link to="/cart" className="nav-item nav-link">
            <i className='fa fa-bold fa-shopping-cart'></i>
          </Link>

          {/* localStorage and sessionStorage are almost identical and have the same API. The difference is that with sessionStorage , the data is persisted only until the window or tab is closed. With localStorage , the data is persisted until the user manually clears the browser cache or until your web app clears the data. */}
          {
            localStorage.getItem("login") ?
              <div className="nav-item dropdown cursor-pointer py-1 mx-2 bg-success
                            ">
                <a to="#" className="nav-link dropdown-toggle text-light" data-bs-toggle="dropdown">{localStorage.getItem("name")}</a>
                <div className="dropdown-menu fade-up m-0">
                  {
                    localStorage.getItem("role") === "Admin" ?
                      <Link to="/admin" className="dropdown-item">Profile</Link> :
                      <Link to="/profile" className="dropdown-item">Profile</Link>
                  }
                  {
                    localStorage.getItem("role") === "Buyer" ?
                      <>
                        <Link to="/cart" className="dropdown-item">Cart</Link>
                        <Link to="/checkout" className="dropdown-item">Checkout</Link>
                      </> : ""
                  }
                  <button className="dropdown-item bg-success" onClick={logout}>Logout</button>
                </div>
              </div>
              :
              <Link to="/login" className="btn text-light bg-success p-3">Log In</Link>
          }

        </div>
      </nav>
      {/* Navbar End */}
    </>

  )
}
