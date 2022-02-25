import React from "react";
import ProfileCard from "./ProfileCard";

const UpcomingShow = () => {
  return (
    <div className="flex flex-col pt-16 lg:pt-36 bg-blue-black px-2 lg:px-20 h-full w-full">
      <div className="text-white flex justify-between">
        <h1 className="font-libre-baskerville text-2xl">Upcoming Shows</h1>
        <a href="/" className="text-yellow-500 text-sm">View all</a>
      </div>
        <div className="my-10 mx-2 flex justify-between overflow-x-auto gap-5 pt-5 pr-5">
          <ProfileCard />
        </div>
    </div>
  );
};

export default UpcomingShow;
