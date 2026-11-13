---
id: authentication
title: Authentication
sidebar_position: 4
description: How sign up, sign in, log out and protected routes work in React5.
---

# Authentication

Authentication lives in `src/context/AuthContext.jsx`. There is **no backend**: everything is stored in the browser's `localStorage`.

## Data storage

| `localStorage` key | Contents |
| --- | --- |
| `users` | Array of every registered user: `name`, `email`, `password` |
| `authUser` | The currently signed-in user, or missing when signed out |

## The AuthProvider

`AuthProvider` holds the current `user` in state. On first load it reads `authUser` from `localStorage`, so a page refresh keeps you signed in.

```jsx
const [user, setUser] = useState(() => {
  const stored = localStorage.getItem("authUser");
  return stored ? JSON.parse(stored) : null;
});
```

## Functions

| Function | Parameters | Result |
| --- | --- | --- |
| `signup` | `{ name, email, password }` | `{ success: true }`, or `{ success: false, message }` if the email already exists |
| `login` | `email`, `password` | `{ success: true }`, or `{ success: false, message }` if no user matches |
| `logout` | none | Clears the user from state and `localStorage` |

The context also exposes `user` and `isAuthenticated`, which is `true` when a user is signed in.

## Using it in a component

```jsx
import { useAuth } from "../context/AuthContext";

function ProfileButton() {
  const { user, isAuthenticated, logout } = useAuth();

  if (!isAuthenticated) return null;

  return <button onClick={logout}>Sign out {user.name}</button>;
}
```

## Protecting routes

`ProtectedRoute` wraps the layout in `AppRoutes.jsx`. If the visitor is not authenticated it redirects them to the sign-in page; otherwise it renders its children.

```jsx
<Route
  element={
    <ProtectedRoute>
      <Layout />
    </ProtectedRoute>
  }
>
  {/* every protected page goes here */}
</Route>
```

:::warning Learning project only
Passwords are saved as plain text in `localStorage`. This is fine for practice, but a real application must hash passwords on a server and use secure tokens or cookies.
:::

See [Known Issues](./known-issues.md) for a redirect path that needs fixing.