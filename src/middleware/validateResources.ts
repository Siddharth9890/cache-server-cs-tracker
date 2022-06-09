import { AnyZodObject } from "zod";
import { Request, Response, NextFunction } from "express";

const validate =
  (schema: AnyZodObject) =>
  (request: Request, response: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: request.body,
        params: request.params,
        query: request.query,
      });
      next();
    } catch (error: any) {
      response.status(400).send(error.format());
    }
  };

export default validate;
