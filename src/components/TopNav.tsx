import React from 'react';
import notification from "../assets/icons/Notification.png"
import userIcon from "../assets/icons/Ellipse 185.png"

const TopNav = () => {
    return (
        <nav className="flex md:h-[100px] h-[70px] items-center justify-between md:px-10 px-6 py-2 border-b border-gray-400">
            <div className="font-semibold md:text-3xl text-2xl">ABCHotel</div>
            <div className="inline-flex items-start md:gap-[40px] gap-6 ">
                <img
                    className="md:w-[48px] w-[36px]"
                    alt="bell"
                    src={notification}
                />
                <img
                    className="md:w-[48px] w-[40px]"
                    alt="profile_icon"
                    src={userIcon}
                />
            </div>
        </nav>
    );
};

export default TopNav;