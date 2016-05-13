angular.module('app').directive('scorekeeper', function(){
  var _controller = ['$scope', 'scores', function($scope, scores){
    console.log("Logging from scorekeeper");
    console.log(scores[0][0]);
    console.log(scores[1][0]);
  }];

  return {
    restrict: 'E',
    link: function(scope){

      console.log(scope);
    },
    controller: _controller
  };
});
