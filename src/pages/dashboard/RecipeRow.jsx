import { NavLink } from "react-router-dom"

function RecipeRow({ recipe, recipes, setRecipes }) {
    const { id, title, image_link } = recipe

    const handleDeleteRecipe = (id) => {
        setRecipes(recipes.filter(r => r.id !== id))
        fetch(`http://localhost:3000/recipes/${id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            },
        }).then(res => res.json())
            .then(() => alert('recipe deleted'))
    }
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

            </td>
            <td>
                <button onClick={() => handleDeleteRecipe(id)} className="btn btn-error text-white">Delete</button>
            </td>
        </tr>
    </>

}
export default RecipeRow