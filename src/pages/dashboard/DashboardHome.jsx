import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"

function DashboardHome() {
    const { user } = useContext(AuthContext)
    const { displayName, email, photoURL } = user
    return <>
        <div className="flex justify-center items-center">
            <div className='flex justify-center flex-col items-center'>
                <h1 className='text-center text-2xl my-5 font-semibold'>User Information</h1>
                <div className="bg-slate-200 border border-slate-900 shadow-md px-2 py-5 md:px-16 md:py-14 flex flex-col items-center">
                    <img src={photoURL} className="my-2 w-36 h-36 rounded-full" alt="" />
                    <h1 className='text-xl font-bold mt-2'>{displayName}</h1>
                    <h1 className='text-xl font-bold mt-2'>{email}</h1>
                </div>
            </div>
        </div>
    </>
}

export default DashboardHome