"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const subject_controller_1 = __importDefault(require("../controller/subject.controller"));
const router = express_1.default.Router();
// get all subjects
// localhost:5000/api/v2/subject/
router.get("/", subject_controller_1.default.getAllSubjects);
exports.default = router;
