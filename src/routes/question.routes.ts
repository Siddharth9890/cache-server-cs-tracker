import express from "express";
import questionController from "../controller/question.controller";
import validate from "../middleware/validateResources";
import {
  paramsAllQuestionsUnderTopic,
  paramsSingleQuestion,
} from "../schema/question.schema";

const router = express.Router();

// get all questions under a topic
// localhost:5000/api/v2/question/:topicName
router.get(
  "/:topicName",
  validate(paramsAllQuestionsUnderTopic),
  questionController.getAllQuestionsUnderATopic
);

// get one question by name
// localhost:5000/api/v2/question/:topicName/:questionName
router.get(
  "/:topicName/:questionName",
  validate(paramsSingleQuestion),
  questionController.getSingleQuestion
);

export default router;
