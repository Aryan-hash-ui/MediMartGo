import { all } from "redux-saga/effects";
import MaincategorySagas from "./MaincategorySagas";
import SubcategorySagas from "./SubcategorySagas";
import BrandSagas from "./BrandSagas";
import ProductSagas from "./ProductSagas";
import TestimonialSagas from "./TestimonialSagas";
import CartSagas from "./CartSagas";
import CheckoutSagas from "./CheckoutSagas";
import NewsletterSagas from "./NewsletterSagas";
import ContactusSagas from "./ContactusSagas";
import WishlistSagas from "./WishlistSagas";


export default function* RootSagas(){
    yield all([
        MaincategorySagas(),
        SubcategorySagas(),
        BrandSagas(),
        ProductSagas(),
        TestimonialSagas(),
        CartSagas(),
        CheckoutSagas(),
        NewsletterSagas(),
        ContactusSagas(),
        WishlistSagas()

    ])
}