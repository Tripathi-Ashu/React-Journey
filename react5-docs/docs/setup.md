---
id: state-and-data
title: State and Data
sidebar_position: 7
description: Context providers, the dashboard data and the Explorer API service.
---

# State and Data

## Context providers

React5 uses the **Context API** for shared state. All four providers are stacked in `main.jsx`, so any component can read from them.

```jsx
<BrowserRouter>
  <AuthProvider>
    <DashboardProvider>
      <InventoryProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </InventoryProvider>
    </DashboardProvider>
  </AuthProvider>
</BrowserRouter>
```

| Context | File | What it holds |
| --- | --- | --- |
| `AuthContext` | `context/AuthContext.jsx` | The signed-in user and the auth functions |
| `DashboardContext` | `context/DashboardContext.jsx` | Daily sales, raw material, product shortage, profit gain, gold price and welcome card data |
| `InventoryContext` | `context/InventoryContext.jsx` | A list of products and income, expense and shortage statistics |
| `UserContext` | `context/UserContext.jsx` | Profile details, purchase history and comments |

:::note Static data
`DashboardContext`, `InventoryContext` and `UserContext` serve **hardcoded sample data**. They are designed so the data source can later be swapped for a real API without changing the components that consume it.
:::

### Reading a context

```jsx
import { useContext } from "react";
import { DashboardContext } from "../context/DashboardContext";

function SummaryCards() {
  const { dailySales } = useContext(DashboardContext);

  return (
    <div>
      <h5>{dailySales.title}</h5>
      <p>{dailySales.amount}</p>
    </div>
  );
}
```

## Explorer API service

`src/services/explorerService.js` powers the **Explorer** page. It talks to the free [DummyJSON](https://dummyjson.com) API and turns each product into a "file" object, so the UI looks like a real file manager.

### Functions

| Function | HTTP request | Purpose |
| --- | --- | --- |
| `getFiles()` | `GET /products?limit=12` | Load the first 12 files |
| `searchFilesAPI(query)` | `GET /products/search?q=` | Search files by name |
| `uploadFile(fileData)` | `POST /products/add` | Add a new file |
| `updateFile(id, existing, updates)` | `PUT /products/:id` | Rename a file |
| `deleteFile(id)` | `DELETE /products/:id` | Remove a file |

### File object shape

Each product is mapped to this shape by `mapProductToFile`:

```js
{
  id: 1,
  fileName: "Essence Mascara Lash Princess",
  fileType: "pdf",            // pdf, docx, pptx or png
  isFavorite: false,          // true when rating is 4.5 or higher
  uploadedBy: "others",       // "me" for even ids
  uploaderName: "Essence",
  shareStatus: "Active",      // "Inactive" when out of stock
  fileSize: "9.99 MB"
}
```

### Explorer page behaviour

The Explorer page (`pages/Explorer.jsx`) combines several patterns worth knowing:

- **Debounced search**: typing waits briefly before calling the search API, so each keystroke does not trigger a request.
- **Loading and error states**: separate `loading` and `error` state show feedback while data loads or if the request fails.
- **Sorting and filtering**: category and sort controls work on the data already in memory, using `useMemo`.
- **Upload and edit modal**: `UploadFileModal` is reused for adding and renaming files.

:::warning Changes are not saved
DummyJSON simulates writes but does not store them. After you upload, rename or delete a file, a page refresh brings back the original data.
:::