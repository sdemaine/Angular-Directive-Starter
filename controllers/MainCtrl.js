(function(_ng, _c) {
    'use strict';

    _c('MainCtrl', function($scope, toaster) {
        $scope.messages = [];

        $scope.data = {
            message: 'I have not been clicked'
        };

        $scope.handleClick = function(p) {
            p.message = 'I have been clicked.';
        };


        $scope.handlePause = function(e) {
            $scope.messages.push({
                text: 'video paused!'
            });
        };

        $scope.alertUser = function(e) {
            console.log(e);
            toaster.pop('success', 'Message', e);
        };

        $scope.user1 = {
            name: 'Stephen Demaine',
            occupation: 'Software Engineer',
            age: 35,
            gender: 'M',
            address: {
                street: '48 Pine Hill Road',
                city: 'Madison',
                zipcode: '03849'
            },
            isSelected: false,
            userLevel: 0
        };

        $scope.users = [{
            name: 'Luke Skywalker',
            address: {
                street: 'PO Box 123',
                city: 'Secret Rebel Base',
                planet: 'Yavin 4'
            },
            friends: [
                'Han',
                'Leia',
                'Chewbacca'
            ],
            state: 0,
            level: 0,
        }, {
            name: 'Stephen Demaine',
            address: {
                street: '48 Pine Hill Road',
                city: 'Madison',
                planet: 'Earth'
            },
            friends: [
                'Han',
                'Leia',
                'Chewbacca'
            ],
            state: 0,
            level: 2,
        }];
    });
}(angular, angular.module('app').controller));
