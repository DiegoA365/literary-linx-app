import { createBrowserRouter } from "react-router-dom";
import { pages, paths } from "../RouterStorage/RouterStorage";

const router = createBrowserRouter([
  {
    path: paths.homePagePath,
    element: pages.homePage,
    errorElement: pages.notFoundPage,
  },
]);

export default router;
