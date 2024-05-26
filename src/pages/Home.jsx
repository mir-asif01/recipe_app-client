import { useContext, useEffect, useState } from "react"
import Banner from "./home-components/Banner"
import SuccessStories from "./home-components/SuccessStories"
import { AuthContext } from "../context/AuthContext"
import HomeRecipeCard from "./cards/HomeRecipeCard"
import { NavLink } from "react-router-dom"

function Home() {

    const { user } = useContext(AuthContext)
    console.log(user);
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
        console.log(recipes);

    }, [])

    return <>
        <Banner />
        <div className="my-20 mx-auto">
            <h1 className="text-3xl text-center">Popular recipes</h1>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5  my-10">
                {
                    recipes.reverse().slice(0, 3).map(recipe => <HomeRecipeCard key={recipe.id} recipe={recipe}></HomeRecipeCard>)
                }
            </div>
            <div className="flex justify-center items-center">
                <NavLink className="text-xl text-center mt-5 bg-slate-600 px-3 py-2 rounded-md text-white" to={"/recipes"}>{"View all recipes ->"}</NavLink>
            </div>
        </div>
    </>
}
export default Home