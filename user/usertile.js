angular.module('app').directive('userTile', function(){
  return{
    restrict: 'E',
    scope: {
      user: '='
    },
    templateUrl: 'user/views/userTile.tmpl.html'
  }
})
