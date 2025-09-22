const mongoose = require('mongodse')
const Product = require('./models/products');
const e = require('express');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/farmStand')
    .then(() => {
        console.log('Connection open to MongoDB')
    })
    .catch(err => {
        console.log('There is an error:')
        console.log(err)
    })




const pro = new Product({
    name: 'ruby grae fruit',
    price: 1.99,
    category: fruit
})

pro.save()
    .then(pro => {
        console.log(pro)
    })
    .catch(e =>{
        console.log(e)
    })

