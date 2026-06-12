import express, { Application } from "express";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
import { IndexRouter } from "./routes";
import cors from "cors";

const app: Application = express();

app.use(
  cors({
    origin: process.env.APP_URL,
    credentials: true,
  }),
);

app.all("/api/auth/{*any}", toNodeHandler(auth));

app.use(express.json());

app.use("/api/v1", IndexRouter);

app.get("/", (req, res) => {
  res.send("Wow my server is working");
});

export default app;
