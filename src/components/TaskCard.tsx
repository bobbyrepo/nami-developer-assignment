import React from 'react';
import spoonIcon from "../assets/icons/spoon.png"
import redDotIcon from "../assets/icons/reddot.png"
import onceIcon from "../assets/icons/once.png"
import repeatIcon from "../assets/icons/repeat.png"
import greenClockIcon from "../assets/icons/greenclock.png"
import redClockIcon from "../assets/icons/redclock.png"
import calenderIcon from "../assets/icons/calender.png"

function TaskCard() {
    return (
        <div
            className="flex flex-col justify-start items-start gap-3 p-2 rounded-xl border-[0.5px] border-gray-400"
        >
            <div className="w-full flex justify-start items-between">
                <div className="flex items-center gap-1">
                    <div
                        className="flex  items-center gap-[5px] px-1 py-0.5 rounded bg-[#f7f7f7]"
                    >
                        <img src={spoonIcon} alt="" />
                        <p className="text-xs font-semibold text-left text-[#1a0a02]">
                            Rajesh
                        </p>
                        <img src={redDotIcon} alt="" />
                    </div>
                    <div
                        className="px-2 py-1 rounded-[20px] bg-[#f7f7f7]"
                    >
                        <p className="text-xs font-medium text-left text-[#f1ae11]">
                            Ongoing
                        </p>
                    </div>
                    <div
                        className=" px-1 py-0.5 rounded-[20px] bg-[#f7f7f7]"
                    >
                        <img src={onceIcon} alt="" />

                    </div>
                </div>
                <div className="flex flex-col justify-start items-end flex-grow gap-2.5">
                    <div
                        className="flex items-center gap-1 px-1 py-0.5 rounded-[20px] bg-[#d7ffe7]"
                    >
                        <img src={greenClockIcon} alt="" />

                        <p className="text-sm font-medium text-left text-[#00a441]">20min</p>
                    </div>
                </div>
            </div>

            <div
                className="w-full flex justify-between items-startgap-[15px]"
            >
                <p className="w-[234px] text-base font-semibold text-left text-[#1a0a02]">
                    Routine Cleaning
                </p>
                <div
                    className="flex justify-center items-center gap-2.5 px-2 py-1 rounded-[20px] bg-[#f7f7f7]"
                >
                    <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#5f69c7]">
                        Internal Task
                    </p>
                </div>
            </div>
            <div className="w-full flex justify-between items-center">
                <div
                    className="flex items-center w-[151.5px] relative gap-[5px]"
                >
                    <img src={calenderIcon} alt="" />
                    <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#767676]">
                        21 Jul 2024 | 03:00 am
                    </p>
                </div>
                <p className="text-xs font-medium text-left text-[#767676]"># 68988</p>
            </div>
            <div className="w-full flex justify-between items-center">
                <p className="text-xs font-semibold text-left text-[#767676]">
                    From:Pantry
                </p>
                <p className="text-xs font-semibold text-left text-[#767676]">
                    To:Reception
                </p>
            </div>
        </div >
    )
}

export default TaskCard