import type { Command } from "commander";
import { ApiClient } from "../client.js";
import { loadToken } from "../config.js";

export function registerWhoami(program: Command): void {
  program
    .command("whoami")
    .description("print the authenticated account")
    .action(async () => {
      const client = new ApiClient(loadToken());
      const account = await client.whoami();
      console.log(`${account.login} (${account.org})`);
    });
}
