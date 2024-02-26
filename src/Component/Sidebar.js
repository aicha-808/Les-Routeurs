import { Link } from "react-router-dom";

export const SideBar = () => {

    return(
        <aside className="sidebar bg-secondary pt-4">
            <nav className=""> 
                <ul className="navbar-nav mx-auto">
                    <li className="mx-3"   > 
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="mx-3"   > 
                        <Link to="/product">Produit</Link>
                    </li>
                    <li className="mx-3"   > 
                        <Link to="/service">Services</Link>
                    </li>
                </ul>
            </nav>
        </aside>     
    )
}