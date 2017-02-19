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
var core_1 = require("@angular/core");
var app_service_1 = require("../app.service");
var _1 = require("@angular/router/");
var showComponent = (function () {
    function showComponent(service, router) {
        this.service = service;
        this.router = router;
        this.storedData = service.getItems();
    }
    showComponent.prototype.ngOnInit = function () {
    };
    showComponent.prototype.editTask = function (event) {
        this.router.navigate(['createTask/' + event.id]);
    };
    showComponent.prototype.taskDone = function (event) {
        for (var i = 0; i < this.service.getItems().length; i++) {
            if (event.id == this.service.getItems()[i].id) {
                this.service.getItems()[i].id = -1;
            }
        }
    };
    showComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './app/show/show.component.html',
            styleUrls: ['./app/show/show.component.css'],
            providers: [app_service_1.AppService]
        }), 
        __metadata('design:paramtypes', [app_service_1.AppService, _1.Router])
    ], showComponent);
    return showComponent;
}());
exports.showComponent = showComponent;
//# sourceMappingURL=show.component.js.map