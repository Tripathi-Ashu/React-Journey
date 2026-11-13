---
id: project-structure
title: Project Structure
sidebar_position: 3
description: A tour of the folders and files inside React5.
---

# Project Structure

```text
React5/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx              Entry point: router and providers
    ├── App.jsx               Renders the routes
    ├── index.css             Global styles
    ├── routes/
    │   └── AppRoutes.jsx     Every route in the app
    ├── context/
    │   ├── AuthContext.jsx       Sign up, sign in, log out
    │   ├── DashboardContext.jsx  Dashboard card data
    │   ├── InventoryContext.jsx  Products and statistics
    │   └── UserContext.jsx       Profile, purchases, comments
    ├── components/
    │   ├── Layout/           Header + Sidebar + page outlet
    │   ├── Header/           Top bar and profile dropdown
    │   ├── Sidebar/          Sidebar and its menu config
    │   ├── Explorer/         Upload file modal
    │   └── ProtectedRoute.jsx
    ├── Dashboard/            Dashboard widgets
    ├── pages/                One file per page
    └── services/
        └── explorerService.js   API calls for the Explorer
```

## What lives where

### `src/context`
Global state shared across the app. Each file exports a provider component that `main.jsx` mounts around `App`.

### `src/components`
Reusable building blocks. `Layout` is the shell that every protected page is rendered inside.

### `src/Dashboard`
Small, focused widgets that `Dashboard.jsx` assembles into the dashboard page: `SummaryCards`, `InventoryStatistics`, `GoldCard`, `WelcomeCard`, `ProfileCard`, `PurchaseHistory`, `TopUsers` and `RecentComments`.

### `src/pages`
Full pages mapped to routes: Finance, Network, Social, Inventory, Profile, Company, Forum, Personalize, Components, Documentation, Email, Explorer, Calendar, SignIn, SignUp and SupportivePages.

### `src/services`
Functions that talk to external APIs, kept out of components so the UI code stays clean.

:::tip Adding a new page
Create the file in `src/pages`, add a `Route` in `AppRoutes.jsx`, then add a menu entry in `sidebarConfig.js`. See [Layout and Sidebar](./layout-and-sidebar.md).
:::