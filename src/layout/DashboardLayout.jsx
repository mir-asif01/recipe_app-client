import { NavLink, Outlet } from "react-router-dom"

function DashboardLayout() {
    return <>
        <div className="">
            <div className="min-h-screen bg-slate-500 px-3 py-4 col-span-2">
                <NavLink to={"dashboard/recipes"}>All Recipes</NavLink>
                <NavLink>Add Recipes</NavLink>
                <button className="btn btn-success">Logout</button>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    </>
}
export default DashboardLayout