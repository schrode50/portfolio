(function() {
  angular.module('ModalService', []).factory('modal', [
    ModalService
  ]);

  function ModalService() {
    var modal = {};

    modal.setModal = function(project) {
      modal.currentProject = project;
    };
    return modal;
  }
})();
