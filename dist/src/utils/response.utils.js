"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorResponse = exports.successResponse = void 0;
const successResponse = (response, statsCode, body) => {
    return response.status(statsCode).send({
        message: "success",
        body,
    });
};
exports.successResponse = successResponse;
const errorResponse = (response, statsCode, error) => {
    return response.status(statsCode).send({
        message: "failed",
        error,
    });
};
exports.errorResponse = errorResponse;
