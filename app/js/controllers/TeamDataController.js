'use strict';

eventsApp.controller('TeamDataController',
    function TeamDataController($scope, $http, teamData, $log) {
        teamData.getTeams(function (teams) {
            $scope.teams = teams.content;
        });

//        $scope.teams = teamData.getTeams();
//        $scope.teamPr = teamData.getTeamPr()


        teamData.getTeam().then(
            function (data) {
                $scope.team = data;
            },
            function (status) {
                $log.error(status)
            });


        $scope.showSelectedTeam = function (selectedTem) {
            $scope.selectedTeam = selectedTem;
        }
    }
)