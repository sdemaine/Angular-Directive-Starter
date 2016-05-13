angular.module('app').directive('myClick', function($parse){
  return{
    restrict: 'A',
    link: function(scope, el, attrs){
      var fn = $parse(attrs['myClick']);
      el.on('click', function(event){
        scope.$apply(function(){
          fn(scope);
        })
      })
    }
  }
})
