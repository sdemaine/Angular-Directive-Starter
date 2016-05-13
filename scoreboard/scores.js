angular.module('app').factory('scores', function() {
    var _scores = [
        baseballScores = [{
            homeTeamName: 'redsox',
            homeScore: 9,
            awayName: 'yankees',
            awayScore: 1
        }],
        footballScores = [{
            homeTeamName: 'patriots',
            homeScore: 49,
            awayName: 'giants',
            awayScore: 3
        }],
    ];

    return _scores;
});
