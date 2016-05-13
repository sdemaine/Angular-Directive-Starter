(function(_ng, _d){
  'use strict';

  return{
    link: function(scope, el, attrs){
      el.on('click', function(event){
        scope.user.isSelected = !scope.user.isSelected;
        scope.$apply();
      });
    }
  };
}(angular, angular.module('app').directive));
