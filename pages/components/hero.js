import React from "react";
import Photo from "../assets/Rectangle 16.png";
import Image from "next/image";
const hero = () => {
  return (
    <>
      <div className="flex justify-around items-center h-[50vh]">
        <div className="max-w-md p-6 shadow-md ">
          <div className="text-4xl font-bold mb-5">KRISHNA KUMAR</div>
          lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum
          dolar sits
        </div>
        <div className="max-w-md border-2 bg-slate-500 p-4 rounded-xl ">
          <Image src={Photo} alt="Photo" />
        </div>
      </div>
    </>
  );
};

export default hero;
