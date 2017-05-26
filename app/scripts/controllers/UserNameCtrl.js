(function () {
    function UserNameCtrl($uibModalInstance, $cookies) {
        this.submit = function () {
            $cookies.put('username', this.username);
            $uibModalInstance.dismiss('Submit Username');
            console.log($cookies.get('username')); // confirms username was saved as cookie
        };
    }

    angular /* global angular */
        .module('blocChat')
        .controller('UserNameCtrl', ['$uibModalInstance', '$cookies', UserNameCtrl]);
})();