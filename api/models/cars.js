const mongoose = require( 'mongoose' )

const CarsSchema = new mongoose.Schema( {
    name:
        {
            type: String,
            required: true
        },
    image:
        {
            type: String,
            default: ''
        },
    price:
        {
            type: Number,
            required: true
        },
    reservations:
        {
            type: Number,
            default: 0
        },
    options:
        {
            aircondition:
                {
                    type: Boolean
                },
            navigation:
                {
                    type: Boolean
                },
            transmission:
                {
                    type: String
                },
            person:
                {
                    type: Number
                }
        }
}, { timestamps: true } )

module.exports = mongoose.model( 'Cars', CarsSchema )