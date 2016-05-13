angular.module('app').directive('userClickSelect', function(){
  return{
    link: function(scope, el, attrs){
      el.on('click', function(event){
        scope.user.isSelected = !scope.user.isSelected;
        scope.$apply();
      })
    }
  }
})
