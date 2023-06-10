"use client";

import next from "next/types";
import { Righteous } from "next/font/google";
import { twMerge } from "tailwind-merge";

const righteous = Righteous({ weight: ["400"], subsets: ["latin"] });

const Logo = () => {
  return (
    <div
      className={twMerge(
        "flex flex-row items-center gap-x-3",
        righteous.className
      )}
    >
      <h1 className="font-bold text-3xl">InJust</h1>
    </div>
  );
};
export default Logo;
