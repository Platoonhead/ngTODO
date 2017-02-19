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
var router_1 = require("@angular/router");
var createTaskComponent = (function () {
    function createTaskComponent(router, route, service) {
        this.router = router;
        this.route = route;
        this.service = service;
        this.id = -1;
        this.isSucess = false;
        this.isUpdated = false;
        this.btnName = "CreateTask";
        this.isSave = false;
    }
    createTaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (paraEvent) {
            if (paraEvent.id >= 0) {
                if (paraEvent) {
                    _this.id = paraEvent.id;
                    var toEditItem = _this.service.getItems().filter(function (x) { return x.id == _this.id; });
                    _this.title = toEditItem[0].title;
                    _this.date = toEditItem[0].date;
                    _this.des = toEditItem[0].description;
                    _this.pri = toEditItem[0].priority;
                    _this.btnName = "Save";
                    _this.isSave = true;
                }
            }
        });
    };
    createTaskComponent.prototype.createTask = function (form) {
        if (this.isSave == true) {
            if (this.service.updateItems(this.id, this.title, this.date, this.des, this.pri)) {
                this.isUpdated = true;
            }
            else {
                this.isUpdated = false;
            }
            this.btnName = "CreateTask";
            this.isSave = false;
        }
        else {
            this.id++;
            this.title = form.title;
            this.date = form.date;
            this.des = form.description;
            this.pri = form.priority;
            if (this.service.setItems(this.id, this.title, this.date, this.des, this.pri)) {
                this.isSucess = true;
            }
            else {
                this.isSucess = false;
            }
        }
        this.resetFields();
    };
    createTaskComponent.prototype.resetFields = function () {
        this.title = "";
        this.date = null;
        this.des = "";
        this.pri = null;
    };
    createTaskComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './app/createTask/createTask.component.html',
            styleUrls: ['./app/createTask/createTask.component.css'],
            providers: [app_service_1.AppService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, app_service_1.AppService])
    ], createTaskComponent);
    return createTaskComponent;
}());
exports.createTaskComponent = createTaskComponent;
//# sourceMappingURL=createTask.component.js.map