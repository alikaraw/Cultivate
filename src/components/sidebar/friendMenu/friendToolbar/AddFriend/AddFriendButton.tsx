import { FaUserPlus } from "react-icons/fa";

type AddFriendButtonProps = {
    onOpen: () => void;
}

export default function AddFriendButton({ onOpen }: AddFriendButtonProps) {
    return (
        <button onClick={onOpen}>
            <FaUserPlus/>
        </button>
    );
}