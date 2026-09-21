import { FaCircle } from "react-icons/fa";

import AvatarWithXpRing from "./avatarWithXpRing/AvatarWithXpRing";
import "./profileCard.css";

export default function ProfileCard() {
    return (
        <div className="profileWrapper">
            <AvatarWithXpRing />
            <div className="profileInfoWrapper">
                <span className="profileCardUsername">GetRektByNoob</span>
                <div className="profileCardStatus">
                    <FaCircle />
                    <span>Online</span>
                </div>
            </div>
        </div>
    );
}