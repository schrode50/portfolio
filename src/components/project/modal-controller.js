(function() {
  angular.module('modalModule')
    .controller('ModalController', [
      '$scope',
      'modal',
      modalController
    ]);

  function modalController($scope, modal){
    $scope.projectInfo = modal.currentProject;

    $scope.closeModal = function() {
      console.log('CLOSE MODAL HAS BEEN HIT');
    };
  }
})();
