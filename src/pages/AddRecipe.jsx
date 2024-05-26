function AddRecipe() {

    const handleAddRecipe = (e) => {
        e.preventDefault()
        const form = e.target
        const id = form.id.value
        const title = form.recipe_title.value
        const image_link = form.recipe_image.value
        const description = form.description.value
        const category = form.category.value
        const price = form.price.value

        const recipe = {
            id,
            title,
            description,
            image_link,
            price,
            category
        }
        fetch("http://localhost:3000/recipes", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(recipe)
        }).then(res => res.json())
            .then(() => alert("recipe added"))
        form.reset()
    }

    return <>
        <div className="my-20 flex flex-col-reverse md:flex-row justify-center items-center gap-10 border border-slate-400 rounded-md w-full md:w-2/4 mx-auto">
            <div className="w-1/3 flex justify-center items-center">
                <h1 className="text-2xl">Add Recipe</h1>
            </div>
            <form onSubmit={handleAddRecipe} className="w-2/3 flex flex-col gap-2 justify-center items-center bg-slate-300 px-10 py-7">
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

export default AddRecipe