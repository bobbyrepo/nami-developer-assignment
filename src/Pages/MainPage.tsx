import React from 'react';
import TopNav from "../components/TopNav";
import SideNav from "../components/SideNav";
import { tasksData } from '../utils/tasksData';
import TaskCard from '../components/TaskCard';

const status: string[] = [
    "Not Accepted",
    "Ongoing",
    "Scheduled",
    "Completed",
    "Delayed",
    "Ontime"
];

function MainPage() {
    return (<>
        <div className="hidden sm:block">
            <TopNav />
        </div>
        <div className="mx-5 mt-10 flex gap-8">
            <div className="md:w-[18%] w-[40%]"> <SideNav /></div>
            <div className="md:w-[82%] w-[60%]">
                <h1 className="text-2xl font-semibold">Tasks of the day</h1>
                <div className="flex flex-wrap gap-2 mt-4 text-sm font-medium ">
                    {status.map((data, id) => (
                        <div key={id} className="px-2 py-1 text-gray-500 border-2 border-gray-300 rounded-full">{data}</div>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-6 mr-6">
                    {/* Task cards */}
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                </div>
            </div>
        </div>
    </>
    )
}

export default MainPage