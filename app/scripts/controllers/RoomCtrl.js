(function(){
	function RoomCtrl($scope, Room){
		$scope.chatRooms = Room.all;
	}

	angular
		.module("blocChat")
		.controller("RoomCtrl", ["$scope", "Room", RoomCtrl]);
})();
