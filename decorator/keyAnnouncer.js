angular.module('app').directive('keyAnnouncer', ['toaster', function(toaster){
  return{
    restrict: 'A',
    link: function(scope, el, attrs){
      $('body').on('keypress', function(evt){
        toaster.pop('success', 'Key pressed', evt.keyCode);
        console.log(evt.keyCode);
      });
    }
  }
}]);
