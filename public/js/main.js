angular.module('app', []);

angular.module('app')
	.controller('wordCountroller', ['$scope', '$http', function($scope, $http){
		

		$scope.greeting = 'Enter Word Count';
		$scope.today = new Date();
		$scope.day = $scope.today.getDate();
		$scope.month = $scope.today.getMonth() + 1;
		$scope.year = $scope.today.getFullYear();

		$scope.inputdate = "";

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


		}



	}])