'use strict';

eventsApp.controller('EditTeamController',
    function EditTeamController($scope,teamData,$http) {
        $scope.saveTeam=function(team){
            console.log("posting data ..." + team.name);

            teamData.save(team).
                then(
                    function(response){console.log('success',response)},
                    function(response){console.log('failure',response)}
                );

//            $http.post('http://localhost:8080/api/teams/edit',team).success(function() {
//                $scope.team.name = '';
//                $scope.team.company = '';
//                $scope.setSuccess('The team is saved');
//            }).error(function() {
//                    $scope.setError('Could not save a new Team');
//                });

        }
        $scope.cancelEdit=function(){
            window.alert('team is canceled');
        }
        $scope.setSuccess = function(message) {
            $scope.success = true;
            $scope.successMessage = message;
        };
        $scope.setError = function(message) {
            $scope.error = true;
            $scope.errorMessage = message;
        };
    }
);