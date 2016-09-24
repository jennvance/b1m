var dailyCounts = [];

var WordCount = function(wdCtData){
	this.user = wdCtData.user;
	this.numWords = wdCtData.numWords;
	this.date = wdCtData.date;
	dailyCounts.push(this);
}

var WordGoal = function(goalData){
	this.date = goalData.date;
	this.numWords = goalData.numWords;
	//this.wordsLeft = goalData.wordsLeft;
	//this.wordsPerDay = goalData.wordsPerDay;
}

module.exports = {
	dailyCounts: dailyCounts,
	WordCount: WordCount,
	WordGoal: WordGoal
}