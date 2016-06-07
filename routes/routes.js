var express = require('express');

var mongoose = require('mongoose');
var User = require('../models/user').user;
var Article = require('../models/article').article;
mongoose.connect('mongodb://localhost/monData');

module.exports = function(app) {

	/* GET home page. */
	app.get('/', function(req, res, next) {

	  // res.render('index', { title: 'Express' });

	  Article.find({}, function(error, result){
	    if(error) {
	        console.log(error);
	    } else {
	    	console.log('查询成功！')
	        res.render('index', {
	           title: '首页',
	           data:result
	        });
	    }
	});

	});
    
    /* GET admin page. */
	app.get('/admin', function(req, res, next) {

		Article.find({}, function(error, result){
		    if(error) {
		        console.log(error);
		    } else {
		    	console.log('查询成功！')
		    	console.log(result)
		        res.render('main', {
		           title: '后台页面',
		           data:result
		        });
		    }
		});
	});
    
    /* GET login page. */
	app.get('/admin/login', function(req, res, next) {
	  res.render('login', { title: '登录页面' });
	});
    
    /* GET release page. */
	app.get('/admin/release', function(req, res, next) {
	  var id = req.query.id;
	  if (id) {
        Article.findOne({_id:id}, function(error, result){
		    if(error) {
		        console.log(error);
		    } else {
		    	console.log('查询成功！')
                type = result.type
				author = result.author
				title = result.title
				introduction = result.introduction
				imgsrc = result.imgsrc
				content = result.content
				  res.render('release', { 
				  	btitle: '修改文章',
				  	id : result._id,
				  	type : type,
					author : author,
					title : title,
					introduction : introduction,
					imgsrc : imgsrc,
					content : content
				  });
		    }
		});
	  }else{
         res.render('release', { 
		  	btitle: '新增文章',
		  	id:'',
		  	type : '',
			author : '',
			title : '',
			introduction : '',
			imgsrc : '',
			content : ''
		  });
	  }
	  
	});



    app.post('/acticle/update', function(req, res, next) {
    	var id = req.body.id;
    	console.log(id)
		var data = {
		   type : req.body.type,
		   author : req.body.author,
		   title : req.body.title,
		   introduction : req.body.introduction,
		   imgsrc : req.body.imgsrc,
		   content : req.body.content,
		   meta:{
		   	  updateAt:Date.now()
		   }

		};

		console.log(data)


		if (id) {
			var conditions = {_id : id};
			var update     = {$set : data};
			var options    = {upsert : true};

			Article.update(conditions, update, function(error,data){
			    if(error) {
			        console.log(error);
			        res.json({code:0})
			    } else {
			    	res.json({code:1,data:data})
			        console.log('update ok!');
			    }
			});

		}else{
			var saveUser = new Article(data);
			//保存数据库
			saveUser.save(function(err) {
			    if (err) {
			    	res.json({code:0})
			        console.log('数据保存失败')
			        return;
			    }
			    res.json({code:1,data:saveUser})
			    console.log('数据保存成功');
			});

		}

        

	});
};


