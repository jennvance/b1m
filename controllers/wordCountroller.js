var wdCtModel = require('../models/wordCount.js');

module.exports = {
	addDailyWdCt: function(req, res){
		var count = new wdCtModel.WordCount(req.body)
		res.send(wdCtModel.dailyCounts)
	},

	getCounts: function(req,res){
		res.send(wdCtModel.dailyCounts)
	},
	addGoal: function(req, res){
		var goal = new wdCtModel.WordGoal(req.body)
		res.send(goal)
	},
	getGoal: function(req, res){
		res.send(wdCtModel.WordGoal)
	}


}






