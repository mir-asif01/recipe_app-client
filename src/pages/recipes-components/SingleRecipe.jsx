function SingleRecipe() {
    return <>
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body text-center">
                <h2 className="text-xl font-semibold">Recipe Name</h2>
                <h2 className="font-semibold">Recipe creator || Country</h2>
                <div className="text-xl font-semibold">
                    purchased by user-1
                </div>
                <button className="text-xl font-semibold btn btn-info">View</button>
            </div>
        </div>
    </>
}
export default SingleRecipe