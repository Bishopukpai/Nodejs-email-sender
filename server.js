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
        user: "process.env.AUTH_EMAIL",
        pass: "process.env.AUTH_PASS"
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})