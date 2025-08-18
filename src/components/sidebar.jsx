import React, { useState, useEffect } from "react";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { IoRocketOutline } from "react-icons/io5";
import { BsCardText } from "react-icons/bs";
import { PiHandbagSimpleLight } from "react-icons/pi";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { TbWallet } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import greenicon from "../assets/greenicon.png";
import { BsStars } from "react-icons/bs";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import Icons from "./icons";

const Sidebar = () => {
  const [showSide, setshowSide] = useState(false);
  useEffect(() => {
    if (showSide) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showSide]);
  return (
    <div>
      <div className="hidden md:flex">
        <div className=" md:fixed  left-0 top-0 z-[1] h-full w-[180px] bg-[#11A38A] ">
          <h1 className="flex items-center gap-1 ml-[15px] text-white text-2xl font-bold">
            <img className="w-[30px] h-[30px]" src={greenicon} /> Bota
          </h1>
          <Icons Header="Dashboard" Image={<HiOutlineSquares2X2 />} />
          <Icons Header="Ad Boosts" Image={<IoRocketOutline />} />
          <Icons Header="Orders" Image={<BsCardText />} />
          <Icons Header="Goods" Image={<PiHandbagSimpleLight />} />
          <Icons Header="Lead Gen" Image={<LuChartNoAxesCombined />} />
          <Icons Header="Wallet" Image={<TbWallet />} />
          <Icons Header="Settings" Image={<CgProfile />} />
          <Icons Header="Get Leads" Image={<BsStars />} />
        </div>
      </div>
      <div className=" md:hidden cursor-pointer p-4 fixed top-4 left-4 z-50">
        <CiMenuBurger
          size={30}
          className="text-[#11A38A]"
          onClick={() => setshowSide(true)}
        />
      </div>

      <div
        className={`md:hidden ${
          showSide ? "fixed w-full" : "h-0 w-0 p-0 m-0"
        } right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}
      >
        <div className="flex justify-end p-3 cursor-pointer">
          <div onClick={() => setshowSide(false)}>
            <IoMdClose />
          </div>
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-large font-medium">
          <a href="" className="px-4 py-2 rounded-full inline-block">
            Dashboard
          </a>
          <a
            onClick={() => setshowSide(false)}
            href=""
            className="px-4 py-2 rounded-full inline-block"
          >
            Ad Boost
          </a>
          <a
            onClick={() => setshowSide(false)}
            href=""
            className="px-4 py-2 rounded-full inline-block"
          >
            Orders
          </a>
          <a
            onClick={() => setshowSide(false)}
            className="px-4 py-2 rounded-full inline-block"
          >
            Goods
          </a>
          <a
            onClick={() => setshowSide(false)}
            href=""
            className="px-4 py-2 rounded-full inline-block"
          >
            Lead Gen
          </a>
          <a
            onClick={() => setshowSide(false)}
            href=""
            className="px-4 py-2 rounded-full inline-block"
          >
            Wallet
          </a>
          <a
            onClick={() => setshowSide(false)}
            href=""
            className="px-4 py-2 rounded-full inline-block"
          >
            Settings
          </a>
          <a
            onClick={() => setshowSide(false)}
            href=""
            className="px-4 py-2 rounded-full inline-block"
          >
            Get Leads
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
