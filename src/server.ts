/* eslint-disable @typescript-eslint/no-unused-vars */
import { Server } from "http";
import app from "./app";
import mongoose from "mongoose";
import { env } from "process";
import { envVars } from "./app/config/env";
import { seedSuperAdmin } from "./app/utils/seedSuperAdmin";
let server: Server;
async function bootstrap() {
  try {
    await mongoose.connect(envVars.MONGO_URI);
    console.log("Database connected");
    server = app.listen(envVars.PORT, () => {
      console.log(`App listening on port ${envVars.PORT}`);
    });
  } catch (error) {
    console.log("Error during bootstrap:", error);
  }
}

(async () => {
  await bootstrap();
  await seedSuperAdmin();
})();
