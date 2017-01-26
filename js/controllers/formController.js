animalsApp.controller('formController', function formController($scope){
	$scope.sendMessage = function (messageDetails) {
    $scope.sended = messageDetails;
  }
  $scope.sended = "Ready";

  $scope.emailPattern = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;

  $scope.showMessage = false;

  $scope.setShowMessage = function(){
    $scope.showMessage = true;
  }
});