(function(_ng, _d) {
    'use strict';

    _d('dollars', function($parse, toaster) {
        return {
            restrict: 'A',
            link: function(scope, el, attrs) {
                var fn = $parse(attrs.alertUser);
                console.log(el);
                el.on('keyup', function(event) {
                    if (event.keyCode !== 36 && event.keyCode !== 16) {
                        event.currentTarget.value = event.currentTarget.value.replace('s', '$');
                        event.currentTarget.value = event.currentTarget.value.replace('S', '$');
                        // toaster.pop('success', 'Message', event.currentTarget.value);
                    }
                });
            }
        };
    });
}(angular, angular.module('app').directive));
