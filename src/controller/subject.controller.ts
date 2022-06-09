import { Request, Response } from "express";
import NodeCache from "node-cache";

import { getAllSubjectsDal } from "../DataAccessLayer/subject.dal";
import { successResponse, errorResponse } from "../utils/response.utils";

const cache = new NodeCache();
const TTL_TIME = 500;

async function getAllSubjects(request: Request, response: Response) {
  if (cache.has("ALL SUBJECTS"))
    return successResponse(response, 200, cache.get("ALL SUBJECTS"));

  try {
    const subjects = await getAllSubjectsDal();
    cache.set("ALL SUBJECTS", subjects, TTL_TIME);
    return successResponse(response, 200, subjects);
  } catch (error) {
    return errorResponse(response, 404, "Not found");
  }
}

export default {
  getAllSubjects,
};
