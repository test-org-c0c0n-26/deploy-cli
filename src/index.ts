#!/usr/bin/env node
import { Command } from "commander";
import { registerWhoami } from "./commands/whoami.js";

const program = new Command();
program.name("deploy").description("Deploy control plane CLI").version("0.4.1");
registerWhoami(program);
program.parseAsync(process.argv);
