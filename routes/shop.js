const express = require('express');
const path = require('path')
const router = express.Router();

const adminData = require('./admin')

router.get('/' , (req ,res , next ) => {
    console.log(adminData.products); 
    const product = adminData.products;

    // res.sendFile(path.join(__dirname, '../views', 'shop.html'));
    res.render('shop',{prods :product , docTitle:'shop'});
    // ..
})

module.exports = router;