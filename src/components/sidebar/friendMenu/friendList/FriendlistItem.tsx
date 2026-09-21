import type { PopupPosition } from "../../../../types/PopupPosition";

type FriendListItemProps = {
    avatar: string;
    username: string;
    status: string;
    state: string;
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
    state = "online",
    onFriendClick,
}: FriendListItemProps) {
    return (
        <div 
            className={"FriendListItemWrapper " + state} 
            onClick={(event) => {
                const rect = event.currentTarget.getBoundingClientRect();

                onFriendClick(username, {
                    x: rect.left,
                    y: rect.top
                })
            }}>
            <img src={avatar} alt="Friend Avatar"/>
            <div>
                <p className="FriendListItemUsername">{username}</p>
                <p className="FriendListItemStatus">{status}</p>
            </div>
        </div>
    );
}