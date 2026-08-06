import type React from "react";
import AddFriendGridItem from "./AddFriendGridItem"
import "./AddFriendGrid.css"

type AddFriendGridProps ={
    title: string;
    children : React.ReactNode;
    onClick: () => void;
    buttonIcon: React.ReactNode;
}

export default function AddFriendGrid( {
    title,
    children,
    onClick,
    buttonIcon
} : AddFriendGridProps) {
    return (
        <div className="AddFriendGridWrapper">
            <p>{title}</p>
                <div className="AddFriendGridContent">
                    <AddFriendGridItem 
                        // avatar=""
                        // username=""
                        // onClick={}
                        buttonIcon = {buttonIcon}
                    />
                    <AddFriendGridItem 
                        // avatar=""
                        // username=""
                        // onClick={}
                        buttonIcon = {buttonIcon}
                    />
                    <AddFriendGridItem 
                        // avatar=""
                        // username=""
                        // onClick={}
                        buttonIcon = {buttonIcon}
                    />
                    <AddFriendGridItem 
                        // avatar=""
                        // username=""
                        // onClick={}
                        buttonIcon = {buttonIcon}
                    />
                    <AddFriendGridItem 
                        // avatar=""
                        // username=""
                        // onClick={}
                        buttonIcon = {buttonIcon}
                    />
                    <AddFriendGridItem 
                        // avatar=""
                        // username=""
                        // onClick={}
                        buttonIcon = {buttonIcon}
                    />
                    <AddFriendGridItem 
                        // avatar=""
                        // username=""
                        // onClick={}
                        buttonIcon = {buttonIcon}
                    />
                    <AddFriendGridItem 
                        // avatar=""
                        // username=""
                        // onClick={}
                        buttonIcon = {buttonIcon}
                    />
                    <AddFriendGridItem 
                        // avatar=""
                        // username=""
                        // onClick={}
                        buttonIcon = {buttonIcon}
                    />
                </div>
        </div>
    )
} 