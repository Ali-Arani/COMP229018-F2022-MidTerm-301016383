let express = require('express');
let router = express.Router();
let usersController = require('../controllers/user');
let passport = require('passport');

/* GET users listing. */
router.get('/', function(req, res, next) {  
  res.render('users', { 
    title: 'Users',
    userName: req.user ? req.user.username : ''
  });
});

// Routes for sign-up
router.get('/signup', usersController.renderSignup);
router.post('/signup', usersController.signup);

// Routes for sign-in
router.get('/signin', usersController.renderSignin);
router.post('/signin', usersController.signin);

// Route for sign-out
router.get('/signout', usersController.signout);

module.exports = router;
