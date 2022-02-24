import React, { useState } from "react";
import Data from "../homejam.json";
  

const Elements = () => {
  const [isactive, setIsactive] = useState(null);
  const handleActive = (e) => {
      setIsactive(Number(e.target.id));
     
  };

  return (
    <div className="flex justify-between px-16 mt-72 overflow-x-auto">
      {Data.elements.map((data, index) => {
        return (
          <div key={index} id={index}
            onClick={handleActive}
            className={`rounded-full h-40 w-40 border hover:border-sky-500 hover:border-4 flex flex-col text-white justify-center items-center ${
              isactive === index ? `border-2 border-purple-300` : `border-gray-400`
            }`}
          >
            <h1 className={`${isactive === index? `text-blue-500`: `text-white`}`}>
              <i className={`bi bi-${data.icon}`}></i>
            </h1>
            <h1>{data.title}</h1>
            <h1>{data.label}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Elements;
