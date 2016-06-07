var mongoose = require("mongoose");	//引入mongoose模块
/*var db       = mongoose.createConnection('mongodb://localhost/monData');  //连接数据


//一次打开记录
db.once('open', function() {
 	console.log("数据库连接成功");
});

// 链接错误
db.on('error', function(error) {
    console.log("链接错误");
});
*/

var Schema = mongoose.Schema;	//	创建模型
var userScheMa = new Schema({
    userid:     Number,
    username:   String,
    password:   String
});	//	定义了一个新的模型，但是此模式还未和users集合有关联

exports.user = mongoose.model('users', userScheMa); //	与users集合关联


// -------------------------------------------------------------------------------

//var mongooseModel  = mongoose.model('users', userScheMa); 
/**
 * 新增数数据保存到数据库
 * 操作 data.save(callback)
 * data : 数据
 * callback :回调函数
 */
//模拟存储数据
/*var userMsg = new mongooseModel({
	userid  :  10000,
    username: '杜海涛22',
    password: '12345622'
});

//保存数据库
userMsg.save(function(err) {
    if (err) {
        console.log('数据保存失败')
        return;
    }
    console.log(userMsg)
    console.log('数据保存成功');
});
*/


/*
*删除记录
*操作 mongooseModel.remove(conditions,callback)
*conditions ：查询条件
*callback :回调函数
*/
/*var conditions = {username: '杜海涛2'};  //条件
mongooseModel.remove(conditions, function(error){
    if(error) {
        console.log(error);
    } else {
        console.log('删除成功');
    }
    //关闭数据库链接
    db.close();
});

*/


/*
 * 查询数据
 * mongooseModel.find(criteria, fields, options,callback)
 * criteria : 查询条件，如果条件为空，则查询全部
 * fields :待返回的字段
 * options 
 * callback :回调函数
 */
/*var criteria = {username : '杜海涛'};  
var fields   = {userid : 1, username : 1, password : 1}; 
var options  = {};
mongooseModel.find(criteria, fields, options, function(error, result){
    if(error) {
        console.log(error);
    } else {
    	console.log(options)
    	console.log('查询成功！')
        console.log(result);
    }
    //关闭数据库链接
    db.close();
});

*/


/*
*修改记录
*操作 mongooseModel.update(conditions, update, options, callback);
*conditions ：查询条件
*update:修改方法 $set : {sex : '男'}
*options
*callback :回调函数
*/
/*var conditions = {username : '奥巴马'};
var update     = {$set : {password : '654321'}};
var options    = {upsert : true};
mongooseModel.update(conditions, update, options, function(error){
    if(error) {
        console.log(error);
    } else {
        console.log('update ok!');
    }
    //关闭数据库链接
    db.close();
});
*/

// -------------------------------------------------------------------------------
/**
 * node.js下mongoose简单操作实例
 * https://cnodejs.org/topic/51ff720b44e76d216afe34d9
 */
/*
// Schema 结构
var mongooseSchema = new mongoose.Schema({
    username : {type : String, default : '匿名用户'},
    title    : {type : String},
    content  : {type : String},
    time     : {type : Date, default: Date.now},
    age      : {type : Number}
});

// 添加 mongoose 实例方法
mongooseSchema.methods.findbyusername = function(username, callback) {
    return this.model('mongoose').find({username: username}, callback);
}

// 添加 mongoose 静态方法，静态方法在Model层就能使用
mongooseSchema.statics.findbytitle = function(title, callback) {
    return this.model('mongoose').find({title: title}, callback);
}

// model
var mongooseModel = db.model('mongoose', mongooseSchema);

// 增加记录 基于 entity 操作
var doc = {username : 'emtity_demo_username', title : 'emtity_demo_title', content : 'emtity_demo_content'};
var mongooseEntity = new mongooseModel(doc);
mongooseEntity.save(function(error) {
    if(error) {
        console.log(error);
    } else {
        console.log('saved OK!');
    }
    // 关闭数据库链接
    db.close();
});

// 增加记录 基于model操作
var doc = {username : 'model_demo_username', title : 'model_demo_title', content : 'model_demo_content'};
mongooseModel.create(doc, function(error){
    if(error) {
        console.log(error);
    } else {
        console.log('save ok');
    }
    // 关闭数据库链接
    db.close();
});

// 修改记录
mongooseModel.update(conditions, update, options, callback);
var conditions = {username : 'model_demo_username'};
var update     = {$set : {age : 27, title : 'model_demo_title_update'}};
var options    = {upsert : true};
mongooseModel.update(conditions, update, options, function(error){
    if(error) {
        console.log(error);
    } else {
        console.log('update ok!');
    }
    //关闭数据库链接
    db.close();
});

// 查询
// 基于实例方法的查询
var mongooseEntity = new mongooseModel({});
mongooseEntity.findbyusername('model_demo_username', function(error, result){
    if(error) {
        console.log(error);
    } else {
        console.log(result);
    }
    //关闭数据库链接
    db.close();
});

// entity find
// var mongooseEntity = new mongooseModel({user: 'user_100'});
// mongooseEntity.findByUserName(function(err, docs) {
//     if (err) return console.log(err);
//     console.log(docs);
//     db.close();
// })

// statics find
//mongooseModel.findByUserName('user_100', function(err, docs) {
//    if (err) return console.log(err);
//    console.log(docs);
//    db.close()
//})

// 基于静态方法的查询
mongooseModel.findbytitle('emtity_demo_title', function(error, result){
    if(error) {
        console.log(error);
    } else {
        console.log(result);
    }
    //关闭数据库链接
    db.close();
});




// mongoose find
var criteria = {title : 'emtity_demo_title'}; // 查询条件
var fields   = {title : 1, content : 1, time : 1}; // 待返回的字段
var options  = {};
mongooseModel.find(criteria, fields, options, function(error, result){
    if(error) {
        console.log(error);
    } else {
        console.log(result);
    }
    //关闭数据库链接
    db.close();
});

// 删除记录
var conditions = {username: 'emtity_demo_username'};
mongooseModel.remove(conditions, function(error){
    if(error) {
        console.log(error);
    } else {
        console.log('delete ok!');
    }

    //关闭数据库链接
    db.close();
});*/