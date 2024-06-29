import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext.jsx";
import ShowNote from "./pages/ShowNote.jsx";
import CreateEditNote from "./pages/CreateEditNote.jsx";
import NotFound404 from "./pages/NotFound404.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/show_note/:id",
    element: <ShowNote />,
  },
  {
    path: "/create_edit_note",
    element: <CreateEditNote />,
  },
  {
    path: "/create_edit_note/:id",
    element: <CreateEditNote />,
  },
  {
    path: "/*",
    element: <NotFound404 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalContext>
      <RouterProvider router={router} />
    </GlobalContext>
  </React.StrictMode>
);
