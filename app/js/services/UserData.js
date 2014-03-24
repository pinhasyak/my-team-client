'use strict';

eventsApp.factory('userData', function($http,$log) {
    return {
        getUser: function(successcb){
            $http({method:'GET',url:'/data/users/1.json'}).
                success(function(data,status,headers,config){
                    $log.info(data,status,headers(),config);
                    successcb(data);
                }).
                error(function(data,status,headers,config){
                    $log.warn(data,status,headers(),config);
                });
        }
    };

});