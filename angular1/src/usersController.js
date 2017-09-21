
define(function (require) {

  UsersController.$inject = ['dataService', '$scope'];

  function UsersController(dataService, $scope) {
    var vm = this;
    vm.loading = true;
    vm.users = [];
    
    dataService
        .getUsers()
        .then(resp => {
            this.users = resp.data;
            
            //trigger event
            $scope.$emit('users:loaded');

        });    
  }

  return UsersController;

});
