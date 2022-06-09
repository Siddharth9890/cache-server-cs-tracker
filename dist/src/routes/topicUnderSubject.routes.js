"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const topicUnderSubject_controller_1 = __importDefault(require("../controller/topicUnderSubject.controller"));
const validateResources_1 = __importDefault(require("../middleware/validateResources"));
const topicUnderWhichSubject_schema_1 = require("../schema/topicUnderWhichSubject.schema");
const router = express_1.default.Router();
// get all topics by subject name
// localhost:5000/api/v2/topic/:topicName
router.get("/:subjectName", (0, validateResources_1.default)(topicUnderWhichSubject_schema_1.paramsTopicUnderSubjectSchema), topicUnderSubject_controller_1.default.getAllTopicsUnderSubject);
// get all topics under a subject this endpoint is just used for get static props
// localhost:5000/api/v2/topic/:topicName
router.get("/", topicUnderSubject_controller_1.default.getAll);
exports.default = router;
