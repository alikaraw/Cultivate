import type { PopupPosition } from "../../../../types/PopupPosition";

type FriendListItemProps = {
    avatar: string;
    username: string;
    status: string;
    isOnline: boolean;
    onFriendClick: (
        username: string,
        position: PopupPosition
    ) => void;
};
import "./FriendListItem.css"

export default function FriendlistItem({
    avatar = "/assets/blank_profile1.png",
    username = "Username",
    status = "Status",
    isOnline = true,
    onFriendClick,
}: FriendListItemProps) {
    return (
        <div 
            className={"FriendListItemWrapper " + (!isOnline ? "offline" : "")} 
            onClick={(event) => {
                const rect = event.currentTarget.getBoundingClientRect();

                onFriendClick(username, {
                    x: rect.left,
                    y: rect.top
                })
            }}>
            <img src={avatar} alt="Friend Avatar"/>
            <div>
                <p className="FriendListItem_Username">{username}</p>
                <p className="FriendListItem_Status">{status}</p>
            </div>
        </div>
    );
}