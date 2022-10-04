import { cleanEnv, str } from "envalid";

const env = cleanEnv(process.env, {
  MOTD_URL: str({ default: "http://whatthecommit.com/index.txt" }),
});

export { env };
