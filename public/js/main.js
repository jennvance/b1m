angular.module('app', []);

angular.module('app')
	.controller('wordCountroller', ['$scope', '$http', function($scope, $http){
		$scope.greeting = '';
		$scope.countForm = {};
		$scope.firstname = "Friend";
		// $scope.today = new Date();
		// $scope.day = $scope.today.getDate();
		// $scope.month = $scope.today.getMonth() + 1;
		// $scope.year = $scope.today.getFullYear();
		$scope.total = 0;


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
			$scope.total += $scope.newCount.numWords

			$scope.firstname = $scope.newCount.user;
			$scope.newCount = {};
			$scope.countForm.$setPristine();

		}



	}])