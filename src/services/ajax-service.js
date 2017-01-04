(function() {
  angular.module('AjaxService', []).factory('ajax', [
    '$http',
    '$window',
    AjaxService
  ]);

  function AjaxService($http, $window) {
    var serviceObj = {};

    serviceObj.getData = function() {
      $http.get('../../data.json')
      .then(function successCallback(res) {
        serviceObj.projectData = res.data;
        return res.data;
      });
    };
    return serviceObj;
  }
});
