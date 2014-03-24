'use strict';

eventsApp.controller('SampleDirectiveController',
    function SampleDirectiveController($scope, $timeout) {

        var promise = $timeout(function() {
            $scope.name = "John Doe";
        }, 3000);

        $scope.cancel = function() {
            $timeout.cancel(promise);
        };
    }
);
