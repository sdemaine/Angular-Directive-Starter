(function(_ng, _d) {
    'use strict';

    _d('address', function() {
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
}(angular, angular.module('app').directive));
