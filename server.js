const express = require('express')
const app = express()
const bodyParser = require('express').json
const nodemailer = require('nodemailer')
const port = 9000
require('dotenv').config()

app.use(bodyParser())

//config nodemailer
//create a transporter with nodemailer. This transporter will carry
//message from the port to destination

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASS
    }
})

//test the nodemailer transporter 

transporter.verify((error, success) =>{
    if (error) {
        console.log(error)
    } else{
        console.log("Ready for messages")
        console.log(success)
    }
})

//create a route for sending emails

app.post('/sendmail', (req, res) => {
    const {to, subject, message} = req.body

    const mailOptions = {
        from: process.env.AUTH_EMAIL,
        to:to,
        subject:subject,
        text:message
    }

    transporter.sendmail(mailOptions).then(()=>{
        res.json({
            status: "SUCCESS",
            message: "Message sent successfully"
        })
    }).catch((error) => {
        console.log(error)
        res.json({status:"FAILED", message: "An error occured!"})
    })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})