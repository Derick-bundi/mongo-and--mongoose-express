// const express = require('express');
// const app = express()
// const path = require("path");
// const mongoose  = require('mongoose');


// const Product = require('./models/products')



// mongoose.connect('mongodb://localhost:27017/farmStand')
//     .then(() => {
//         console.log('connection open')
//     })
//     .catch(err => {
//         console.log('there is a error ')
//         console.log(err)
//     })


// app.set('views', path.join(__dirname, 'views'))
// app.set('view engine', 'ejs')


// app.get('/dog', (req, res) => {
//     res.send('this a basic get route')
// })


// app.listen(3000, () => {
//     console.log('this app is listening')
// })


const express = require('express');
const app = express();
const path = require("path");
const mongoose  = require('mongoose');

// const Product = require('./models/product');
const Product = require('./models/products');
// const Product = require('./models/products');


// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/farmStand')
    .then(() => {
        console.log('Connection open to MongoDB')
    })
    .catch(err => {
        console.log('There is an error:')
        console.log(err)
    })

app.use(express.static(path.join(__dirname, "public")));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// Test route
app.get('/dog', (req, res) => { 
    res.send('This is a basic GET route')
});
app.get('/Products', async (req, res) => { 
    const products = await Product.find({})
    res.render('products/index.ejs', {products})
});



// Start server
app.listen(3000, () => {
    console.log('App is listening on port 3000')
});
