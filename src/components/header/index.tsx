import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className=" w-full h-[40px] bg-[#234E70] text-white flex justify-between items-center px-[1rem] md:px-[5rem] lg:px-[6rem]">
      {/* LogoName container */}
      <Link to="/" className="font-bold text-[1.5rem]">
        DZap
      </Link>
    </div>
  );
};
