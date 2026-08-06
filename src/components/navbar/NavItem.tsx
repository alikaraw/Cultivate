import { NavLink} from "react-router-dom";
import "./NavItem.css";

type NavItemProps = {
  to: string;
  icon: React.ReactNode;
  label: string;
  variant: string;
};

export default function NavItem({to, icon, label, variant} : NavItemProps) {
    return (
        <li>
            <NavLink 
                to={to}
                className = {({ isActive }) => isActive ? "nav-item active " + variant : "nav-item"}>
                    {icon}
                    <span>{label}</span>
            </NavLink>
        </li>
    );
}