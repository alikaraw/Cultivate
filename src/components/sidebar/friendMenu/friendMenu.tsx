import type { PopupPosition } from "../../../types/PopupPosition";
import { useState } from "react";
import AddFriendButton from "./friendToolbar/AddFriend/AddFriendButton";
import AddFriendModal from "./friendToolbar/AddFriend/AddFriendModal";
import SearchFriendButton from "./friendToolbar/SearchFriend/SearchFriendButton";
import SortFriendButton from "./friendToolbar/SortFriend/SortFriendButton";
import FriendList from "./friendList/Friendlist";
import FriendPopupMenu from "./FriendPopupMenu/FriendPopupMenu";
import "./friendMenu.css"

export default function FriendMenu() {
    const [isAddFriendOpen, setIsAddFriendOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<string | null>(null);
    const [popupPosition, setPopupPosition] = useState<PopupPosition | null>(null);

    function handleFriendClick(
        selectedUser: string, 
        position: PopupPosition
    ) {
        setSelectedUser(selectedUser);
        setPopupPosition(position);
    }

    return (
        <div className="friendMenu">
            <div className="friendToolbar">
                <span>SOCIALS</span>
                <div className="friendToolBarButtons">
                    <AddFriendButton 
                        onOpen ={() =>  {
                            console.log("open");
                            setIsAddFriendOpen(true)
                        }}
                    />
                    <SortFriendButton />
                    <SearchFriendButton />
                </div>
            </div>

            <FriendList onFriendClick={handleFriendClick}/>

            <FriendPopupMenu position={popupPosition}/>

            {isAddFriendOpen && (
                <AddFriendModal 
                    onClose ={() => setIsAddFriendOpen(false)}
                />
            )}

            
        </div>
    );
}