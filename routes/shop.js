const express = require('express');
const router = express.Router();

router.get('/' , (req ,res , next ) => {
    console.log('hello express send'); 
    res.send("<h1> hello express send()<h1/>");
    // ..
})

module.exports = router;