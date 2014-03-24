describe('TeamDataController', function() {
    beforeEach(module('eventsApp'));

    var scope, ctrl;

    beforeEach(inject(function($controller,$rootScope) {
        console.log("SPARTA!" + $controller);
        scope = $rootScope.$new();
        console.log("SPARTA2!" + $controller);
        ctrl = $controller('TeamDataController', {
            '$scope': scope,
            '$http':{}
        });
        console.log("SPARTA4" + $controller);
    }));

    it('should have a method ', function() {


    });
});