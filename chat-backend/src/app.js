import express from "express";
import logger from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

const env = process.env.NODE_ENV || "development";
const accessKey = process.env.ACCESS_TOKEN;
const refreshKey = process.env.REFRESH_TOKEN;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());
app.use(logger("dev" /*, { skip: (req, res) => res.statusCode < 400 } */));

app.set("port", process.env.PORT);
app.set("env", env);
app.set("accessKey", accessKey);
app.set("refreshKey", refreshKey);

export default app;
