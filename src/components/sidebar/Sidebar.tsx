import "./Sidebar.css";
import ProfileCard from "./profileCard/profileCard"
import FriendMenu from "./friendMenu/friendMenu";

export default function Sidebar() {
  return (
    <aside className="sidebar">
        <ProfileCard />
        {/* <FriendMenu /> */}
    </aside>
  );
}