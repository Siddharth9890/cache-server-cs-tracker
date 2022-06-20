import express from "express";
import topicUnderSubject from "../controller/topicUnderSubject.controller";
import validate from "../middleware/validateResources";
import { paramsTopicUnderSubjectSchema } from "../schema/topicUnderWhichSubject.schema";

const router = express.Router();
// get all topics by subject name
// localhost:5000/api/v2/topic/:topicName
router.get(
  "/:subjectName",
  validate(paramsTopicUnderSubjectSchema),
  topicUnderSubject.getAllTopicsUnderSubject
);

export default router;
