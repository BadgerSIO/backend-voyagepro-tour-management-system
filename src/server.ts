/* eslint-disable @typescript-eslint/no-unused-vars */
import { Server } from "http";
import app from "./app";
import mongoose from "mongoose";
let server: Server;
async function bootstrap() {
  try {
    await mongoose.connect(
      "mongodb+srv://superAdmin:gM1ojoy8u9DnFDQ6@cluster0.gqpfnmn.mongodb.net/voyagepro?retryWrites=true&w=majority"
    );
    console.log("Database connected");
    server = app.listen(5000, () => {
      console.log(`App listening on port 5000`);
    });
  } catch (error) {
    console.log("Error during bootstrap:", error);
  }
}

bootstrap();
