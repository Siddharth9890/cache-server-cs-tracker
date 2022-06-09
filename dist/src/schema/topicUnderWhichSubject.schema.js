"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paramsTopicUnderSubjectSchema = void 0;
const zod_1 = require("zod");
exports.paramsTopicUnderSubjectSchema = (0, zod_1.object)({
    params: (0, zod_1.object)({
        subjectName: (0, zod_1.string)({
            required_error: "subjectName is required",
        })
            .min(3, "subjectName should not be less than 3 characters")
            .max(30, "subjectName should be not be greater than 30 characters")
            .nonempty({ message: "subject name can't be empty" })
            .trim()
            .regex(/^[a-zA-Z ]*$/, {
            message: "subject Name should have only A-Z/a-z characters",
        }),
    }),
});
