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
var event_1 = require("./event");
var AppService = (function () {
    function AppService() {
    }
    AppService.prototype.setItems = function (id, ti, da, des, pr) {
        var currentEvent = new event_1.MyEvent();
        currentEvent.id = id;
        currentEvent.title = ti;
        currentEvent.date = da;
        currentEvent.description = des;
        currentEvent.priority = pr;
        AppService.allevents.push(currentEvent);
        return true;
    };
    AppService.prototype.updateItems = function (id, ti, da, des, pr) {
        for (var i = 0; i < AppService.allevents.length; i++) {
            if (AppService.allevents[i].id == id) {
                AppService.allevents[i].title = ti;
                AppService.allevents[i].description = des;
                AppService.allevents[i].date = da;
                AppService.allevents[i].priority = pr;
            }
        }
        return true;
    };
    AppService.prototype.getItems = function () {
        return AppService.allevents;
    };
    AppService.allevents = [];
    AppService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map