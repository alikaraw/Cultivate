import { FaHome, FaUser  } from "react-icons/fa";
import { IoGameController, IoStorefront } from "react-icons/io5";

import NavItem from "./NavItem";
import CurrencyDisplay from "./currencyDisplay/CurrencyDisplay";

import "./Navbar.css"

export default function MainLayout() {
  return (
    <nav className="navbar style-wrapper">
        <img className="nav-logo" src="/assets/logo.png" alt="logo"/>
        <ul className="nav-links">
            <NavItem to="/Play" icon={<IoGameController />} label="Play" variant="variant-red" />
            <NavItem to="/Home" icon={<FaHome />} label="Home" variant="variant-yellow"/>
            <NavItem to="/Store" icon={<IoStorefront />} label="Store" variant="variant-green"/>
            <NavItem to="/Profile" icon={<FaUser />} label="Profile" variant="variant-blue"/>
            {/* <NavItem to="/Dashboard" icon={<FaUser />} label="Dashboard" variant="variant-colors"/> */}
        </ul>

        <CurrencyDisplay />
    </nav>
  );
}