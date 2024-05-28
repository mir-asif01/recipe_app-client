import { useLoaderData } from "react-router-dom"

function EditRecipe() {
    // const recipe = useLoaderData()
    // const { id, category, description, image_link, price, title } = recipe
    return <>
        <div>
            <h1>Edit recipe</h1>
            <form className="w-2/3 flex flex-col gap-2 justify-center items-center bg-slate-300 px-10 py-7">
                <input type="text" name="id" placeholder="id" className="input input-bordered w-full max-w-xs" />
                <input type="text" name="recipe_title" placeholder="recipe title" className="input input-bordered w-full max-w-xs" />
                <input type="text" name="price" placeholder="recipe price" className="input input-bordered w-full max-w-xs" />
                <input type="text" name="recipe_image" placeholder="recipe image link" className="input input-bordered w-full" />
                <textarea name="description" className="textarea w-full max-w-xs" placeholder="recipe details"></textarea>
                <input type="text" name="category" placeholder="recipe category" className="input input-bordered w-full max-w-xs" />
                <input type="submit" className="btn btn-success text-white" value="Add Recipe" />
            </form>
        </div>
    </>
}

export default EditRecipe