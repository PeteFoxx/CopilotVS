# Example TypeScript App

![CI](https://github.com/PeteFoxx/CopilotVS/actions/workflows/ci.yml/badge.svg)
![Coverage](https://codecov.io/gh/PeteFoxx/CopilotVS/branch/master/graph/badge.svg)

Minimal Express + TypeScript example to provide a concrete project structure for Copilot instructions and quick local development.

Requirements

- Node.js 18+
- npm

Quickstart

```bash
# Install deps
npm install

# Development (auto-reload)
npm run dev

# Build for production
npm run build

# Run built app
npm start

# Run tests (Vitest)
npm test
```

Useful scripts

- `npm run dev` — run in dev mode with auto-reload
- `npm run build` — compile TypeScript to `dist/`
- `npm start` — run compiled app
- `npm test` — run tests (Vitest, configured with `--run --globals`)

Docker

Build and run the image:

```bash
docker build -t example-ts-app .
docker run -p 3000:3000 example-ts-app
```

CI

This repo includes a GitHub Actions workflow at `.github/workflows/ci.yml` that runs `npm install` and `npm test` on push/PR to `master`.

Contributing

- Follow the existing style in `src/`.
- Run `npm test` and `npm run lint` before opening a PR.
- Include a short description of changes and testing steps in each PR.

If you are adding code, ensure TypeScript compiles and tests pass locally.

Entry point: `src/server.ts`
