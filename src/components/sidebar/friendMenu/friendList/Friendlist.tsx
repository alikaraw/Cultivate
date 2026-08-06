import type { PopupPosition } from "../../../../types/PopupPosition";
import FriendlistItem from "./FriendlistItem";
import "./Friendlist.css"

type FriendListProps = {
    onFriendClick: (
        username: string,
        position: PopupPosition
    ) => void;
};

export default function FriendList({ onFriendClick } : FriendListProps) {
    return (
        <div className="friendListWrapper">
            <p>Online · 0</p>
            <div className="friendListSection">
                <FriendlistItem onFriendClick={onFriendClick}/>
                <FriendlistItem onFriendClick={onFriendClick}/>
                <FriendlistItem onFriendClick={onFriendClick}/>
                <FriendlistItem onFriendClick={onFriendClick}/>
                <FriendlistItem onFriendClick={onFriendClick}/>
                <FriendlistItem onFriendClick={onFriendClick}/>

            </div>

            <p>Offline · 0</p>
            <div className="friendListSection">  
                <FriendlistItem onFriendClick={onFriendClick}/>
                <FriendlistItem onFriendClick={onFriendClick}/>
                <FriendlistItem onFriendClick={onFriendClick}/>
                <FriendlistItem onFriendClick={onFriendClick}/>
                <FriendlistItem onFriendClick={onFriendClick}/>
                <FriendlistItem onFriendClick={onFriendClick}/>
            </div>
        </div>
    );
}