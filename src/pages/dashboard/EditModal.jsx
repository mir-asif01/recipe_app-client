function EditModal({ recipe }) {
    const { id, category, description, image_link, price, title } = recipe
    return <>
        <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button>
        <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-xl text-center">Edit <span className="font-bold text-red-500">{title}</span> Recipe!!</h3>
                <div className="modal-action">
                    <form method="dialog" className="w-full flex flex-col gap-2 justify-center items-center bg-slate-300 px-10 py-7">
                        <input type="text"
                            value={id} readOnly={true}
                            name="id" placeholder="id" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="recipe_title" placeholder="recipe title" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="price" placeholder="recipe price" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="recipe_image" placeholder="recipe image link" className="input input-bordered w-full" />
                        <textarea name="description" className="textarea w-full max-w-xs" placeholder="recipe details"></textarea>
                        <input type="text" name="category" placeholder="recipe category" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" className="btn btn-success text-white" value="Update Recipe" />
                        <button className="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    </>
}

export default EditModal