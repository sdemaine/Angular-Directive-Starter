(function(_ng, _d){
  'use strict';

  _d('removeFriend', function() {
      var _controller = ['$scope', 'toaster', function($scope, toaster) {
          $scope.startRemove = function(friend) {
              $scope.removing = true;
          };
          
          $scope.cancelRemove = function() {
              $scope.removing = false;
          };

          $scope.confirmRemove = function(){
            $scope.notifyParent();
            $scope.removing = false;
          };

      }];

      return {
          restrict: 'E',
          controller: _controller,
          scope:{
            notifyParent: '&method'
          },
          templateUrl: 'user/views/removeFriend.tmpl.html'
      };
  });
}(angular, angular.module('app').directive));
