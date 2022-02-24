import React from "react";
import Data from "../homejam.json";

const ProfileCard = () => {
  return (
    <>
      {Data.upcomingShows.map((data, index) => {
        return (
          <div
            key={index}
            className="h-387 w-268 bg-gradient-to-br from-purple-900 to bg-blue-900 rounded-lg"
          >
            <div className="bg-dark-blue h-387 w-268 rounded-lg -ml-2 mt-2">
              <img src={require(`../images/${data.image}`)} alt="" />
              <div className="px-5 my-6 flex flex-col gap-5">
                <div className=" flex flex-col gap-3">
                  <h1 className="bg-yellow-300 w-fit h-fit px-2 text-sm text-red-900">
                    {data.label}
                  </h1>
                  <h1 className="text-xl font-libre-baskerville text-white">
                    {data.title}
                  </h1>
                </div>

                <ul className="flex items-center justify-between">
                  <li>
                    <a href="/" className="text-bluish">
                      More info{" "}
                      <span>
                        <i className="ml-3 text-xl bi bi-arrow-right"></i>
                      </span>
                    </a>
                  </li>
                  <li className="rotate-90 text-violet-700 border-b border-b-gray-800">
                    <a href="/" className="text-2xl">
                      <i class="bi bi-ticket-perforated"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProfileCard;
