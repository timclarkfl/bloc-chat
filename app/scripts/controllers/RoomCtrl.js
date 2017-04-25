(function() {
    function RoomCtrl(Room, $scope) {
        this.rooms = Room.all;
        this.addRoom = function(){
            Room.addRoom({foo: "bar"});
        };
    }

	angular
		.module("blocChat")
		.controller("RoomCtrl", ["$scope", "Room", RoomCtrl]);
})();
