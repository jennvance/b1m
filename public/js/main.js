angular.module('app', []);

angular.module('app')
	.controller('wordCountroller', ['$scope', '$http', function($scope, $http){
		$scope.greeting = '';
		$scope.countForm = {};
		$scope.firstname = "Friend";
		$scope.today = new Date();
		// $scope.day = $scope.today.getDate();
		$scope.currentMonth = $scope.today.getMonth();
		// $scope.year = $scope.today.getFullYear();
		$scope.total = 0;

			$scope.months = [0,0,0,0,0,0,0,0,0,0,0,0]
			


		$http.get('/getcounts')
			.then(function(returnData){
				$scope.wordcounts = returnData.data
			})


		$scope.submitCount = function(){
			$http.post('/addcount', $scope.newCount)
				.then(function(returnData){
					// console.log( returnData.data )
					$scope.wordcounts = returnData.data
				})
			$scope.total += $scope.newCount.numWords;

			$scope.month = $scope.newCount.date.getMonth();


				$scope.months[$scope.month] += $scope.newCount.numWords;
				console.log($scope.months)

				$scope.thisMonthsTotal = $scope.months[$scope.currentMonth];




			$scope.firstname = $scope.newCount.user;
			$scope.newCount = {};
			$scope.countForm.$setPristine();

		}

	}])