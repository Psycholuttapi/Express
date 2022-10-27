
var express = require('express');
var router = express.Router();
var productHelper=require('../helper/helper')
/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  productHelper.getProduct().then((phone)=>
  {
    // console.log("abhijith "+phone)
    res.render('admin/viewProduct',{phone})
  })
  
  
});

router.get('/addProduct',function (req,res) {
  
  res.render('admin/addProduct.hbs')
})
router.post('/addProduct',function (req,res) {
  // console.log(req.body)
  // console.log(req.files.File);
  
  productHelper.addProduct(req.body,(id)=>{
    // console.log(req.files.File)
    var image=req.files.File;
    image.mv('./public/images/'+id+'.jpg',(err,done)=>{
      if (!err) {
        res.render("admin/addProduct")
        console.log(done)
        console.log("Mission completed")
      }else{
        console.log(err)
      }
    })
    

  })
})


module.exports = router;
