const { response } = require('express');
var express = require('express');
var router = express.Router();
const productHelper = require('../helper/helper')
const userData = require('../helper/userData')


/* GET home page. */
router.get('/', function (req, res, next) {
  // console.log(req.session);
  let user = req.session.user
  productHelper.getProduct().then((phone) => {

    res.render('index.hbs', { phone, user });

  })


});
router.get('/login', (req, res, next) => {
  if (req.session.loggedIn) 
    res.redirect('/')
   else 
    res.render('acDetail/login.hbs',{loginerr:req.session.loginerr})
    req.session.loginerr=''
  
})
router.get('/register', (req, res) => {
  res.render('acDetail/register.hbs')
})
router.post('/register', (req, res) => {
  userData.addUser(req.body).then((response) => {
    res.redirect('/login')
  })
})
router.post('/login', (req, res) => {
  userData.getUser(req.body).then((response) => {
    if (response.status) {
      req.session.loggedIn = true
      req.session.user = response.user
      res.redirect('/')
    }

    else {
      req.session.loginerr='Invalid email and password'
      res.redirect('/login')
    }
  })
})
router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/')
})

module.exports = router;
