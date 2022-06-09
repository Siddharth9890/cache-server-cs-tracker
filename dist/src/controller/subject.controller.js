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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_cache_1 = __importDefault(require("node-cache"));
const subject_dal_1 = require("../DataAccessLayer/subject.dal");
const response_utils_1 = require("../utils/response.utils");
const cache = new node_cache_1.default();
const TTL_TIME = 500;
function getAllSubjects(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        if (cache.has("ALL SUBJECTS"))
            return (0, response_utils_1.successResponse)(response, 200, cache.get("ALL SUBJECTS"));
        try {
            const subjects = yield (0, subject_dal_1.getAllSubjectsDal)();
            cache.set("ALL SUBJECTS", subjects, TTL_TIME);
            return (0, response_utils_1.successResponse)(response, 200, subjects);
        }
        catch (error) {
            return (0, response_utils_1.errorResponse)(response, 404, "Not found");
        }
    });
}
exports.default = {
    getAllSubjects,
};
