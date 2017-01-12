(function () {
  angular.module('navModule')
    .directive('navDirective', navBar);

  function navBar() {
    return {
      restrict: 'E',
      controller: 'NavController',
      controllerAs: 'navCtrl',
      template: require('./nav-view.html')
    };
  }
})();
