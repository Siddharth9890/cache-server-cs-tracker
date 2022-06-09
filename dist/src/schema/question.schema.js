"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paramsSingleQuestion = exports.paramsAllQuestionsUnderTopic = void 0;
const zod_1 = require("zod");
exports.paramsAllQuestionsUnderTopic = (0, zod_1.object)({
    params: (0, zod_1.object)({
        topicName: (0, zod_1.string)({
            required_error: "topicName is required",
        })
            .min(3, "topicName should not be less than 3 characters")
            .max(30, "topicName should be not be greater than 30 characters")
            .nonempty({ message: "topic name can't be empty" })
            .trim()
            .regex(/^[a-zA-Z ]*$/, {
            message: "topic Name should have only A-Z/a-z characters",
        }),
    }),
});
exports.paramsSingleQuestion = (0, zod_1.object)({
    params: (0, zod_1.object)({
        topicName: (0, zod_1.string)({
            required_error: "topicName is required",
        })
            .min(3, "topicName should not be less than 3 characters")
            .max(30, "topicName should be not be greater than 30 characters")
            .nonempty({ message: "topic name can't be empty" })
            .trim()
            .regex(/^[a-zA-Z ]*$/, {
            message: "topic Name should have only A-Z/a-z characters",
        }),
        questionName: (0, zod_1.string)({
            required_error: "questionName is required",
        })
            .min(3, "questionName should not be less than 3 characters")
            .max(30, "questionName should be not be greater than 30 characters")
            .nonempty({ message: "question name can't be empty" })
            .trim()
            .regex(/^[a-zA-Z ]*$/, {
            message: "question Name should have only A-Z/a-z characters",
        }),
    }),
});
