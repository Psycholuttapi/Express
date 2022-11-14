
var express = require('express');
var router = express.Router();
var productHelper = require('../helper/helper')

/* GET users listing. */



router.get('/', function (req, res, next) {
  // res.send('respond with a resource');
  productHelper.getProduct().then((phone) => {
    // console.log("abhijith "+phone)
    res.render('admin/viewProduct', { phone })
  })
});

router.get('/addProduct', function (req, res) {

  res.render('admin/addProduct.hbs')
})
router.post('/addProduct', function (req, res) {
  // console.log(req.body)
  // console.log(req.files.File);

  productHelper.addProduct(req.body, (id) => {
    
    // console.log(req.files)
    if (req.files.File) {
     var image = req.files.File;
    }
      else 
     var image = ''
  
    image.mv('./public/images/' + id + '.jpg', (err, done) => {
      res.render("admin/addProduct")
      
    })
  })
})
router.get('/delete', (req, res) => {
  console.log("dsfgf", req.query);
  productHelper.deleteUser(req.query.id)
  res.redirect('/admin')
  // console.log(req.query);

})

router.get('/edit', (req, res) => {
  console.log("the id is\n", req.query, req.query.id);
  productHelper.productDetail(req.query.id).then((product) => {
    res.render('admin/editProduct.hbs', { product });
  })
})
router.post('/editProduct/:id', (res, req) => {
  res.redirect('/admin')
  console.log(req.body)
  console.log("after a small gap\n\n\n")
  console.log(req.query)
  
})


module.exports = router;
