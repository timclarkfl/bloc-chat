(function() {
    function RoomCtrl($scope, Room) {
        this.rooms = Room.all;
        this.addRoom = function(){
            Room.addRoom({name: "bar"});
        };
    }

	angular
		.module("blocChat")
		.controller("RoomCtrl", ["$scope", "Room", RoomCtrl]);
})();
