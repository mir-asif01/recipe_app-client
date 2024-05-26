import { NavLink } from "react-router-dom"

function Dashboard() {
    return <>
        <div>
            <div className="min-h-screen bg-slate-500 px-3 py-4">
                <NavLink>All Recipes</NavLink>
                <NavLink>Add Recipes</NavLink>
                <button className="btn btn-success">Logout</button>
            </div>
            <div>

            </div>
        </div>
    </>
}

export default Dashboard