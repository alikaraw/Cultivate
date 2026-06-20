import { Outlet, NavLink} from "react-router-dom";
import { FaHome, FaUser, FaCircle  } from "react-icons/fa";
import { IoGameController, IoStorefront } from "react-icons/io5";

import "./MainLayout.css";

export default function MainLayout() {
  return (
    <div className="main-layout">
        <div className="main-area">
            <nav className="navbar style-wrapper">
                <img className="nav-logo" src="/assets/logo.png" alt="logo"/>
                <ul className="nav-links">
                    <li>
                        <NavLink 
                            to="/Play"
                            className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                                <IoGameController />
                                <span>Play</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink 
                            to="/Home"
                            className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                                <FaHome/>
                                <span>Home</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink 
                            to="/Store"
                            className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                                <IoStorefront />
                                <span>Store</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/Profile"
                            className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                                <FaUser/>
                                <span>Profile</span>
                        </NavLink>
                    </li>
                </ul>
                

                <div className="currency-container">
                    <img src="/assets/currency.png" alt="currency" />
                    <span>54,321</span>
                </div>
            </nav>

            <main className="page-content style-wrapper">
                <Outlet />
            </main>
        </div>

        <aside className="sidebar">
            {/* <div className="profile-container">
                <img src="assets/blank_profile.png" alt="profile" />
                <div className="profile-information">
                    <span>Username</span>
                    <div>
                        <FaCircle/>
                        <span>Online</span>
                    </div>
                </div>
            </div> */}
        </aside>
    </div>
  );
}