---
id: getting-started
title: Getting Started
sidebar_position: 2
description: Install the dependencies and run React5 locally.
---

# Getting Started

## Prerequisites

- **Node.js** 18 or newer (check with `node -v`)
- npm, yarn or pnpm
- Git

## 1. Clone the repository

```bash
git clone https://github.com/Tripathi-Ashu/React-Journey.git
cd React-Journey/React5
```

:::warning Run commands inside the React5 folder
The `package.json` lives in `React5`, not in the repository root. Running `npm install` from the root fails with an `ENOENT` error.
:::

## 2. Install dependencies

```bash
npm install
```

Using yarn or pnpm? Run `yarn` or `pnpm install` instead.

## 3. Start the dev server

```bash
npm run dev
```

Vite prints a local address, usually `http://localhost:5173`. Open it in your browser and the app reloads instantly as you edit files.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Create an optimized production build in `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Check the code with oxlint |

## First run

1. Open the app. You are redirected away from the dashboard because you are not signed in.
2. Go to the sign-up page and create an account.
3. Sign in with the same email and password.
4. You land on the dashboard.

:::note
There is no backend. Accounts are saved in your browser's `localStorage`, so they exist only in that browser.
:::