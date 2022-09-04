import express from "express";
import helmet from "helmet";
import cors from "cors";
const xss = require("xss-clean");
import dotenv from "dotenv";
import routes from "./routes";
import { makeConnectionWithDB } from "./db";
import { limiter } from "./src/utils/limiter";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(limiter);
app.use(helmet());
app.use(xss());

app.use(
  cors({
    origin: ["https://cs-tracker.vercel.app"],
    methods: ["GET"],
  })
);

routes(app);

app.listen(PORT, async () => {
  await makeConnectionWithDB();
  console.log("Server running on Port: ", PORT);
});

process.on("unhandledRejection", (error) => {
  console.log(error);
  console.log("SERVER CLOSING 😱 CALL THE SUPPORT UNHANDLED REJECTION");
  process.exit(1);
});

process.on("uncaughtException", (error) => {
  console.log(error);
  console.log("SERVER CLOSING 😱 CALL THE SUPPORT UNCAUGHT EXCEPTION");
  process.exit(1);
});
