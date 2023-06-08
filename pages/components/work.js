import React from "react";
import Card from "./card";
import Link from "next/link";

let array = ["1", "2", "3", "4", "5", "6", "7", "8"];

const Work = () => {
  return (
    <div>
      <span className="text-4xl font-bold flex justify-center mb-4">
        PROJECTS
      </span>
      <div className="flex flex-wrap justify-center">
        {array.map((item, index) => {
          return (
            <>
              <Link href={`/Project/${index + 1}`}>
                <Card key={item} item={item} />
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
