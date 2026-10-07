# deploy-cli

Command-line client for the deploy control plane.
Node 20 + TypeScript, built with Commander, published to the internal registry.

## Install

```bash
npm install -g deploy-cli
```

## Usage

```bash
deploy login                     # store an API token
deploy whoami                    # print the authenticated account
deploy deployments               # list recent deployments
deploy release --service NAME    # cut a release candidate
```

The CLI reads its token from `DEPLOY_API_TOKEN` or `~/.deploy/config.json`.

## Develop

```bash
npm install
npm run dev -- whoami
npm run build
npm test
```
