import { Link, NavLink } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import EditModal from "./EditModal"

function RecipeRow({ recipe, recipes, setRecipes }) {
    const { id, title, image_link } = recipe

    const handleDeleteRecipe = (id) => {
        const proceedToDelete = window.confirm("Are you sure to delete the recipe?")
        if (proceedToDelete) {
            setRecipes(recipes.filter(r => r.id !== id))
            fetch(`http://localhost:3000/recipes/${id}`, {
                method: "DELETE",
                headers: {
                    "content-type": "application/json"
                },
            }).then(res => res.json())
                .then(() => {
                    toast.success("Recipe deleted!")
                    alert("recipe deleted")
                })
        } else {
            return 0;
        }
    }

    return <>
        <ToastContainer autoClose={1000}></ToastContainer>
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
                <NavLink to={"dashboard/edit"}>Edit</NavLink>
            </td>
            <td>
                <button onClick={() => handleDeleteRecipe(id)} className="btn btn-error text-white">Delete</button>
                {/* <button onClick={() => {
                    const yes = window.confirm("yehnn")
                    if (yes) {

                        const showToast = () => {
                            toast.success("taosjjjjjj")
                        }
                        showToast()
                    }
                }}>Sho Toast</button> */}
            </td>
        </tr>
    </>

}
export default RecipeRow