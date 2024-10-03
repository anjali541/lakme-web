var express = require('express');
var router = express.Router();

const {sendMail} = require("../utils/sendmail")

/* GET home page. */
router.get('/',(req, res,)=> {
  res.render('index', { title: "index | SocialMedia",user: req.user });
});

// router.get('/', function(req, res, next) {
//   res.render('Home', { title: 'Express' });
// });

router.get('/blog', function(req, res, next) {
  res.render('blog', { title: 'Express' });
});
router.get('/product', function(req, res, next) {
  res.render('product', { title: 'Express' });
});

router.get('/categories', function(req, res, next) {
  res.render('categories', { title: 'Express' });
});
router.get('/register', (req, res, ) =>{
  res.render('register', { title: "Register | SocialMedia",user: req.user });
});

router.get('/login', (req, res,) =>{
  res.render('login', { title: "login | SocialMedia",user: req.user });
});


router.post("/sendmail", function (req,res,next) {
  sendMail(req,res)
});



module.exports = router;
