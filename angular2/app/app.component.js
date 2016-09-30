"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var users_service_1 = require('../app/users/users.service');
var AppComponent = (function () {
    function AppComponent(usersService) {
        this.usersService = usersService;
        this.isLoading = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usersService
            .getUsers()
            .subscribe(function (users) {
            _this.users = users;
            _this.isLoading = false;
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <my-header></my-header>\n  <my-loader *ngIf=\"isLoading\"></my-loader>\n  <my-users *ngIf=\"!isLoading\" [users]=\"users\"></my-users>  \n  ",
            providers: [
                users_service_1.UsersService
            ]
        }), 
        __metadata('design:paramtypes', [users_service_1.UsersService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map