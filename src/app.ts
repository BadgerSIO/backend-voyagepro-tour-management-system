import cors from "cors";
import express, { Application, Request, Response } from "express";
import router from "./app/routes";
import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/notFound";

const app: Application = express();
// Middleware
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
