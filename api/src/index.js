const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()

const routes = require('./routes')

const app = express()

mongoose.connect(process.env.MONGO_URI, {
}, console.log('connected to db'))

app.use(cors())
app.use(express.json())
app.use(routes)




app.listen(3333, () => console.log('server running'))