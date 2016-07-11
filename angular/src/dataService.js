define(function (require) {

    DataService.$inject = ['$http']

    function DataService($http) {
        var api = {
            getUsers: getUsers
        };

        return api;

        function getUsers() {
            return $http.get('https://api.github.com/users');
        }

    };

    return DataService;

});
