import React from 'react';
import homeIcon from "../assets/icons/home.png"
import downIcon from "../assets/icons/downArrow.png"
import consoleIcon from "../assets/icons/console.png"
import attendenceIcon from "../assets/icons/attendence.png"
import overviewIcon from "../assets/icons/overview.png"
import staffIcon from "../assets/icons/staff.png"



function SideNav() {
    return (
        <div>
            {/* Home Link */}
            <div className="flex items-center gap-3 px-8 py-3 border-orange-600 border-solid bg-zinc-100 border-b-[5px]">
                <img src={homeIcon} alt="home" className="w-[5.5] h-5 ps-4" />
                <div className="text-lg font-semibold">Home</div>
            </div>
            {/* Console Dropdown */}
            <div className="flex items-center gap-3 px-3 py-3 ">
                <img className="down-icon" src={downIcon} alt="Down Arrow" />
                <img src={consoleIcon} alt="home" className="w-6" />
                <div className="text-lg font-semibold">Console</div>
            </div>
            <div className="">
                <div className="flex flex-col gap-2">
                    {/* Attendance */}
                    <div className="flex items-center gap-3 px-16 py-3">
                        <img src={attendenceIcon} alt="home" className="w-6" />
                        <div className="text-lg font-semibold">Attendence</div>
                    </div>
                    {/* Overview */}
                    <div className="flex items-center gap-3 px-16 py-3">
                        <img src={overviewIcon} alt="home" className="w-[5.5] h-5" />
                        <div className="text-lg font-semibold">Overview</div>
                    </div>
                    {/* Staff */}
                    <div className="flex items-center gap-3 px-16 py-3">
                        <img src={staffIcon} alt="home" className="w-5" />
                        <div className="text-lg font-semibold">Staff</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideNav;