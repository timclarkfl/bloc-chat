(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });

            $stateProvider
                    .state('home', {
     				             url: '/',
								 controller: 'RoomCtrl as room',
     				             templateUrl: '/templates/room.html'
     		                });

        }
    angular
        .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap'])
        .config(config);
})();
