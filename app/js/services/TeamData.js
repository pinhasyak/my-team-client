eventsApp.factory('teamData',function($http,$resource,$log,$q){
    var resource = $resource('http://localhost:8080/api/teams/:id',{id:'@id'});
    return{
        getTeams:function(successcb){
            $http({method:'GET',url:'http://localhost:8080/api/teams'}).
                success(function(data,status,headers,config){
                    successcb(data);
                }).
                error(function(data,status,headers,config){
                    $log.error(data,status,headers,config);
                });
        },
        getTeam:function(){
            var deferred = $q.defer();
            resource.
                get({id:1},
                function (team) {
                    deferred.resolve(team)
                },
                function (response) {
                    deferred.reject(response);
                });
            return deferred.promise;
        },
        save:function(team){
            var deferred = $q.defer();
            resource.save(team,
                function (response){deferred.resolve(team);},
                function (response){ deferred.reject(response);}
            );
            return deferred.promise;
        }
    };
});
