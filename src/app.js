require('dotenv').config()
const express = require('express')
const router = require('./router')
const cors = require('cors')
const Connection = require('./database')

const app = express()


app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000/',
    optionsSuccessStatus: 200
}))
app.set('port', process.env.PORT)
app.set('host', process.env.HOST)
app.use(router)


module.exports = app