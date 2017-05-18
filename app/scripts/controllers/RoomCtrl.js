(function () {
    function RoomCtrl($uibModal, Room, Message) {
        this.roomData = Room;

        this.open = function () {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/newroom.html',
                controller: 'NewRoomCtrl',
                controllerAs: 'newRoom'
            });
        };

        this.changeRoom = function (roomName) {
            this.roomName = roomName;
        };

        this.changeMessages = function (roomId) {
            this.roomMessages = Message.getByRoomId(roomId);
        };
    }

    angular /* global angular */
        .module('blocChat')
        .controller('RoomCtrl', ['$uibModal', 'Room', 'Message', RoomCtrl]);
})();
