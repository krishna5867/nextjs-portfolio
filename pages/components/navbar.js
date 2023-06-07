import React from "react";
import Link from "next/link";

const navbar = () => {
  return (
    <>
      <div className="max-w-full text-[#fff] h-20 bg-gray-900 flex justify-between items-center px-6 shadow">
        <ul className="text-decoration-none">
          <Link href="/">
            <li className="text-3xl font-bold">
              <span className="text-red-500">Port</span>folio
            </li>
          </Link>
        </ul>
        <ul className="sm:flex text-xl font-semi-bold hidden">
          <Link href="/about">
            <li className="mr-4 py-1 px-2 rounded-xl hover:bg-slate-700 cursor-pointer">
              About
            </li>
          </Link>
          <Link href="/projects">
            <li className="mr-4 py-1 px-2 rounded-xl hover:bg-slate-700 cursor-pointer">
              Projects
            </li>
          </Link>

          <Link href="/contact">
            <li className="mr-4 py-1 px-2 rounded-xl hover:bg-slate-700 cursor-pointer">
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default navbar;
