const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        required: [true, "Name required"],
        minlength: [3, "Name can't be shorter than 3 characters"],
        maxlength: [20, "Name can't be longer than 20 characters"]
    },
    brand: {
        type: String,
        trim: true,
        required: true,
        maxlength: [20, "Name can't be longer than 20 characters"]
    },
    price: {
        type: Number,
        default: 1,
        required: [true, "Price required"],
        validate : {
            validator : Number.isInteger,
            message   : 'Price is not an integer value'
          },
        min: [1, 'Minimun price is one']
    },
    category: {
        type: String,
        trim: true,
        required: true
    },
    stock: {
        type: Boolean,
        default: false,
        required: true
    }


})

module.exports = mongoose.model('Product',productSchema)



/*
price: { type: Number, default: 0, required: true },
    category: { type: String, required: true },
    countInStock: { type: Number, default: 0, required: true },
    description: { type: String, required: true }
*/