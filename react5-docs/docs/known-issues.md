---
id: known-issues
title: Known Issues and Next Steps
sidebar_position: 8
description: Current limitations in React5 and how to fix them.
---

# Known Issues and Next Steps

A short list of things to improve, with the fix for each.

## 1. Wrong redirect for signed-out users

**Problem:** `ProtectedRoute` redirects signed-out visitors to `/sign-in`, but the sign-in page is registered at `/supportive/sign-in`. No route matches `/sign-in`, so the visitor sees a blank page.

**Fix:** in `src/components/ProtectedRoute.jsx`, change the redirect target.

```jsx
if (!isAuthenticated) {
  return <Navigate to="/supportive/sign-in" replace />;
}
```

## 2. Sidebar links without routes

**Problem:** the "Supportive Pages" submenu links to `/supportive/error` and `/supportive/maintenance`, but `AppRoutes.jsx` only defines the `/supportive` index, `sign-in` and `sign-up`.

**Fix:** add the missing routes inside the `/supportive` group, or remove the two menu items.

```jsx
<Route path="/supportive">
  <Route index element={<SupportivePages />} />
  <Route path="sign-in" element={<SignIn />} />
  <Route path="sign-up" element={<SignUp />} />
  <Route path="error" element={<SupportivePages />} />
  <Route path="maintenance" element={<SupportivePages />} />
</Route>
```

## 3. Plain-text passwords

**Problem:** `AuthContext` stores passwords unencrypted in `localStorage`.

**Fix:** move authentication to a backend that hashes passwords and issues a token, then store only the token on the client.

## 4. Hardcoded dashboard data

**Problem:** `DashboardContext`, `InventoryContext` and `UserContext` return fixed sample values.

**Fix:** fetch the data from an API inside each provider and expose it through the same context value. Components that already read from the context need no changes.

## 5. No catch-all route

**Problem:** unknown URLs show nothing.

**Fix:** add a fallback route at the end of the `Routes` list.

```jsx
<Route path="*" element={<SupportivePages />} />
```

## Ideas for the future

- Replace the hardcoded data with a real REST or GraphQL API
- Add form validation to the sign-up and sign-in pages
- Add automated tests for `AuthContext` and `ProtectedRoute`
- Add a dark mode toggle on the Personalize page