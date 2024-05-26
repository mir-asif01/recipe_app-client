import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AllRecipes from "../pages/AllRecipes";
import Error from "../pages/Error";
import AddRecipe from "../pages/AddRecipe";
import PrivateRoute from "./PrivateRoute";
import RecipeDetails from "../pages/recipes-components/RecipeDetails";

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
            {
                path: "/add-recipes",
                element: <PrivateRoute><AddRecipe></AddRecipe></PrivateRoute>
            },
        ]
    },
    // {
    //     path : "dashboard",
    //     element : 
    // },
    {
        path: "*",
        element: <Error></Error>
    }
])

export default routes