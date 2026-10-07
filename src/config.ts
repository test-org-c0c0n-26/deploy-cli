import { readFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

export function loadToken(): string {
  const fromEnv = process.env.DEPLOY_API_TOKEN;
  if (fromEnv) {
    return fromEnv;
  }
  const configPath = join(homedir(), ".deploy", "config.json");
  const parsed = JSON.parse(readFileSync(configPath, "utf8")) as {
    token?: string;
  };
  if (!parsed.token) {
    throw new Error("no API token; run `deploy login`");
  }
  return parsed.token;
}
