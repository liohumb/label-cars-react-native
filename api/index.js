const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const authRoute = require('./routes/auth')
const carsRoute = require('./routes/cars')
const usersRoute = require('./routes/users')

const app = express()

app.use(cors())
app.use(express.json())
app.listen(5500, () => {
    console.log("Ça roule ma poule sur le port 5500 !")
})

mongoose.set('strictQuery', true)
mongoose.connect('mongodb://localhost:27017/label-cars', () => {
    console.log('Mongo est là !')
})

app.use('/api/auth', authRoute)
app.use('/api/cars', carsRoute)
app.use('/api/users', usersRoute)