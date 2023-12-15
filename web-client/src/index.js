import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import UserDetails from "./UserDetails";
import { dataFetcher } from "./utils/fetcher";
import Error from "./components/Error";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: async ({ request }) => {
      // loaders can be async functions
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/sectors`, {
        signal: request.signal,
      });
      const sectors = await res.json();
      return { sectors };
    },
    errorElement: <Error />,
  },
  {
    path: "/:id",
    element: <UserDetails />,
    loader: async ({ params, request }) => {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/sectors`, {
        signal: request.signal,
      });
      const sectors = await res.json();

      const { id } = params;
      let data = await dataFetcher("/user/" + id, undefined, undefined);
      return { sectors, data };
    },
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />{" "}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
