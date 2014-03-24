'use strict';

eventsApp.controller('MainMenuController',
    function MainMenuController($scope,$location){
        $scope.editTeam = function(){
            $location.url("/editTeam");

        }
        $scope.showUser = function(){
            $location.url("/user");
        }
        $scope.showAllTeams = function(){
            $location.url("/teams");
        }
    }
);
