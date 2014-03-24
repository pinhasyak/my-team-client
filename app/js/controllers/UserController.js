'use strict';

eventsApp.controller('UserController',
    function UserController($scope, userData,$routeParams,$route,$http) {
    	$scope.sortorder = 'name';
        userData.getUser(function(user){
            $scope.user = user;
        });
    }
);
