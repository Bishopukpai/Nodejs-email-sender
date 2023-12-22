const express = require('express')
const app = express()
const bodyParser = require('express').json
require('dotenv').config()
const port = 5000

app.use(bodyParser())