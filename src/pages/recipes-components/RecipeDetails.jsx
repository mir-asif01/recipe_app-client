import { useLoaderData } from "react-router-dom"

function RecipeDetails() {
    const recipe = useLoaderData()
    const { id, category, description, image_link, price, title } = recipe
    return <>
        <div className="my-2 p-5 md:p-16 min-h-screen">
            <h1 className="text-center text-3xl font-semibold mb-5"><span className="text-lime-600">{title}</span> Recipe Details</h1>
            <div className="card border border-slate-500 rounded-none flex flex-row justify-center items-center  full bg-base-100">
                <figure><img className="h-96" src={image_link} alt="Shoes" /></figure>
                <div className="card-body text-center">
                    <h2 className="text-3xl font-semibold">{title}</h2>
                    <h2 className="font-semibold text-sky-700">{category}</h2>
                    <h2 className="text-2xl">${price}</h2>
                    <div className="text-2xl text-gray-700 font-semibold">
                        {description}
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default RecipeDetails