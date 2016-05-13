angular.module('app').directive('address', function() {
    var _controller = ['$scope', 'toaster', function() {

    }];

return {
    restrict: 'E',
    scope: {
        user: '='
    },
    templateUrl: 'user/views/address.tmpl.html'
};
});
