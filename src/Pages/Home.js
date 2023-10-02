import { Outlet } from "react-router-dom";
import Corousel from "../HomePage.js";
function Home() {

return(
    <>
    <Corousel/>
    <main>
    <Outlet/>
    </main>
    </>
)
    
}
export default Home