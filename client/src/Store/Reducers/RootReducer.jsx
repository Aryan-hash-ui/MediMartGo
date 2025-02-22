import { combineReducers } from "@reduxjs/toolkit";
import { MaincategoryReducer } from "./MaincategoryReducers";
import { SubcategoryReducer } from "./SubcategoryReducers";
import { BrandReducer } from "./BrandReducers";
import { ProductReducer } from "./ProductReducers";
import { TestimonialReducer } from "./TestimonialReducers";
import { CartReducer } from "./CartReducers";
import { NewsletterReducer } from "./NewsletterReducers";
import { WishlistReducer } from "./WishlistReducers";
import {ContactusReducer} from "./ContactusReducer"
import { CheckoutReducer } from "./CheckoutReducers";



export default combineReducers({
    MaincategoryStateData: MaincategoryReducer,
    SubcategoryStateData: SubcategoryReducer,
    BrandStateData:BrandReducer,
    ProductStateData:ProductReducer,
    TestimonialStateData:TestimonialReducer,
    CartStateData:CartReducer,
    NewsletterStateData:NewsletterReducer,
    WishlistStateData:WishlistReducer,
    ContactusStateData:ContactusReducer,
    CheckoutStateData:CheckoutReducer

})