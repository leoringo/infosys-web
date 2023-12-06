import { createBrowserRouter, redirect } from "react-router-dom";
import App from "../App";
import AboutPage from "../views/AboutPage";
import BlogPage from "../views/BlogPage";
import HomePage from "../views/HomePage";
import PortfolioPage from "../views/PortfolioPage";
import ServicePage from "../views/ServicePage";
import SupportPage from "../views/SupportPage";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/services",
        element: <ServicePage />,
      },
      {
        path: "/portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/support",
        element: <SupportPage />,
      },
    ],
  },
]);

export default router;
