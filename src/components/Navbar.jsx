import { NavLink } from "react-router-dom"

function Navbar() {
    return <>
        <div className="navbar bg-base-100 md:px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink className="my-2 text-xl hover:underline" to="/">Home</NavLink>
                        <NavLink className="my-2 text-xl hover:underline" to="/recipes">Recipes</NavLink>
                        <NavLink className="my-2 text-xl hover:underline" to="/add-recipes">Add Recipe</NavLink>
                        <h1 className="my-2 text-xl hover:underline" >100</h1>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4nVVH72wUxa6TgIx9FgJDat-C-TZdaut_3AXcUHNRKQ&s" className="my-2 w-10 h-10 rounded-full" alt="" />
                        <button className="my-2 bg-purple-600 px-4 py-2 text-white text-xl rounded-md">Google Login</button>
                        {/* <button className="mx-2 bg-slate-600 px-4 py-2 text-white text-xl rounded-md">Logout</button> */}
                    </ul>
                </div>
                <a className="text-2xl text-right font-semibold">Recipe World</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex gap-3 justify-center items-center">
                    <NavLink className="mx-2 text-xl hover:underline" to="/">Home</NavLink>
                    <NavLink className="mx-2 text-xl hover:underline" to="/recipes">Recipes</NavLink>
                    <NavLink className="mx-2 text-xl hover:underline" to="/add-recipes">Add Recipe</NavLink>
                    <h1 className="mx-2 text-xl hover:underline" >100</h1>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4nVVH72wUxa6TgIx9FgJDat-C-TZdaut_3AXcUHNRKQ&s" className="mx-2 w-10 h-10 rounded-full" alt="" />
                    <button className="mx-2 bg-purple-600 px-4 py-2 text-white text-xl rounded-md">Google Login</button>
                    {/* <button className="mx-2 bg-slate-600 px-4 py-2 text-white text-xl rounded-md">Logout</button> */}
                </ul>
            </div>
        </div>
    </>
}

export default Navbar