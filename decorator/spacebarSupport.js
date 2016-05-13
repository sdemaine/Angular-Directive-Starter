(function(_ng, _d) {
    'use strict';

    _d('spacebarSupport', function() {
      return {
          restrict: 'A',
          link: function(scope, el, attrs) {
              $('body').on('keypress', function(evt) {
                  var vidEl = el[0];
                  if (evt.keyCode === 32) {
                      if (vidEl.paused) {
                          vidEl.play();
                      } else {
                          vidEl.pause();
                      }
                  }
              });
              console.log("el");
              console.log(el);
              console.log("attrs");
              console.log(attrs);
          }
      };
    });
}(angular, angular.module('app').directive));
