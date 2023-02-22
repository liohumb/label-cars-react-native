const express = require('express')
const mongoose = require('mongoose')

const carsRoute = require('./routes/cars')

const app = express()

app.use(express.json())
app.listen(5500, () => {
    console.log("Ça roule ma poule sur le port 5500 !")
})

mongoose.set('strictQuery', true)
mongoose.connect('mongodb://localhost:27017/label-cars', () => {
    console.log('Mongo est là !')
})

app.use('/api/cars', carsRoute)