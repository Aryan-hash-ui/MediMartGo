import { all } from "redux-saga/effects";
import MaincategorySagas from "./MaincategorySagas";
import SubcategorySagas from "./SubcategorySagas";
import BrandSagas from "./BrandSagas";
import ProductSagas from "./ProductSagas";
import TestimonialSagas from "./TestimonialSagas";


export default function* RootSagas(){
    yield all([
        MaincategorySagas(),
        SubcategorySagas(),
        BrandSagas(),
        ProductSagas(),
        TestimonialSagas()

    ])
}