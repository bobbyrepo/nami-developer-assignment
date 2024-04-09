import React from 'react'
import homeIcon from "../assets/icons/blueHome.png"
import addIcon from "../assets/icons/add.png"
import consoleIcon from "../assets/icons/console.png"

function MobileFooter() {
    return (
        <div className="flex flex-col-reverse justify-center items-center space-y-[-28px] space-y-reverse">
            <div
                className="w-full flex justify-between items-end gap-1 px-[15%] py-3 rounded-tl-xl rounded-tr-xl bg-white"
                style={{ boxShadow: '0px -3px 12px 0 rgba(0,0,0,0.1)' }}
            >
                <div className="flex flex-col justify-center items-center gap-1">
                    <img className='w-7' src={homeIcon} alt="" />
                    <p className="text-[14px] font-medium text-left text-[#5f69c7]">Home</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-1">
                    <img className='w-7' src={consoleIcon} alt="" />
                    <p className="text-[14px] font-medium text-left text-[#1a0a02]">
                        Console
                    </p>
                </div>
            </div >
            <div
                className="flex justify-center items-center gap-2 p-4 z-10 rounded-[48px] bg-[#5f69c7]"
            >
                <img src={addIcon} alt="" />
            </div>
        </div>
    )
}

export default MobileFooter