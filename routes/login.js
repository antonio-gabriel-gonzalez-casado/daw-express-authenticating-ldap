var express = require('express');
var LdapAuth= require('ldapauth-fork');
const { use } = require('.');
var router = express.Router();

/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});


router.post('/auth', (req, res) => {

  // Insert Login Code Here
  let username = req.body.username;
  let password = req.body.password;
  res.send(`Username: ${username} Password: ${password}`);
});

module.exports = router;
