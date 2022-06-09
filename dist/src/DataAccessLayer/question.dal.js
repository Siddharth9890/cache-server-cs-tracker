"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSingleQuestionDal = exports.getAllQuestionsUnderATopicDal = void 0;
const Question_1 = require("../models/Question");
const getAllQuestionsUnderATopicDal = (topicName) => __awaiter(void 0, void 0, void 0, function* () {
    const questions = yield Question_1.Question.findAll({
        where: { under_which_topic: topicName },
        limit: 30,
    });
    if (questions.length === 0)
        throw `Questions not found for ${topicName} `;
    return questions;
});
exports.getAllQuestionsUnderATopicDal = getAllQuestionsUnderATopicDal;
const getSingleQuestionDal = (questionName, topicName) => __awaiter(void 0, void 0, void 0, function* () {
    const questions = yield Question_1.Question.findOne({
        where: { question_name: questionName, under_which_topic: topicName },
    });
    if (!questions)
        throw `${questionName} not found`;
    return questions;
});
exports.getSingleQuestionDal = getSingleQuestionDal;
