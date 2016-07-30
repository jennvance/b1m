var wdCtModel = require('../models/wordCount.js');

module.exports = {
	addDailyWdCt: function(req, res){
		var count = new wdCtModel.WordCount(req.body)
		res.send(wdCtModel.dailyCounts)
	},

	getCounts: function(req,res){
		res.send(wdCtModel.dailyCounts)
	}


}






