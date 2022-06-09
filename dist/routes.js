"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const subject_routes_1 = __importDefault(require("./src/routes/subject.routes"));
const topicUnderSubject_routes_1 = __importDefault(require("./src/routes/topicUnderSubject.routes"));
const question_routes_1 = __importDefault(require("./src/routes/question.routes"));
function routes(app) {
    app.use("/api/v2/subject", subject_routes_1.default);
    app.use("/api/v2/topic", topicUnderSubject_routes_1.default);
    app.use("/api/v2/question", question_routes_1.default);
}
exports.default = routes;
