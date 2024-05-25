import { NavLink } from "react-router-dom"

function Error() {
    return <>
        <h1 className="my-20 text-center text-red-600">404 page not found</h1>
        <NavLink to="/" className="text-green-700 text-center">Homepage</NavLink>
    </>
}

export default Error