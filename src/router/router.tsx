import { createBrowserRouter } from "react-router-dom";

import { Dashboard, LoginPage } from "@/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;
