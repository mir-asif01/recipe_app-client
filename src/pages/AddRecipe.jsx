function AddRecipe() {
    return <>
        <div className="my-20 flex flex-col-reverse md:flex-row justify-center items-center gap-10 border border-slate-400 rounded-md w-full md:w-2/4 mx-auto">
            <div className="w-1/3 flex justify-center items-center">
                <h1 className="text-2xl">Add Recipe</h1>
            </div>
            <form className="flex flex-col gap-2 justify-center items-center bg-slate-300 px-10 py-7">
                <input type="text" name="recipe_name" placeholder="recipe name" className="input input-bordered w-full max-w-xs" />
                <input type="file" name="recipe_image" placeholder="recipe image" className="file-input w-full max-w-xs" />
                <textarea className="textarea w-full max-w-xs" placeholder="recipe details"></textarea>
                <select className="select select-bordered w-full max-w-xs">
                    <option selected>category 1</option>
                    <option>category 2</option>
                    <option>category 3</option>
                    <option>category 4</option>
                    <option>category 5</option>
                    <option>category 6</option>
                </select>
                <input type="text" placeholder="youtube video iframe" className="input input-bordered w-full max-w-xs" />
                <input type="submit" className="btn btn-success text-white" value="Add Recipe" />
            </form>
        </div>
    </>
}

export default AddRecipe