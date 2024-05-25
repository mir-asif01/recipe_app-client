import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AllRecipes from "../pages/AllRecipes";
import Error from "../pages/Error";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/all-recipes",
                element: <AllRecipes></AllRecipes>
            },
        ]
    },
    {
        path: "*",
        element: <Error></Error>
    }
])

export default routes