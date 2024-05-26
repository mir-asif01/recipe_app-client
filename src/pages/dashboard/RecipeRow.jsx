function RecipeRow({ recipe }) {
    const { title, image_link } = recipe
    return <>
        <tr>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image_link} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {title}
            </td>
            <td>
                <button className="btn btn-info text-white">Edit</button>
            </td>
            <td>
                <button className="btn btn-error text-white">Delete</button>
            </td>
        </tr>
    </>

}
export default RecipeRow