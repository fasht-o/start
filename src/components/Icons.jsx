import React from "react";
import { IoRocketOutline } from "react-icons/io5";
import lightning from "../assets/lightning.png";
const Icons = ({ Header, Image }) => {
  return (
    <>
      <div className="bg-[#11A38A] text-white flex flex-start gap-4 ml-[25px] mt-[35px] pl-[3px] p-2 hover:bg-white hover:text-black hover:cursor-pointer hover:opacity-90 ">
        <div className="mt-[4px]">{Image}</div>
        {Header}
      </div>
    </>
  );
};

export default Icons;
