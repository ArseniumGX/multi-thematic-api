process.env.NODE_ENV !== 'Development' ? 
            require('dotenv').config() : 
            require('dotenv').config({ path: '.env.dev'})
const express = require('express')
const router = require('./router')
const cors = require('cors')


const app = express()

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000/',
    optionsSuccessStatus: 200
}))
app.set('port', process.env.PORT)
app.use(router)


module.exports = app