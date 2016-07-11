define(function (require) {

  AppController.$inject = ['$scope']; 

  function AppController($scope) {
    var vm = this;

    vm.loading = true;

    //handle event from usersController
    $scope.$on("users:loaded", () => this.loading = false);

  }

  return AppController;

});
