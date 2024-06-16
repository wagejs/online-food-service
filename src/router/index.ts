import { createBrowserRouter } from "react-router-dom";
import { Landing } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Landing,
  },
]);

export default router;
