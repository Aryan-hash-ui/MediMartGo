import { combineReducers } from "@reduxjs/toolkit";
import { MaincategoryReducer } from "./MaincategoryReducers";
import { SubcategoryReducer } from "./SubcategoryReducers";
import { BrandReducer } from "./BrandReducers";
import { ProductReducer } from "./ProductReducers";
import { TestimonialReducer } from "./TestimonialReducers";


export default combineReducers({
    MaincategoryStateData: MaincategoryReducer,
    SubcategoryStateData: SubcategoryReducer,
    BrandStateData:BrandReducer,
    ProductStateData:ProductReducer,
    TestimonialStateData:TestimonialReducer
})