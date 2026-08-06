import { RxCross1 } from "react-icons/rx";
import { FaUserPlus } from "react-icons/fa";
import { ImCross } from "react-icons/im";

import { useState } from "react";
import AddFriendGrid from  "./AddFriendGrid"
import "./AddFriendModal.css"


type AddFriendModalProps = {
    onClose: () => void;
}

export default function AddFriendModal({ onClose } : AddFriendModalProps) {
    const [username, setUsername] = useState("");

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        setUsername("");
    }

    return (
        <div className="modalOverlay" onClick={ onClose }>
            <div 
                className="modal"
                onClick={(e) => e.stopPropagation()}
            >
                <button 
                    className="exitButton"
                    onClick={ onClose }
                    >
                    <ImCross/>
                </button>

                <span>ADD FRIENDS</span>
                <form className="modalInputContainer" onSubmit={handleSubmit}>
                    <input 
                        placeholder="Enter Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <button type="submit">Add Friend</button>
                </form>
                <div className="modalContent">
                    <AddFriendGrid 
                        title="sent friend requests"
                        children = {[]}
                        buttonIcon = {<RxCross1/>}
                        onClick={() => {}}
                    />
                    
                    <AddFriendGrid 
                        title="recently played with"
                        children = {[]}
                        buttonIcon = {<FaUserPlus/>}
                        onClick={() => {}}
                    />
                </div>
            </div>
        </div>
    );
}

