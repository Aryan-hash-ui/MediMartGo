const router= require("express").Router()
const maincategoryRouter=require("./MaincategoryRouter")
const subcategoryRouter=require("./SubcategoryRouter")
const brandRouter=require("./BrandRouter")
const productRouter=require("./ProductRouter")
const userRouter=require("./UserRouter")
const testimonialRouter=require("./TestimonialRouter")
const cartRouter=require("./CartRouter")
const wishlistRouter=require("./WishlistRouter")
const newsletterRouter=require("./NewsletterRouter")
const contactusRouter=require("./ContactUsRouter")
const checkoutRouter=require("./CheckoutRouter")


router.use("/maincategory",maincategoryRouter)
router.use("/subcategory",subcategoryRouter)
router.use("/brand",brandRouter)
router.use("/product",productRouter)
router.use("/user",userRouter)
router.use("/testimonial",testimonialRouter)
router.use("/cart",cartRouter)
router.use("/wishlist",wishlistRouter)
router.use("/newsletter",newsletterRouter)
router.use("/contactus",contactusRouter)
router.use("/checkout",checkoutRouter)



module.exports = router