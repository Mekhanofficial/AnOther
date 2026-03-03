import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import HomePage from "../pages/Home";
import LifestylePage from "../pages/Lifestyle";
import StylePage from "../pages/Style";
import TravelPage from "../pages/Travel";
import InteriorPage from "../pages/Interior";
import PageOne from "../components/subpages/Page1";
import PageTwo from "../components/subpages/Page2";
import PageThree from "../components/subpages/Page3";
import PageFour from "../components/subpages/Page4";
import PageFive from "../components/subpages/Page5";
import PageSix from "../components/subpages/Page6";
import PageSeven from "../components/subpages/Page7";
import PageEight from "../components/subpages/Page8";
import PageNine from "../components/subpages/Page9";
import PageTen from "../components/subpages/Page10";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/Lifestyle",
        element: <LifestylePage />,
      },
      {
        path: "/Style",
        element: <StylePage />,
      },
      {
        path: "/Travel",
        element: <TravelPage />,
      },
      {
        path: "/Interior",
        element: <InteriorPage />,
      },
      {
        path: "/Page1",
        element: <PageOne />,
      },
      {
        path: "/Page2",
        element: <PageTwo />,
      },
      {
        path: "/Page3",
        element: <PageThree />,
      },
      {
        path: "/Page4",
        element: <PageFour />,
      },
      {
        path: "/Page5",
        element: <PageFive />,
      },
      {
        path: "/Page6",
        element: <PageSix />,
      },
      {
        path: "/Page7",
        element: <PageSeven />,
      },
      {
        path: "/Page8",
        element: <PageEight />,
      },
      {
        path: "/Page9",
        element: <PageNine />,
      },
      {
        path: "/Page10",
        element: <PageTen />,
      },
    ],
  },
]);

export default router;


