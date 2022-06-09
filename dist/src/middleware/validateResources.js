"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validate = (schema) => (request, response, next) => {
    try {
        schema.parse({
            body: request.body,
            params: request.params,
            query: request.query,
        });
        next();
    }
    catch (error) {
        response.status(400).send(error.format());
    }
};
exports.default = validate;
