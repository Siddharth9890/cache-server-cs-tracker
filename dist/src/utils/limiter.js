"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.limiter = void 0;
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
exports.limiter = (0, express_rate_limit_1.default)({
    max: 30,
    windowMs: 1 * 60 * 1000,
    standardHeaders: true,
    legacyHeaders: false,
    handler: function (req, res, next) {
        return res.status(429).json({
            error: "You sent too many requests. Please wait for a minute then try again",
        });
    },
});
