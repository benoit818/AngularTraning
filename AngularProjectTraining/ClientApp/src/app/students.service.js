"use strict";
// student.service.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var StudentService = /** @class */ (function () {
    function StudentService(http) {
        this.http = http;
        this.students = [{
                id: 1,
                name: 'Krunal',
                EnrollmentNumber: 110470116021,
                College: 'VVP Engineering College',
                University: 'GTU'
            },
            {
                id: 2,
                name: 'Rushabh',
                EnrollmentNumber: 110470116023,
                College: 'VVP Engineering College',
                University: 'GTU'
            },
            {
                id: 3,
                name: 'Ankit',
                EnrollmentNumber: 110470116022,
                College: 'VVP Engineering College',
                University: 'GTU'
            }];
    }
    StudentService.prototype.getStudents = function () {
        var _this = this;
        var studentsObservable = new rxjs_1.Observable(function (observer) {
            setTimeout(function () {
                observer.next(_this.students);
            }, 1000);
        });
        return studentsObservable;
    };
    StudentService.prototype.getstudentsFromApi = function () {
        return this.http.get('http://localhost:3000/student/').pipe(operators_1.map(function (result) { return result.data; }));
    };
    StudentService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], StudentService);
    return StudentService;
}());
exports.StudentService = StudentService;
//# sourceMappingURL=students.service.js.map