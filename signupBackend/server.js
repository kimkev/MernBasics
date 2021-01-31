const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
const cors = require('cors')

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database Connected"))

//body parser
app.use(express.json())
// cors after parser
app.use(cors())
// use routes last
app.use('/app', routesUrls)
app.listen(4000, () => console.log("Server is up"))