import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import Error from "../pages/Error";
import TimeLinePage from '../pages/TimelinePage'
import Stats from "../pages/Stats";

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component:HomePage
      },
      {
        path: '/timeline',
        Component:TimeLinePage
      },
      {
        path: '/stats',
        Component:Stats
      },
    ],
    errorElement:<Error></Error>
  },
])