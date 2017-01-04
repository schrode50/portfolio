'use strict';

var angular = require('angular');
require(__dirname + '/../services/ajax-service');
require(__dirname + '/../services/modal-service');
var projectData = require(__dirname + '/../data.js');

(function() {
  var app = angular.module('App', [
    'ngRoute',
    'ngAnimate',
    'ngTouch',
    'navModule',
    'modalModule',
    'ui.bootstrap',
    'AjaxService',
    'ModalService'
  ]);

  app.controller('mainController', [
    '$scope',
    '$location',
    '$anchorScroll',
    '$uibModal',
    'ajax',
    'modal',
    MainController
  ]);

  function MainController($scope, $location, $anchorScroll, $uibModal, ajax, modal) {
    var vm = this;

    //icons
    var angularIcon = require('./img/icons/');
    var nodeIcon = require('./img/icons/');
    var jsIcon = require('./img/icons/');
    var jqueryIcon = require('./img/icons/');
    var gitIcon = require('./img/icons/');
    var webpackIcon = require('./img/icons/');
    var awsIcon = require('./img/icons/');
    var gulpIcon = require('./img/icons/');
    var mochaIcon = require('./img/icons/');
    var mongoIcon = require('./img/icons/');
    var bootstrapIcon = require('./img/icons/');

    $scope.icons = [angularIcon, nodeIcon, jsIcon, jqueryIcon, gitIcon, webpackIcon, awsIcon, gulpIcon, mochaIcon, mongoIcon, bootstrapIcon];

    //social
    var linkedIn = require('./img/icons/');
    var gitHub = require('./img/icons');

    $scope.myPic = require('./img/');
    $scope.social[linkedIn, gitHub];

    $scope.showProject = function(project) {
      modal.setModal(project);
      setModal();
    };

    function setModal() {
      $uibModal.open({
        template: require(__dirname + '/../components/project/modal.html'),
        controller: 'ModalController'
      });
    }

    $scope.projectData = projectData[0];
    $scope.scrollTo = function(scrollLocation) {
      $location.hash(scrollLocation);
      $anchorScroll();
    };
  }
});
