(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppController = exports.AppController = function AppController($scope) {
    var _this = this;

    _classCallCheck(this, AppController);

    this.loading = true;

    $scope.$on("users:loaded", function () {
        return _this.loading = false;
    });
};

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DataService = exports.DataService = function () {
    function DataService($http) {
        _classCallCheck(this, DataService);

        this.$http = $http;
    }

    _createClass(DataService, [{
        key: 'getUsers',
        value: function getUsers() {
            return this.$http.get('https://api.github.com/users');
        }
    }]);

    return DataService;
}();

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UsersController = exports.UsersController = function UsersController(dataService, $scope, $rootScope) {
    var _this = this;

    _classCallCheck(this, UsersController);

    this.dataService = dataService;
    this.$scope = $scope;
    this.$rootScope = $rootScope;

    this.users = [];

    this.dataService.getUsers().then(function (resp) {
        _this.users = resp.data;
        _this.$scope.$emit('users:loaded');

        console.table(_this.$rootScope);
    });
};

},{}],4:[function(require,module,exports){
"use strict";

var _appController = require("./appController.js");

var _usersController = require("./usersController.js");

var _dataService = require("./dataService.js");

angular.module('app', []).controller('AppController', _appController.AppController).controller('UsersController', _usersController.UsersController).service('dataService', _dataService.DataService);

},{"./appController.js":1,"./dataService.js":2,"./usersController.js":3}]},{},[4]);
