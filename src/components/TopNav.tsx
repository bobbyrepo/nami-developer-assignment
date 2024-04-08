import React from 'react';
import notification from "../assets/icons/Notification.png"
import userIcon from "../assets/icons/Ellipse 185.png"

const TopNav = () => {
    return (
        <nav className="flex h-[100px] items-center justify-between px-10 py-2 border-b border-gray-400">
            <div className="font-semibold text-3xl">ABCHotel</div>
            <div className="inline-flex items-start gap-[40px] ">
                <img
                    className="w-[48px] h-[48px]"
                    alt="bell"
                    src={notification}
                />
                <img
                    className="w-[48px] h-[48px]"
                    alt="profile_icon"
                    src={userIcon}
                />
            </div>
        </nav>
    );
};

export default TopNav;