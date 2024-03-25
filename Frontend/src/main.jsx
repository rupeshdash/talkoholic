import React from "react";
import ReactDOM from "react-dom/client";
import "./index.style.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ChatSectionWrapper from "./components/chatSection/ChatSectionWrapper.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ChatSectionWrapper />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
