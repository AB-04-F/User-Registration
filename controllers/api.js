var express = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var router = express.Router();
var moment = require('moment');
var models = require('../models');
var user = models.tbl_user;







//insert method call
router.post('/register', jsonParser, function(req, res) {
    var age = new Date().getFullYear() - new Date(req.body.user_dob).getFullYear()
    console.log(age)
    if (age < 14) {
        res.json({ success: false, message: "User couldn't registered!" });
        return
    }
    user.create(req.body).then(function(result) {
        if (result) {
            res.json({ success: true, message: "User has been registered successfully!" });
        } else {
            res.json({ success: false, message: "User is registered unsuccessfully!" });
        }
    }).catch(function(err) {
        console.log(err)
        res.json({ success: false, message: "User not registered !" });
    });



})
router.get('/userdata', function(req, res) {

    user.findAll({ where: {} }).then(function(results) {
        if (results) {
            res.json({ success: true, message: "User data is fetched!" });
        } else {
            res.json({ success: false, message: "Couldn't   Connected database!!" });
        }
    }).catch(function(err) {
        console.log(err)
        res.json({ success: false, message: "User Data is  not fetched" });
    });

})


module.exports = router;