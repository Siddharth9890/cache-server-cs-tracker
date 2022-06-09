import express from "express";
import subjectController from "../controller/subject.controller";

const router = express.Router();

// get all subjects
// localhost:5000/api/v2/subject/
router.get("/", subjectController.getAllSubjects);

export default router;
