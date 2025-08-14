import cors from "cors";
import express, { Application, Request, Response } from "express";
import expressSession from "express-session";
import router from "./app/routes";
import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/notFound";
import cookieParser from "cookie-parser";
import { envVars } from "./app/config/env";
import passport from "passport";
import "./app/config/passport";

const app: Application = express();

app.use(
  expressSession({
    secret: envVars.EXPRESS_SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.use("/api/v1", router);
// Health check route
app.get("/", (req: Request, res: Response) => {
  res.send("VoyagePro server running 🥳");
});
// Global error handler
app.use(globalErrorHandler);
// Not found route
app.use(notFound);
export default app;
