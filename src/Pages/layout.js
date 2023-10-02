import { Outlet } from "react-router-dom";
import Nav from "../Nav.js";
import Footer from "../footer.js";
function Layout() {

return(
    <>
    <Nav/>
    <main>
    <Outlet/>
    </main>
    <Footer/>
    </>
)
    
}
export default Layout