function AddRecipe() {
    return <>
        <div className="my-20 flex flex-col-reverse md:flex-row justify-center items-center gap-10 border border-slate-400 rounded-md w-full md:w-2/4 mx-auto">
            <div className="w-1/3 flex justify-center items-center">
                <h1 className="text-2xl">Add Recipe</h1>
            </div>
            <form className="w-2/3 flex flex-col gap-2 justify-center items-center bg-slate-300 px-10 py-7">
                <input type="text" placeholder="id" className="input input-bordered w-full max-w-xs" />
                <input type="text" name="recipe_name" placeholder="recipe title" className="input input-bordered w-full max-w-xs" />
                <input type="text" name="recipe_image" placeholder="recipe image link" className="input input-bordered w-full" />
                <textarea className="textarea w-full max-w-xs" placeholder="recipe details"></textarea>
                <input type="text" name="category" placeholder="recipe category" className="input input-bordered w-full max-w-xs" />
                <input type="submit" className="btn btn-success text-white" value="Add Recipe" />
            </form>
        </div>
    </>
}

export default AddRecipe