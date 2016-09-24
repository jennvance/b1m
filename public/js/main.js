angular.module('app', []);

angular.module('app')
	.controller('wordCountroller', ['$scope', '$http', function($scope, $http){
		$scope.greeting = '';
		$scope.countForm = {};
		$scope.firstname = "Friend";
		$scope.today = new Date();
		// $scope.day = $scope.today.getDate();
		$scope.todaysMonth = $scope.today.getMonth();
		// $scope.year = $scope.today.getFullYear();
		$scope.grandTotal = 0;
		$scope.thisMonthsTotal = 0;
		$scope.monthlyTotals = [0,0,0,0,0,0,0,0,0,0,0,0]
			
		$http.get('/getcounts')
			.then(function(returnData){
				$scope.wordcounts = returnData.data
			})


		$scope.submitCount = function(){
			$http.post('/addcount', $scope.newCount)
				.then(function(returnData){
					 console.log( returnData.data )
					$scope.wordcounts = returnData.data
				})
			$scope.grandTotal += $scope.newCount.numWords;
			$scope.month = $scope.newCount.date.getMonth();
			$scope.monthlyTotals[$scope.month] += $scope.newCount.numWords;
			console.log($scope.monthlyTotals)
			$scope.thisMonthsTotal = $scope.monthlyTotals[$scope.todaysMonth];
			$scope.firstname = $scope.newCount.user;
			$scope.newCount = {};
			$scope.countForm.$setPristine();

		}

		$http.get('/getgoal')
			.then(function(returnData){
				$scope.wordgoal = returnData.data
			})

		$scope.submitGoal = function(){

			$http.post('/addgoal', $scope.newGoal)
				.then(function(returnData){
					console.log(returnData.data.date)
					$scope.wordgoal = returnData.data
					console.log($scope.wordgoal)
					$scope.goalDate = $scope.wordgoal.date;
					$scope.numWords = $scope.wordgoal.numWords;
					//$scope.wordsLeft = calculation...
					//$scope.wordsPerDay = calculation...
					console.log($scope.goalDate)
					console.log($scope.numWords)
					//console.log($scope.wordsPerDay)	



				})



		}

	}])