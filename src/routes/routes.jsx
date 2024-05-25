import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AllRecipes from "../pages/AllRecipes";
import Error from "../pages/Error";
import AddRecipe from "../pages/AddRecipe";

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
                path: "/recipes",
                element: <AllRecipes></AllRecipes>
            },
            {
                path: "/add-recipes",
                element: <AddRecipe></AddRecipe>
            },
        ]
    },
    {
        path: "*",
        element: <Error></Error>
    }
])

export default routes