import React from "react";
import Data from "../homejam.json";

const ReviewCard = () => {
  return (
    <>
      {Data.Reviews.map((data, index) => {
        return (
            <div  key={index}
              className="bg-gray-900 w-360 h-248 rounded-2xl border-2 border-yellow-500 hover:hover:border-sky-500"
              style={{ boxShadow: "8px -8px 0px rgba(39, 108, 115, 1)", minHeight:'248px', minWidth:'360px'}}
            >
              <div className="py-8 px-5">
                <div className="flex gap-5 flex-col">
                  <div className="flex gap-3">
                    <img
                      src={require(`../images/${data.image}`)}
                      className="h-12 w-12 rounded-full"
                      alt=""
                    />
                    <div className="flex flex-col gap-1">
                      <h1 className="text-white">{data.name}</h1>
                      <h1 className="text-yellow-600 opacity-80 text-xs uppercase">
                        {data.state}
                      </h1>
                    </div>
                  </div>
                  <div className="text-white opacity-80">
                    <h1>{data.text}</h1>
                  </div>
                </div>
              </div>
            </div>
        );
      })}
    </>
  );
};

export default ReviewCard;
