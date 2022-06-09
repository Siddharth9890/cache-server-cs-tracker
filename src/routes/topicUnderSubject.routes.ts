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

// get all topics under a subject this endpoint is just used for get static props
// localhost:5000/api/v2/topic/:topicName
router.get("/", topicUnderSubject.getAll);

export default router;
