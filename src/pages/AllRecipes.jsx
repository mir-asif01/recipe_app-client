import { useEffect, useState } from "react";
import SingleRecipe from "./recipes-components/SingleRecipe"

function AllRecipes() {
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        async function fetchRecipes() {
            try {
                fetch("http://localhost:3000/recipes")
                    .then(res => res.json())
                    .then(data => setRecipes(data))
            } catch (error) {
                if (error) console.log(error.message);
            }
        }
        fetchRecipes()
    }, [])
    return <div className="my-10">
        <h1 className="text-4xl text-center my-10 p-3 bg-slate-300 ">All Recipes </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-7">
            {
                recipes.map(recipe => <SingleRecipe key={recipe.id} recipe={recipe}></SingleRecipe>)
            }
        </div>
    </div>
}
export default AllRecipes