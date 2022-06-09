import subjectRouter from "./src/routes/subject.routes";
import topicRouter from "./src/routes/topicUnderSubject.routes";
import questionRouter from "./src/routes/question.routes";
import { Express } from "express";

function routes(app: Express) {
  app.use("/api/v2/subject", subjectRouter);

  app.use("/api/v2/topic", topicRouter);

  app.use("/api/v2/question", questionRouter);
}

export default routes;
