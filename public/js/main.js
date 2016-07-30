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

			$scope.months = {
				0: [],
				1: [],
				2: [],
				3: [],
				4: [],
				5: [],
				6: [],
				7: [],
				8: [],
				9: [],
				10: [],
				11: []
			}


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



			if($scope.month in $scope.months){
				$scope.months[$scope.month].push($scope.newCount);
				console.log($scope.months)

			}





			$scope.firstname = $scope.newCount.user;
			$scope.newCount = {};
			$scope.countForm.$setPristine();

		}



	}])