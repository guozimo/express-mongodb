var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var User = require('../models/user').user;

mongoose.connect('mongodb://localhost/monData');

/* GET home page. */
router.get('/', function(req, res, next) {
  
  User.findOne({'username':"杜海涛"},function(err, user){
		if (err) {
		   console.log(err)
		}else{
			console.log(user)
		}
		res.render('index', {
			title: 'node+express+mongondb',
			userid : user.userid,
			username :user.username
		});
	}); 
});


router.post('/chkMsg',function(req, res, next){
	  var username = req.body.username;
	  if (username == '') {
	  	 res.json({ recode:0, remsg:"请输入用户名" })
	  	 return;
	  }
      User.findOne({username:username},function(err, data){
        if (err) {
         	console.log(err)
         	return;
        }
        console.log(data)
        if (data !== null) {
            res.json({ recode:1, remsg:'查询成功', data:data })
        }else{
            res.json({ recode:1, remsg:'无该用户信息', data:data })
        }

        
      });
})



module.exports = router;
