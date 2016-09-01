"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var NumericValidator = (function () {
    function NumericValidator() {
    }
    NumericValidator.prototype.validate = function (c) {
        var fieldValue = c.value;
        console.log(c);
        if (isNaN(fieldValue)) {
            return {
                'isANumber': false
            };
        }
        return null;
    };
    NumericValidator = __decorate([
        core_1.Directive({
            selector: '[validateNumeric][ngModel],[validateNumeric][formControl]',
            providers: [
                {
                    provide: forms_1.NG_VALIDATORS, useExisting: core_1.forwardRef(function () { return NumericValidator; }), multi: true
                }
            ]
        })
    ], NumericValidator);
    return NumericValidator;
}());
exports.NumericValidator = NumericValidator;
//# sourceMappingURL=numeric-validator.js.map