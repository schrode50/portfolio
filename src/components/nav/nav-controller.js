(function() {
  angular.module('navModule')
  .controller('NavController', [
    '$scope',
    '$location',
    '$anchorScroll',
    NavBarController
  ]);
  function NavBarController($scope, $location, $anchorScroll) {

    var vm = this;
// THIS IS THE TOGGLE FUNCTIONALITY FOR THE DROPDOWN NAVBAR
    vm.dropDown = false;
    vm.changeClass = function() {
      if(!vm.dropDown) {
        vm.addClass();
      }
      else {
        vm.removeClass();
      }
    };

    vm.addClass = function() {
      var newClass = document.getElementById('navToggle');
      newClass.className += 'in';
      vm.dropDown = true;
    };
    vm.removeClass = function() {
      var newClass = document.getElementById('navToggle').classList;
      newClass.remove('collapsein');
      newClass.add('collapse');
      vm.dropDown = false;
    };

  // THIS WILL BE THE ANCHOR SCROLL FUNCTIONALITY
    vm.scrollTo = function(scrollLocation) {
      console.log('FROM NAV SCROLL TO FUNCTION HAS BEEN HIT WITH : ', scrollLocation);
      $location.hash(scrollLocation);
      $anchorScroll();
    };
  }
})();
