angular.module('app').directive('userInfoCard', function() {
    var _controller = ['$scope', 'toaster', function($scope, toaster) {
        $scope.selectedFriend = {};

        $scope.collapse = function() {
            $scope.initialCollapsed = !$scope.initialCollapsed;
        };

        $scope.knightMe = function(user) {
            user.rank = "knight";
            toaster.pop('success', "Congratulations..", "You have been knighted.");
        };

        $scope.showInfoMessage = function(message) {
            toaster.pop('success', message, "Custom message..");
        };

        $scope.showWarningMessage = function(message) {
            toaster.pop('warning', message, "Custom message..");
        };

        $scope.removeFriend = function(friend) {
            var idx = $scope.user.friends.indexOf(friend);
            if (idx > -1) {
                $scope.user.friends.splice(idx, 1);
            }
        };

        $scope.addFriend = function(friend) {
            $scope.user.friends.push(friend.name);
        }

        $scope.nextState = function(user) {
            if (user.state < 2) {
                user.state += 1;
            } else {
                user.state = 0;
            }
        }
    }];

    return {
        templateUrl: "user/views/userInfoCard.tmpl.html",
        restrict: "E",
        scope: {
            user: '=',
            initialCollapsed: '@collapsed',
        },
        link: function(scope, el, attrs) {
            scope.nextLevel = function() {
                scope.user.level++;
                scope.user.level = scope.user.level % 3;
                var color = 'white';
                switch (scope.user.level) {
                    case 0:
                        color = 'white';
                        break;
                    case 1:
                        color = '#dae27d';
                        break;
                    case 2:
                        color = 'green';
                        break;

                    default:
                        color = 'white';
                }

                el.find('.panel-body').css('background-color', color);
            };
            scope.nextLevel()
        },
        controller: _controller
    }
});
