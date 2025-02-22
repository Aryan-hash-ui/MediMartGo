const nodemailer =require("nodemailer")

const transporter = nodemailer.createTransport({
   host:"smtp.gmail.com",
   port:587,
// secure: true,       //must mentioned when host it

   auth:{
      user:process.env.MAIL_SENDER,
      pass:process.env.MAIL_PASSWORD
   }
})
module.exports= transporter


// Steps to send mail from  by setting env file
// 1)npm i dotenv
// 2).env - create it outside 
// 3)mailTransporter.js- use env file variables eg. process.env.MAIL_SENDER 
// 4)index.js- 
// just after import express bcoz it is environment file to set the environment
// require('dotenv').config()

