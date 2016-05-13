(function _userTile(_ng, _d){
  'use strict';

  _d('userTile', function(){
    return{
      restrict: 'E',
      scope: {
        user: '='
      },
      templateUrl: 'user/views/userTile.tmpl.html'
    };
  });
}(angular, angular.module('app').directive));
