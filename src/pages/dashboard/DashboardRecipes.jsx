import { useEffect, useState } from "react";
import RecipeRow from "./RecipeRow";

function DashboardRecipes() {

    const [recipes, setRecipes] = useState([])
    async function fetchRecipes() {
        try {
            fetch("http://localhost:3000/recipes")
                .then(res => res.json())
                .then(data => setRecipes(data))
        } catch (error) {
            if (error) console.log(error.message);
        }
    }

    useEffect(() => {
        fetchRecipes()
    }, [])
    return <>
        <div className="overflow-x-auto">
            <h1 className="mt-10 text-center text-3xl font-bold">All Recipes</h1>
            <table className="table mt-10">
                {/* head */}
                <thead>
                    <tr>
                        <th className="text-xl font-semibold">Image</th>
                        <th className="text-xl font-semibold">Title</th>
                        <th className="text-xl font-semibold">Edit</th>
                        <th className="text-xl font-semibold">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        recipes.map(recipe => <RecipeRow key={recipe.id} recipe={recipe} setRecipes={setRecipes} recipes={recipes}></RecipeRow>)
                    }
                </tbody>
            </table>
        </div>
    </>
}

export default DashboardRecipes