angular.module('app').directive('fontScale', function(){
  return{
    link: function(scope, el, attrs){
      scope.$watch(attrs['fontScale'], function(newValue){
        el.css('font-size', newValue + '%');
      })
    }
  }
})
