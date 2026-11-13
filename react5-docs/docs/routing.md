---
id: routing
title: Routing
sidebar_position: 5
description: Every public, protected and dynamic route in React5.
---

# Routing

All routes are declared in `src/routes/AppRoutes.jsx` using React Router DOM 7. The root `BrowserRouter` is mounted in `main.jsx`.

## Route groups

### Public routes

Anyone can open these pages, signed in or not.

| Path | Page |
| --- | --- |
| `/supportive` | `SupportivePages` |
| `/supportive/sign-in` | `SignIn` |
| `/supportive/sign-up` | `SignUp` |

### Redirect

| Path | Behaviour |
| --- | --- |
| `/` | Redirects to `/dashboard` |

### Protected routes

These pages are wrapped in `ProtectedRoute` and rendered inside `Layout`, so they get the header and sidebar automatically.

| Path | Page |
| --- | --- |
| `/dashboard` | Dashboard |
| `/finance` | Finance |
| `/network` | Network |
| `/social` | Social |
| `/inventory` | Inventory |
| `/forum` | Forum |
| `/personalize` | Personalize |
| `/components` | Components |
| `/documentation` | Documentation |
| `/email` | Email |
| `/explorer` | Explorer |
| `/calendar` | Calendar |

### Dynamic routes

| Path | Example values for `:type` |
| --- | --- |
| `/profile/:type` | `professional`, `social`, `analytical` |
| `/company/:type` | `about`, `careers`, `contact` |

Inside the page, read the value with the `useParams` hook:

```jsx
import { useParams } from "react-router-dom";

function Profile() {
  const { type } = useParams();
  return <h2>Profile: {type}</h2>;
}
```

## Layout route pattern

The protected group uses a **layout route**: a `Route` with an `element` but no `path`. Its children render inside the `<Outlet />` in `Layout.jsx`.

```jsx
<Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/finance" element={<Finance />} />
</Route>
```

:::tip Adding a route
1. Create the page component in `src/pages`.
2. Import it in `AppRoutes.jsx` and add a `Route` inside the protected group.
3. Add a link for it in `sidebarConfig.js`.
:::