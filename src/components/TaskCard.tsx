import React from 'react';
import { tasksData } from '../utils/tasksData';
import spoonIcon from "../assets/icons/spoon.png"
import redDotIcon from "../assets/icons/reddot.png"
import onceIcon from "../assets/icons/once.png"
import repeatIcon from "../assets/icons/repeat.png"
import greenClockIcon from "../assets/icons/greenclock.png"
import redClockIcon from "../assets/icons/redclock.png"
import starIcon from "../assets/icons/Star 9.png"
import calenderIcon from "../assets/icons/calender.png"
import checkedCircleIcon from "../assets/icons/check_circle_outline.png"

function TaskCard() {
    return (

        <>
            {tasksData.map((task, index) => (
                <div
                    key={index}
                    className="flex flex-col min-w-[300px] h-fit justify-start items-start gap-3 p-2 rounded-xl border-[0.5px] border-gray-400"
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
                            {task.taskStatus.map((status, index) => (
                                <>
                                    {status == "Not Accepted" && <div key={index} className="flex justify-center items-center px-2 py-1 rounded-[20px] bg-[#f7f7f7]">
                                        <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-red-600">{status}</p>
                                    </div>}
                                    {status == "Delayed" && <div key={index} className="flex justify-center items-center px-2 py-1 rounded-[20px] bg-[#cc2610]">
                                        <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-white">{status}</p>
                                    </div>}
                                    {status == "Complaint" && <div key={index} className="flex justify-center items-center px-2 py-1 rounded-[20px] bg-[#cc2610]">
                                        <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-white">{status}</p>
                                    </div>}
                                    {status == "Ongoing" && <div key={index} className="flex justify-center items-center px-2 py-1 rounded-[20px] bg-[#f7f7f7]">
                                        <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#f1ae11]">{status}</p>
                                    </div>}
                                    {status == "On-Time" && <div key={index} className="flex justify-center items-center px-2 py-1 rounded-[20px] bg-green-600">
                                        <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-white">{status}</p>
                                    </div>}
                                </>
                            ))}
                            <div className=" px-1 py-0.5 rounded-[20px] bg-[#f7f7f7]">
                                {task.taskRepeat ? (<img src={repeatIcon} alt="" />) : (<img src={onceIcon} alt="" />)}
                            </div>
                        </div>
                        {task.pendingStatus.pending &&
                            <div className="flex flex-col justify-start items-end flex-grow gap-2.5">
                                {
                                    task.pendingStatus.taskTime > 1 ?
                                        (<div className="flex items-center gap-1 px-1 py-0.5 rounded-[20px] bg-[#d7ffe7]">
                                            <img src={greenClockIcon} alt="" /><p className="text-sm font-medium text-left text-green-600">{task.pendingStatus.taskTime}min</p>  </div>)
                                        :
                                        (<div className="flex items-center gap-1 px-1 py-0.5 rounded-[20px] bg-red-200">
                                            <img src={redClockIcon} alt="" /><p className="text-sm font-medium text-left text-red-600">{task.pendingStatus.taskTime}min</p>  </div>)
                                }
                            </div>
                        }
                        {task.rating.rated &&
                            <div className="flex flex-col justify-start items-end flex-grow gap-2.5">
                                {
                                    task.rating.star > 1 ?
                                        (<div className="flex items-center gap-1 px-2 py-0.5 rounded-[20px] bg-green-600">
                                            <p className="text-sm font-medium text-left text-white">{task.rating.star}</p>
                                            <img src={starIcon} alt="" />
                                        </div>)
                                        :
                                        (<div className="flex items-center gap-1 px-2 py-0.5 rounded-[20px] bg-[#cc2610]">
                                            <p className="text-sm font-medium text-left text-white">{task.rating.star}</p>
                                            <img src={starIcon} alt="" />
                                        </div>)
                                }
                            </div>
                        }
                    </div>

                    <div className="w-full flex justify-between items-startgap-[15px]">
                        <p className="w-[234px] text-base font-semibold text-left text-[#1a0a02]">
                            Routine Cleaning
                        </p>
                        <div className="flex justify-center items-center gap-2.5 px-2 py-1 rounded-[20px] bg-[#f7f7f7]">
                            {task.taskType == "Internal Task" && (
                                <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#5f69c7]">
                                    Internal Task
                                </p>
                            )}
                            {task.taskType == "Guest Task" && (
                                <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-red-500">
                                    Guest Task
                                </p>
                            )}

                        </div>
                    </div>
                    <div className="w-full flex justify-between items-center">
                        <div className="flex items-center w-[151.5px] relative gap-[5px]">
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

                    {task.btnText == "Notify Staff" && <div
                        className={`flex justify-center items-center self-stretch gap-2 px-3 py-2 rounded-[20px] ${task.pendingStatus.taskTime > 1 ? `bg-[#5f69c7]` : `bg-[#cc2610]`}`}
                    >
                        <img src={checkedCircleIcon} alt="" />
                        <p className="text-xs font-medium text-left text-[#ffece2]">Notify Staff</p>
                    </div>
                    }
                    {task.btnText == "View Details" && <div
                        className="flex justify-center items-center self-stretch gap-2 px-3 py-2 rounded-[20px] border border-[#5f69c7]"
                    >
                        <p className="text-xs font-medium text-left text-[#5f69c7]">
                            View Details
                        </p>
                    </div>
                    }


                </div >
            ))}

        </>
    )
}

export default TaskCard