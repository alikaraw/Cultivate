import { Outlet, NavLink} from "react-router-dom";
import "./MainLayout.css";

export default function MainLayout() {
  return (
    <div className="main-layout">
    <nav className="navbar">
        <ul className="nav-links">
            <li>
                <NavLink 
                    to="/Lobby"
                    className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                        Create Lobby
                </NavLink>
            </li>

            <li>
                <NavLink 
                    to="/Home"
                    className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                        Home
                </NavLink>
            </li>

            <li>
                <NavLink 
                    to="/Store"
                    className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                        Store
                </NavLink>
            </li>
        </ul>

        <div className="currency-container">
            <p>1200</p>
            <img src="/assets/currency.png"/>
        </div>
      </nav>

    <main className="page-content">
        <Outlet />
      </main>

    <aside className="sidebar">
        Sidebar
      </aside>
    </div>
  );
}