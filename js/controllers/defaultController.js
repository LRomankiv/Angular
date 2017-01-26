animalsApp.controller('defaultController', function defaultController($scope){
	
  $scope.url = "views/tamplates/menu.html";

	$scope.openMenu = function(){
		$('.main-menu_block').addClass('active');
	}

  $scope.closeMenu = function(){
    $('.main-menu_block').removeClass('active');
  }

  $scope.setActive = function(data){
    var data = data;
    $('.menu-item').removeClass('active');
    $('.'+data).addClass('active');
  }

  $scope.modal = false;

  $scope.showModal = function(){
    $scope.modal = true;
  }

  $scope.hideModal = function(btn){
    var btn = btn;
    if(btn == 'no'){
      console.log('All is OK ;)');
    }
    $scope.modal = false;
  }
});