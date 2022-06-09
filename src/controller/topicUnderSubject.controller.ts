import { Request, Response } from "express";
import NodeCache from "node-cache";

import {
  getAllTopics,
  getAllTopicsUnderSubjectDal,
} from "../DataAccessLayer/topicUnderSubject.dal";
import { successResponse, errorResponse } from "../utils/response.utils";

const cache = new NodeCache();
const TTL_TIME = 500;

async function getAllTopicsUnderSubject(request: Request, response: Response) {
  const subjectName = request.params.subjectName;
  if (cache.has(`Topic under ${subjectName}`))
    return successResponse(
      response,
      200,
      cache.get(`Topic under ${subjectName}`)
    );

  try {
    const topics = await getAllTopicsUnderSubjectDal(subjectName);
    cache.set(`Topic under ${subjectName}`, topics, TTL_TIME);
    return successResponse(response, 200, topics);
  } catch (error) {
    return errorResponse(response, 404, error);
  }
}

async function getAll(request: Request, response: Response) {
  if (cache.has(`ALL TOPICS`))
    return successResponse(response, 200, cache.get(`ALL TOPICS`));

  try {
    const topics = await getAllTopics();
    cache.set("ALL TOPICS", topics, TTL_TIME);
    return successResponse(response, 200, topics);
  } catch (error) {
    return errorResponse(response, 404, error);
  }
}

export default {
  getAllTopicsUnderSubject,
  getAll,
};
