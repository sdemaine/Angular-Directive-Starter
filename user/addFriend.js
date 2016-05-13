angular.module('app').directive('addFriend', function(){
  var _controller = ['$scope', 'toaster', function($scope, toaster){
    $scope.save = function(friend){
      var name = friend;
      $scope.saving = true;
      $scope.notifyParent({friend:name});
      $scope.saving = false;
      toaster.pop('success', 'Record saved to database', 'Saved \'' + friend.name + '\' successfully');
      $scope.friend = {};
    };
  }];

  return{
    restrict: 'E',
    controller: _controller,
    scope:{
      notifyParent: '&method'
    },
    templateUrl: 'user/views/addFriend.tmpl.html'
  }
});
