import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AllRecipes from "../pages/AllRecipes";
import Error from "../pages/Error";
import AddRecipe from "../pages/AddRecipe";
import PrivateRoute from "./PrivateRoute";
import RecipeDetails from "../pages/recipes-components/RecipeDetails";
import DashboardLayout from "../layout/DashboardLayout";
import DashboardHome from "../pages/dashboard/DashboardHome";
import DashboardRecipes from "../pages/dashboard/DashboardRecipes";

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
                path: "/recipes/:id",
                element: <RecipeDetails></RecipeDetails>,
                loader: ({ params }) => fetch(`http://localhost:3000/recipes/${params.id}`)
            },
        ]
    },
    {
        path: "dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: "dashboard",
                element: <DashboardHome></DashboardHome>
            },
            {
                path: "dashboard/recipes",
                element: <DashboardRecipes></DashboardRecipes>
            },
            {
                path: "dashboard/add-recipes",
                element: <PrivateRoute><AddRecipe></AddRecipe></PrivateRoute>
            },
        ]
    },
    {
        path: "*",
        element: <Error></Error>
    }
])

export default routes