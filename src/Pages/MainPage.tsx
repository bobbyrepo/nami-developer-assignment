import React, { useState, useEffect } from 'react';
import TopNav from "../components/TopNav";
import MobileHeader from '../components/MobileHeader';
import SideNav from "../components/SideNav";
import TaskCard from '../components/TaskCard';
import MobileFooter from '../components/MobileFooter';

const status: string[] = [
    "Not Accepted",
    "Ongoing",
    "Scheduled",
    "Completed",
    "Delayed",
    "Ontime"
];

function MainPage() {
    const [mobileView, setMobileView] = useState(window.innerWidth < 640);

    useEffect(() => {
        const handleResize = () => {
            setMobileView(window.innerWidth < 640);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {mobileView ? (
                <>
                    <MobileHeader />
                    <div className="flex flex-wrap gap-1 mt-4 px-4 text-[12px] font-medium ">
                        {status.map((data, id) => (
                            <div key={id} className="px-2 py-1 text-gray-500 border-2 border-gray-300 rounded-full">{data}</div>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 gap-3 mt-4 px-4">
                        {/* Task cards */}
                        <TaskCard />
                    </div>
                    <div className="sticky bottom-0">
                        <MobileFooter />
                    </div>
                </>
            ) : (
                <>
                    <TopNav />
                    <div className="mx-5 sm:mt-10 mt-6 flex lg:gap-8 gap-4">
                        <div className="hidden sm:block lg:w-[20%] md:w-[220px]"> <SideNav /></div>
                        <div className="md:w-[82%] ">
                            <h1 className="hidden sm:block md:text-2xl text-[23px] font-semibold">Tasks of the day</h1>
                            <div className="flex flex-wrap sm:gap-2 gap-1 sm:mt-4 sm:text-sm text-[12px] font-medium ">
                                {status.map((data, id) => (
                                    <div key={id} className="px-2 py-1 text-gray-500 border-2 border-gray-300 rounded-full">{data}</div>
                                ))}
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mg:gap-8 gap-3 mt-6 mg:mr-6">
                                {/* Task cards */}
                                <TaskCard />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default MainPage;
