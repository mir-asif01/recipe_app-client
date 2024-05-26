import { NavLink } from "react-router-dom"

function SingleRecipe({ recipe }) {
    const { id, category, description, image_link, price, title } = recipe

    return <>
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className="w-80 h-80" src={image_link} alt="Shoes" /></figure>
            <div className="card-body text-center">
                <h2 className="text-xl font-semibold">{title}</h2>
                <h2 className="font-semibold text-sky-700">{category}</h2>
                <div className="text-xl font-semibold">
                    {description.length > 15 ? description.slice(0, 20) + "..." : description}
                </div>
                <NavLink to={`/recipes/${id}`} className="text-xl font-semibold btn btn-info">View</NavLink>
            </div>
        </div>
    </>
}
export default SingleRecipe