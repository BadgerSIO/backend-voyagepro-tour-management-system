import dotenv from "dotenv";

dotenv.config();
interface EventConfig {
  NODE_ENV: "development" | "production";
  PORT: string;
  MONGO_URI: string;
}
const loadVariables = () => {
  const requiredVars: string[] = ["NODE_ENV", "PORT", "MONGO_URI"];
  requiredVars.forEach((variable) => {
    if (!process.env[variable]) {
      throw new Error(`Missing environment variable: ${variable}`);
    }
  });
  return {
    NODE_ENV: process.env.NODE_ENV as "development" | "production",
    PORT: process.env.PORT as string,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    MONGO_URI: process.env.MONGO_URI!,
  };
};
export const envVars: EventConfig = loadVariables();
