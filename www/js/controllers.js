angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('TabletsCtrl', function($scope) {
  $scope.tablets = [
    { title: 'Preface', id: 1 },
    { title: 'Tablet I', id: 2 },
    { title: 'Tablet II', id: 3 },
    { title: 'Tablet III', id: 4 },
    { title: 'Tablet IV', id: 5 },
    { title: 'Tablet V', id: 6 },
    { title: 'Tablet VI', id: 7 },
    { title: 'Prologue', id: 8 }
  ];
})

.controller('TabletCtrl', function($scope, $stateParams) {
});
