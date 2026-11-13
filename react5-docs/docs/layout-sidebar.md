---
id: layout-and-sidebar
title: Layout and Sidebar
sidebar_position: 6
description: How the app shell and the config-driven sidebar menu work.
---

# Layout and Sidebar

## The Layout component

`src/components/Layout/Layout.jsx` is the shell around every protected page. It renders three things:

1. **Header**: the top bar, with a menu button.
2. **Sidebar**: the navigation panel.
3. **Outlet**: the place where the current page appears.

The sidebar's open or closed state lives in `Layout`, and is passed down as props.

```jsx
const [isSidebarOpen, setIsSidebarOpen] = useState(false);
const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

<Header onMenuClick={toggleSidebar} />
<Sidebar isOpen={isSidebarOpen} />
<main className={isSidebarOpen ? "dashboard-shifted" : "dashboard-normal"}>
  <Outlet />
</main>
```

When the sidebar opens, the `dashboard-shifted` class moves the main content over to make room.

## Config-driven sidebar

The menu is not hard-coded in JSX. It is generated from an array in `src/components/Sidebar/sidebarConfig.js`, so changing the menu means editing data, not markup.

### Item types

| `type` | Purpose | Key fields |
| --- | --- | --- |
| `heading` | A section title | `label` |
| `link` | A direct link to a page | `label`, `path`, `icon`, optional `badge` |
| `submenu` | An expandable group | `key`, `label`, `icon`, `children` |

### Example

```js
export const sidebarMenu = [
  { type: "heading", label: "Application" },
  { type: "link", label: "Dashboard", path: "/dashboard", icon: "bi-house-door" },
  {
    type: "submenu",
    key: "profile",
    label: "Profile",
    icon: "bi-person-circle",
    children: [
      { label: "Professional", path: "/profile/professional", icon: "bi-person-badge" },
      { label: "Social", path: "/profile/social", icon: "bi-people" },
    ],
  },
];
```

Icons come from **Bootstrap Icons**: use any class name from the icon library, for example `bi-wallet2`.

### Current menu

| Section | Items |
| --- | --- |
| Application | Dashboard, Finance, Network, Social, Inventory |
| Pages | Profile (submenu), Company (submenu), Forum, Supportive Pages (submenu), Personalize, Components, Documentation |
| Applications | Email, Explorer, Calendar |

## How submenus open

`Sidebar.jsx` tracks every submenu in a single state object, keyed by each submenu's `key`:

```jsx
const [openMenus, setOpenMenus] = useState({});

const toggleMenu = (key) => {
  setOpenMenus(prev => ({ ...prev, [key]: !prev[key] }));
};
```

This means one `useState` handles any number of submenus, for example `{ profile: true, company: false }`.

## Active link highlighting

Links use React Router's `NavLink`, which tells you when a link matches the current URL:

```jsx
<NavLink
  to={item.path}
  className={({ isActive }) => `sidebar-item ${isActive ? "active" : ""}`}
>
```

## Adding a menu item

1. Create the page and its route (see [Routing](./routing.md)).
2. Add one object to `sidebarMenu` with a `label`, `path` and `icon`.
3. Save. The sidebar updates without touching `Sidebar.jsx`.