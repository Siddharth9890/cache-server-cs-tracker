import { Request, Response } from "express";
import NodeCache from "node-cache";

import {
  getAllQuestionsUnderATopicDal,
  getSingleQuestionDal,
} from "../DataAccessLayer/question.dal";
import { successResponse, errorResponse } from "../utils/response.utils";

const cache = new NodeCache();
const TTL_TIME = 500;

async function getAllQuestionsUnderATopic(
  request: Request,
  response: Response
) {
  const topicName = request.params.topicName;
  if (cache.has(`Questions under ${topicName}`))
    return successResponse(
      response,
      200,
      cache.get(`Questions under ${topicName}`)
    );

  try {
    const questions = await getAllQuestionsUnderATopicDal(topicName);
    cache.set(`Questions under ${topicName}`, questions, TTL_TIME);
    return successResponse(response, 200, questions);
  } catch (error) {
    return errorResponse(response, 400, error);
  }
}

async function getSingleQuestion(request: Request, response: Response) {
  const questionName = request.params.questionName;
  const topicName = request.params.topicName;
  if (cache.has(`${questionName}`))
    return successResponse(response, 200, cache.get(`${questionName}`));

  try {
    const question = await getSingleQuestionDal(questionName, topicName);
    cache.set(`${questionName}`, question, TTL_TIME);
    return successResponse(response, 200, question);
  } catch (error) {
    return errorResponse(response, 400, error);
  }
}

export default {
  getAllQuestionsUnderATopic,
  getSingleQuestion,
};
