import { FaCircle } from "react-icons/fa";

import AvatarWithXpRing from "./avatarWithXpRing/AvatarWithXpRing";
import "./profileCard.css";

export default function ProfileCard() {
    return (
        <div className="profile-container">
            <AvatarWithXpRing />
            <div className="profile-information">
                <span className="profileCardUsername">GetRektByNoob</span>
                <div className="profileCardStatus">
                    <FaCircle />
                    <span>Online</span>
                </div>
            </div>
        </div>
    );
}