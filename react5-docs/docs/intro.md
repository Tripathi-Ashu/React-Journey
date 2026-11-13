---
id: intro
title: Introduction
sidebar_position: 1
description: Overview of React5, an admin dashboard built with React 19 and Vite.
---

# React5 Admin Dashboard

**React5** is a modern admin dashboard built with **React 19** and **Vite**. It brings together authentication, protected routing, a collapsible sidebar, dashboard widgets and a file explorer in one clean, easy-to-follow codebase.

:::tip Who is this for?
These docs are written for developers who want to understand how the app is put together, extend it with new pages, or learn the patterns it uses (Context API, nested routes, protected routes).
:::

## Highlights

| Feature | What it does |
| --- | --- |
| Authentication | Sign up, sign in and log out, with the session stored in `localStorage` |
| Protected routes | Dashboard pages are only visible to signed-in users |
| Sidebar navigation | Config-driven menu with headings, links and expandable submenus |
| Dashboard | Summary cards, inventory statistics, gold price, purchase history and more |
| File Explorer | Search, sort, upload, rename and delete files through a REST API |

## Tech stack

| Layer | Technology |
| --- | --- |
| UI library | React 19 |
| Build tool | Vite |
| Routing | React Router DOM 7 |
| Styling | Bootstrap 5 and Bootstrap Icons |
| State | React Context API |
| Linting | oxlint |

## How the app starts

1. `main.jsx` wraps the app in `BrowserRouter` and the four context providers.
2. `App.jsx` renders `AppRoutes`.
3. `AppRoutes.jsx` decides which page to show, and sends signed-out users away from protected pages.


