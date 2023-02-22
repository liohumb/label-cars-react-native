const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.use(express.json)
app.listen(4000, () => {
    console.log('Ça marche ! (4000)')
})

mongoose.set('strictQuery', false)
mongoose.connect('mongodb://localhost:27017/label-cars', () => {
    console.log('Mongo !')
})