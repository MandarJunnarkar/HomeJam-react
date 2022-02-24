import React from "react";
import ProfileCard from "./ProfileCard";

const UpcomingShow = () => {
  return (
    <div className="flex flex-col pt-36 bg-blue-black px-20 h-full min-h-screen">
      <div className="text-white flex justify-between">
        <h1 className="font-libre-baskerville text-2xl">Upcoming Shows</h1>
        <a href="/">View all</a>
      </div>
      <div className="my-10 mx-2">
        <div className="flex justify-between">
          <ProfileCard />
        </div>
      </div>
    </div>
  );
};

export default UpcomingShow;
