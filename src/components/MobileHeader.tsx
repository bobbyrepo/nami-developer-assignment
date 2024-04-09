import React from 'react'
import searchIcon from "../assets/icons/search.png"
import notificationIcon from "../assets/icons/Notification.png"
import userIcon from "../assets/icons/Ellipse 185.png"


function MobileHeader() {
    return (
        <div className="flex justify-between items-center mx-6 mt-4">
            <p className="text-lg font-semibold text-left text-[#1a0a02]">
                Tasks of the Day
            </p>
            <div className="flex items-center gap-3">
                <img className='w-5' src={searchIcon} />
                <img className='w-8' src={notificationIcon} />
                <img className='w-9' src={userIcon} />
            </div>
        </div>

    )
}

export default MobileHeader