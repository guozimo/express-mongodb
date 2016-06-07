var mongoose = require("mongoose");	//引入mongoose模块

var Schema = mongoose.Schema;	//	创建模型
var articleScheMa = new Schema({
    type    :  String,
    author  :  String,
    title   :  String,
    introduction  : String,
    imgsrc  :  String,
    content :  String,
    meta    : {
	    createAt: { type: Date, default: Date.now()},
		updateAt: { type: Date, default: Date.now()}
    }
});	//	定义了一个新的模型，但是此模式还未和users集合有关联



// var ObjectId = mongoose.Schema.Types.ObjectId
/*articleScheMa.pre('save', function(next) {
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt = Date.now()
  }
  else {
    this.meta.updateAt = Date.now()
  }

  next()
})

articleScheMa.statics = {
  fetch: function(cb) {
    return this
      .find({})
      .sort('meta.updateAt')
      .exec(cb)
  },
  findById: function(id, cb) {
    return this
      .findOne({_id: id})
      .exec(cb)
  }
}*/

exports.article = mongoose.model('article', articleScheMa); //	与users集合关联