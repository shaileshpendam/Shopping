const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({extended:false}));


//route
app.use(adminRoutes);
app.use(shopRoutes);

app.use((req , res , next) =>{
    res.status(404).send('<h1>Page Not found</h1>');
})


// start middleware concept  
// const app = express();
// app.use((req ,res , next ) => {
//     console.log('middleware');
//     next(); // Allow the request to continue to the next middleware in line
// })

// app.use('/add-product' , (req ,res , next ) => {
//     console.log('add-product middleware'); 
//     res.send('<form action="/product" method="POST"><input type="text" name="title"> <button type="submit">Add Product</button></form>');
//     // ..
// });
// app.post('/product' , (req ,res , next ) => {
//         console.log(req.body);
//         res.redirect('/')
//     })

// app.use('/' , (req ,res , next ) => {
//     console.log('hello express send'); 
//     res.send("<h1> hello express send()<h1/>");
//     // ..
// })
// end middleware

//  const server = http.createServer(app);
//  server.listen(3000);
app.listen(3000);