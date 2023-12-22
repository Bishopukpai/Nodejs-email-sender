const express = require('express')
const app = express()
const bodyParser = require('express').json
require('dotenv').config()
const port = 9000

app.use(bodyParser())


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})