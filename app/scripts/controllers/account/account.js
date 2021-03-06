'use strict';

angular.module('webwalletApp')
  .controller('AccountCtrl', function (
      trezorService, $scope, $location, $routeParams, config) {

    $scope.account = $scope.device.account($routeParams.accountId);
    if (!$scope.account) {
      $location.path('/');
      return;
    }

    $scope.blockExplorer = config.blockExplorers[config.coin];

    $scope.hideAccount = function () {
      $scope.account.unsubscribe();
      $scope.device.hideAccount($scope.account);
      $location.path('/device/' + $scope.device.id + '/account/'
        + ($scope.device.accounts.length - 1));
    };

  });
