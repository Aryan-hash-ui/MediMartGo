import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer'
import About from './About'
import Contact from './Contact'
import Error from './Error'
import AdminHome from './Admin/AdminHome'
import Maincategory from './Admin/Maincategory/Maincategory'
import CreateMaincategory from './Admin/Maincategory/CreateMaincategory'
import UpdateMaincategory from './Admin/Maincategory/UpdateMaincategory'
import Subcategory from './Admin/Subcategory/Subcategory'
import CreateSubcategory from './Admin/Subcategory/CreateSubcategory'
import UpdateSubcategory from './Admin/Subcategory/UpdateSubcategory'
import Brand from './Admin/Brand/Brand'
import CreateBrand from './Admin/Brand/CreateBrand'
import UpdateBrand from './Admin/Brand/UpdateBrand'
import Product from './Admin/Product/Product'
import CreateProduct from './Admin/Product/CreateProduct'
import UpdateProduct from './Admin/Product/UpdateProduct'
import User from './Admin/User'
import CreateTestimonial from './Admin/Testimonials/CreateTestimonial'
import Testimonial from './Admin/Testimonials/Testimonial'
import UpdateTestimonial from './Admin/Testimonials/UpdateTestimonial'
import Shop from './Shop'
import Login from "./Login"
import Signup from "./Signup"
import SingleProduct from "./SingleProduct"
import Profile from './Profile'
import UpdateProfile from './UpdateProfile'
import Cart from './Cart'
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/shop" element={<Shop/>}/> */}
          <Route path="/admin" element={<AdminHome />} />
          <Route path="/admin/maincategory" element={<Maincategory />} />
          <Route path="/admin/maincategory/create" element={<CreateMaincategory />} />
          <Route path="/admin/maincategory/update/:id" element={<UpdateMaincategory />} />
          <Route path="/admin/subcategory" element={<Subcategory />} />
          <Route path="/admin/subcategory/create" element={<CreateSubcategory />} />
          <Route path="/admin/subcategory/update/:id" element={<UpdateSubcategory />} />

          <Route path="/admin/brand" element={<Brand />} />
          <Route path="/admin/brand/create" element={<CreateBrand />} />
          <Route path="/admin/brand/update/:id" element={<UpdateBrand />} />

          <Route path="/admin/product" element={<Product />} />
          <Route path="/admin/product/create" element={<CreateProduct />} />
          <Route path="/admin/product/update/:id" element={<UpdateProduct />} />
          <Route path="/admin/user" element={<User />} />
          <Route path="/admin/testimonial/create" element={<CreateTestimonial />} />
          <Route path="/admin/testimonial" element={<Testimonial />} />
          <Route path="/admin/testimonial/update/:id" element={<UpdateTestimonial />} />
          <Route path="/*" element={<Error />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path='/singleproduct/:id' element={<SingleProduct/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/updateprofile" element={<UpdateProfile/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}
