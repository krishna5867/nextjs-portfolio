import React from "react";
import CardImage from "../assets/Rectangle 16.png";
import Image from "next/image";

const card = () => {
  return (
    <div className="p-2 rounded-xl ">
      <div className="shadow-md rounded-xl p-2 w-[300px]">
        <div className="mx-auto w-full">
          <Image src={CardImage} alt="card image" className="rounded-xl" />
          <div className="mt-4 flex justify-between">
            <button className="p-2 bg-green-500 rounded-md px-4 mr-2">
              Github
            </button>
            <button className="bg-blue-500 rounded-md px-4">Live</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default card;
