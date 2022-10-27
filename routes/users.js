var express = require('express');
var router = express.Router();
var productHelper=require('../helper/helper')


/* GET home page. */
router.get('/', function(req, res, next) {
 
  productHelper.getProduct().then((phone)=>
   {
     console.log("abhijith ")
     res.render('index', {phone});
   })

  
});
router.get('/login',(req,res,next)=>{
  res.render('acDetail/login.hbs')
})
router.get('/register',(req,res)=>{
  res.render('acDetail/register.hbs')
})

module.exports = router;
