import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/Main";
import HomePage from "./pages/Home";
import QnA from "./pages/QnA";
import Profiles from "./pages/Profiles";
import ProfileUpdate from "./pages/ProfileUpdate";
import CareerCreate from "./pages/CareerCreate";
import EducationsCreate from "./pages/EducationsCreate";
import SitesCreate from "./pages/SitesCreate";
import ProfileSkills from "./pages/ProfileSkills";
import SearchResult from "./pages/SearchResult";
import QnaDetail from "./pages/QnaDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [],
    },
    {
        path: "/home",
        element: <HomePage />,
        children: [],
    },
    {
        path: "/qnas",
        element: <QnA />,
        children: [],
    },
    {
        path: "/qnas/detail",
        element: <QnaDetail />,
        children: [],
    },
    {
        path: "/profiles",
        element: <Profiles />,
        children: [],
    },
    {
        path: "/profiles/update",
        element: <ProfileUpdate />,
        children: [],
    },
    {
        path: "/profiles/careers/create",
        element: <CareerCreate />,
        children: [],
    },
    {
        path: "/profiles/educations/create",
        element: <EducationsCreate />,
        children: [],
    },
    {
        path: "/profiles/sites/create",
        element: <SitesCreate />,
        children: [],
    },
    {
        path: "/profiles/skills",
        element: <ProfileSkills />,
        children: [],
    },
  {
    path: "/search",
    element: <SearchResult />,
    children: [],
  },
]);
function Router() {
    return <RouterProvider router={router} />;
}

export default Router;
