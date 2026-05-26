import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

function Layout() {
    return (
        <div className="App">
            <header>
                <Navigation />
            </header>
            <main>
                <Outlet />
            </main>
            <hr />
            <Footer />
        </div>
    );
}

export default Layout;