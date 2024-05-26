import { NavLink, Outlet } from "react-router-dom"

function DashboardLayout() {
    return <>
        <div className="grid grid-flow-col ">
            <div className="min-h-screen flex flex-col justify-center items-center bg-gray-200 py-10 px-2 col-span-2">
                <NavLink className={"my-2 text-xl bg-gray-300 px-3 py-2 rounded-md"} to={"dashboard/recipes"}>All Recipes</NavLink>
                <NavLink to={"dashboard/add-recipes"} className={"my-2 text-xl bg-gray-300 px-3 py-2 rounded-md"}>Add Recipes</NavLink>
                <button className="btn btn-success my-2 text-white">Logout</button>
            </div>
            <div className="col-span-11">
                <Outlet></Outlet>
            </div>
        </div>
    </>
}
export default DashboardLayout