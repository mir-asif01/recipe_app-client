import { NavLink } from "react-router-dom"

function Banner() {
    return <>
        <div className="hero relative">
            <div className="absolute inset-0 bg-black opacity-40 hero-overlay bg-opacity-60" style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIEUFN2ECkK3a5dVvJmY-AfvHCAyGnQuVtzOKmNfEhaQ&s)' }}></div>
            <div className="hero-content text-center text-neutral-content py-32">
                <div className="max-w-md text-black">
                    <h1 className="mb-5 text-4xl font-bold">Welcome to recipe world</h1>
                    <p className="mb-5 text-xl font-semibold">Share your recipes with the world. As well as see others recipes. Earn and spend recipe coins!</p>
                    <div className="flex gap-2 justify-center items-center">
                        <button className="my-2 bg-purple-600 px-4 py-2 text-white text-xl rounded-md"><NavLink to="/recipes">See Recipes</NavLink></button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Banner