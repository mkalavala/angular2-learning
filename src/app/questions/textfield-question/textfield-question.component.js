"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var text_question_model_1 = require("../../shared/text-question-model");
var TextfieldQuestionComponent = (function () {
    function TextfieldQuestionComponent(theAddQuestionsService) {
        this.theAddQuestionsService = theAddQuestionsService;
        this.isDisplayTabOn = true;
        this.isValidationTabOn = false;
        this.onClose = new core_1.EventEmitter();
        this.addQuestionsService = theAddQuestionsService;
        this.textQuestionModel = new text_question_model_1.TextQuestionModel("");
    }
    TextfieldQuestionComponent.prototype.ngOnInit = function () {
    };
    TextfieldQuestionComponent.prototype.onTextFieldTabClick = function (tabName) {
        if (tabName === 'Display') {
            this.isDisplayTabOn = true;
            this.isValidationTabOn = false;
        }
        else if (tabName === 'Validations') {
            this.isValidationTabOn = true;
            this.isDisplayTabOn = false;
        }
    };
    TextfieldQuestionComponent.prototype.onTextFieldSave = function () {
        this.addQuestionsService.addTextQuestionModel(this.textQuestionModel);
        this.onClose.emit();
    };
    __decorate([
        core_1.Input()
    ], TextfieldQuestionComponent.prototype, "displayTextFieldDialog");
    __decorate([
        core_1.Output()
    ], TextfieldQuestionComponent.prototype, "onClose");
    TextfieldQuestionComponent = __decorate([
        core_1.Component({
            selector: 'app-textfield-question',
            templateUrl: 'app/questions/textfield-question/textfield-question.component.html',
            styleUrls: ['app/questions/textfield-question/textfield-question.component.css']
        })
    ], TextfieldQuestionComponent);
    return TextfieldQuestionComponent;
}());
exports.TextfieldQuestionComponent = TextfieldQuestionComponent;
//# sourceMappingURL=textfield-question.component.js.map