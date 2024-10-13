import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login";

export const AppRoutes = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    // {
    //     path: "/",
    //     element: <MainLayout />,
    //     children: [
    //         {
    //             path: "/dashboard",
    //             element: <Dashboard />,
    //         },
    //         {
    //             path: "/projects",
    //             element: <Projects />,
    //         },
    //         {
    //             path: "/estimate",
    //             element: <Estimation />,
    //         },
    //     ],
    // },
]);
