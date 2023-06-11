"use client";

import Button from "./Button";
import { BiBox } from "react-icons/bi";

interface BoxCardProps {
  name: string;
  description?: string;
}

const BoxCard: React.FC<BoxCardProps> = ({ name, description }) => {
  return (
    <div
      dir="rtl"
      className=" relative flex flex-col border gap-y-4 p-10 w-full rounded-xl transition cursor-pointer duration-300 hover:shadow-md"
    >
      <BiBox size={30} className="absolute top-5 left-5" />
      <p className="text-xl font-semibold">{name}</p>
      <hr />
      <p className="text-md">{description}</p>
      <hr />
      <div className="flex gap-y-2">
        <p>تعداد آیتم :</p>
        <p></p>
      </div>
      <Button className="w-full bg-white text-black border">مشاهده باکس</Button>
    </div>
  );
};
export default BoxCard;
