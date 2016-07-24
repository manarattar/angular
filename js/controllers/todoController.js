function todoController($scope) {
	$scope.myInput = "";
    $scope.toDoList = [];

    $scope.addItem = function() {
    	if($scope.myInput) {
    		$scope.toDoList.push($scope.myInput);
    		$scope.myInput = "";
    	}
    }

    $scope.clearAll = function() {
    	$scope.toDoList = [];
    }

    $scope.clearLast = function() {
    	$scope.toDoList.pop();
    }

}