import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
export default function Navbar() {
  let navigate=useNavigate()
    function logout() {
        localStorage.clear()
        navigate("/login")
    }



    return (
        <>
            {/* <!-- Spinner Start --> */}
            {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
             <div className="spinner-border text-primary" style={{width: "3rem" ,height: "3rem", role:"status"}}>
            <span className="sr-only">Loading...</span>
        </div>
    </div> */}
            {/* <!-- Spinner End --> */}


   <>
  {/* Topbar Start */}
  <div className="container-fluid px-0 d-none d-lg-block">
    <div className="row gx-0">
      <div className="col-lg-4 text-center bg-secondary py-3">
        <div className="d-inline-flex align-items-center justify-content-center">
          <i className="bi bi-envelope fs-1 text-danger me-3" />
          <div className="text-start">
            <h6 className="text-uppercase mb-1">Email Us</h6>
            <span>medimartgo@example.com</span>
          </div>
        </div>
      </div>
      <div className="col-lg-4 text-center bg-success border-inner py-3">
        <div className="d-inline-flex align-items-center justify-content-center">
          <Link to="/" className="navbar-brand">
            <h1 className="m-0 text-uppercase text-white">
              <i className="fa fa-plus fs-1 text-danger me-3" />
              MediMartGo
            </h1>
          </Link>
        </div>
      </div>
      <div className="col-lg-4 text-center bg-secondary py-3">
        <div className="d-inline-flex align-items-center justify-content-center">
          <i className="bi bi-phone-vibrate fs-1 text-danger me-3" />
          <div className="text-start">
            <h6 className="text-uppercase mb-1">Call Us</h6>
            <span>+91 999954678</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Topbar End */}
  {/* Navbar Start */}
  <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-0">
    <Link to="index.html" className="navbar-brand d-block d-lg-none">
      <h1 className="m-0 text-uppercase text-white">
        <i className="fa fa-birthday-cake fs-1 text-primary me-3" />
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
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav ms-auto mx-lg-auto py-0">
        <Link to="/" className="nav-item nav-link active">
          Home
        </Link>
        <Link to="/about" className="nav-item nav-link">
          About Us
        </Link>
       
        <Link to="/shop" className="nav-item nav-link">
          Shop
        </Link>
        <Link to="/admin" className="nav-item nav-link">
          Admin
        </Link>
        <Link to="/contact" className="nav-item nav-link">
          Contact Us
        </Link>
      </div>
       {/* localStorage and sessionStorage are almost identical and have the same API. The difference is that with sessionStorage , the data is persisted only until the window or tab is closed. With localStorage , the data is persisted until the user manually clears the browser cache or until your web app clears the data. */}
       {
                        localStorage.getItem("login") ?
                            <div className="nav-item dropdown bg-success
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
                                    <button className="dropdown-item" onClick={logout}>Logout</button>
                                </div>
                            </div>
                            :
                            <Link to="/login" className="btn btn-success p-3">Login</Link>
                    }

    </div>
  </nav>
  {/* Navbar End */}
</>

        </>
    )
}
