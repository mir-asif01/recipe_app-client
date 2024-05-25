import { useContext } from "react"
import Banner from "./home-components/Banner"
import SuccessStories from "./home-components/SuccessStories"
import { AuthContext } from "../context/AuthContext"

function Home() {

    const { user } = useContext(AuthContext)
    console.log(user);
    return <>
        <Banner />
        <SuccessStories />
    </>
}
export default Home