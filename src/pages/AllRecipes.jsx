import { useEffect, useState } from "react";
import SingleRecipe from "./recipes-components/SingleRecipe"

function AllRecipes() {
    const [recipes, setRecipes] = useState([])
    const [categories, setCategories] = useState([])

    async function fetchRecipes() {
        try {
            fetch("http://localhost:3000/recipes")
                .then(res => res.json())
                .then(data => setRecipes(data))
        } catch (error) {
            if (error) console.log(error.message);
        }
    }
    async function fetchCategories() {
        try {
            fetch("http://localhost:3000/categories")
                .then(res => res.json())
                .then(data => setCategories(data))
        } catch (error) {
            if (error) console.log(error.message);
        }
    }

    const handleFilter = (category) => {
        const filtered = recipes.filter(r => r.category === category)
        setRecipes(filtered)

    }

    useEffect(() => {
        fetchRecipes()
        fetchCategories()
    }, [])




    return <div className="my-10">
        <h1 className="text-4xl text-center my-10 p-3 bg-slate-300 ">All Recipes </h1>
        <div className="my-10 flex justify-center items-center">
            {
                categories.map(ct => <button onClick={() => handleFilter(ct.title)} className="bg-slate-600 border border-gray-500 px-3 py-2 text-white mx-2 rounded-md">{ct.title}</button>)
            }
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-7">
            {
                recipes.map(recipe => <SingleRecipe key={recipe.id} recipe={recipe}></SingleRecipe>)
            }
        </div>
    </div>
}
export default AllRecipes