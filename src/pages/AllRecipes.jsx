import SingleRecipe from "./recipes-components/SingleRecipe"

function AllRecipes() {
    return <div className="my-10">
        <h1 className="text-4xl text-center my-2 p-3 bg-pink-400">All recipes Page</h1>
        <div className="flex flex-col justify-center items-center gap-7">
            <SingleRecipe></SingleRecipe>
            <SingleRecipe></SingleRecipe>
            <SingleRecipe></SingleRecipe>
        </div>
    </div>
}
export default AllRecipes