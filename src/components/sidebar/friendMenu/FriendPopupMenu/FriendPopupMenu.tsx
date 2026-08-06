import { BsPersonCircle } from "react-icons/bs";

import { useLayoutEffect, useRef, useState } from "react";
import type { PopupPosition } from '../../../../types/PopupPosition';
import './FriendPopupMenu.css'

type FriendPopupMenuProps = {
        position: PopupPosition | null;
}

export default function FriendPopupMenu({position} : FriendPopupMenuProps) {
    const popupRef = useRef<HTMLDivElement>(null);

    const [finalPosition, setFinalPosition] = useState<PopupPosition | null>(null);

    useLayoutEffect(() => {
        if (!position || !popupRef.current) return;

        const popup = popupRef.current.getBoundingClientRect();

        const gap = 10;

        let x = position.x - popup.width - 10;
        let y = position.y;

        // If popup goes outside the left side
        if (x < 0) {
            x = position.x + gap;
        }

        // If popup goes below the screen
        if (y + popup.height > window.innerHeight) {
            y = window.innerHeight - popup.height - gap;
        }

        setFinalPosition({
            x,
            y
        });

    }, [position]);

    if (!position) return null;

    return (
        <div 
            ref={popupRef}
            className="FriendPopupMenuWrapper"
            style={{
                left: finalPosition?.x,
                top: finalPosition?.y
            }}
            >
                
            <div>
                <span>Invite to lobby</span>
            </div>
            <div>
                <span>View profile</span>
            </div>
            <div>
                <span>Remove friend</span>
            </div>
            <div>
                <span>Block user</span>
            </div>
        </div>
    );
}