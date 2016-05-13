(function(_ng, _d){
  'use strict';

  _d('fontScale', function(){
      return{
        link: function(scope, el, attrs){
          scope.$watch(attrs.fontScale, function(newValue){
            el.css('font-size', newValue + '%');
          });
        }
      };
  });
}(angular, angular.module('app').directive));
