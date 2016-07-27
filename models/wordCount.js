var dailyCounts = [];

var WordCount = function(wdCtData){
	this.user = wdCtData.user;
	this.numWords = wdCtData.numWords;
	this.date = wdCtData.date;
	dailyCounts.push(this);
}

module.exports = {
	dailyCounts: dailyCounts,
	WordCount: WordCount
}