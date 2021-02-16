const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
// const rootDirect = require('./util/path')


const app = express();

//template engine
app.set('view engine', 'pug');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({extended:false}));

// for global css link
app.use(express.static(path.join(__dirname , 'public')));

//route
app.use('/admin' ,adminData.routes);
app.use(shopRoutes);

app.use((req , res , next) =>{
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404');

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
app.listen(4000);