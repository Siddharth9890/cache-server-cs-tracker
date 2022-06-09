"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const question_controller_1 = __importDefault(require("../controller/question.controller"));
const validateResources_1 = __importDefault(require("../middleware/validateResources"));
const question_schema_1 = require("../schema/question.schema");
const router = express_1.default.Router();
// get all questions under a topic
// localhost:5000/api/v2/question/:topicName
router.get("/:topicName", (0, validateResources_1.default)(question_schema_1.paramsAllQuestionsUnderTopic), question_controller_1.default.getAllQuestionsUnderATopic);
// get one question by name
// localhost:5000/api/v2/question/:topicName/:questionName
router.get("/:topicName/:questionName", (0, validateResources_1.default)(question_schema_1.paramsSingleQuestion), question_controller_1.default.getSingleQuestion);
exports.default = router;
