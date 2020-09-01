const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/ProductDBex'

const app = express()

mongoose.connect(url, {useNewUrlParser:true,  useUnifiedTopology: true })
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const productRouter = require('./routes/products')
app.use('/products',productRouter)

app.listen(9000, () => {
    console.log('Server started')
})