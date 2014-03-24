'use strict';

eventsApp.factory('eventData', function($resource, $q,$http) {
    var resource = $resource('/data/event/:id', {id:'@id'});

    return {
        getEvent: function(eventId) {
//            var deferred = $q.defer();
//            console.log('eventData.getEvent()');
//            resource
//                .get(
//                    {id:eventId},
//                    function(event) {
//                        deferred.resolve(event);
//                    },
//                    function(response) {
//                        deferred.reject(response);
//                    }
//                );
//            var promise = deferred.promise;
//            console.log(promise);
//            return promise;
            return $resource('/data/event/:id', {id:'@id'}).get({id:eventId});
        },
        save: function(event) {
            var deferred = $q.defer();
            event.id = 999; // we just fake the event id, it'll be saved to disk
            resource.save(
                event,
                function(response) { deferred.resolve(response); },
                function(response) { deferred.reject(response); }
            );
            console.log('save() returning promise');
            return deferred.promise;
        },
        getAllEvents:function(){
           return resource.query();
        }
	}
});