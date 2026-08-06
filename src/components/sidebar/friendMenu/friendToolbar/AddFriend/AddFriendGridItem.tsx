import type { ReactNode } from "react";
import "./AddFriendGridItem.css"

type AddFriendGridItem = {
    avatar: string;
    username: string;
    onclick: () => void;
    buttonIcon: ReactNode;
}

export default function AddFriendGridItem({ 
    avatar = "/assets/blank_profile1.png", 
    username = "Username", 
    onclick,
    buttonIcon
} : AddFriendGridItem) {
    return (
        <div className="AddFriendGridItemWrapper">
            <img src={avatar} alt="Friend Avatar" />
            <span>{username}</span>
            <button onClick={onclick}>
                {buttonIcon}
            </button>
        </div>
    );
}

