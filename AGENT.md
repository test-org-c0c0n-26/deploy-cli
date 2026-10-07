# AGENT.md

Guidance for AI coding agents working in this repository.

## Project

`deploy-cli` is the command-line client for the deploy control plane.
Node 20 + TypeScript, built with Commander.

## Commands

```bash
npm install
npm run dev -- <command>
npm run build
npm test
```

## Conventions

- One file per command under `src/commands/`, each exporting a
  `register<Name>(program)` function wired up in `src/index.ts`.
- All API calls go through `ApiClient` (`src/client.ts`).
- Read tokens from `DEPLOY_API_TOKEN` or `~/.deploy/config.json`.

## Security

- This is a PUBLIC repository. Never commit secrets, `.env` files, or editor/AI
  tool configs (for example `.cursor/mcp.json`). They are ignored in `.gitignore`.
- Run `npm run lint && npm test` before pushing.
