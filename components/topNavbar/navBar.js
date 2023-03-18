import Image from "next/image";
import React from "react";

import emailPng from "../../assets/png/email.png";
import mobilePng from "../../assets/png/mobile.png";

const NavbarBar = () => {
  return (
    <div className="py-2 px-2 lg:px-6">
      {/*  */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="">
          <image
            src="/img/logo.png"
            className="h-24 md:h-36 w-full md:w-1/2 object-contain"
            alt=""
          />
        </div>
        <div>
          <div className="flex gap-3 justify-center text-center">
            <Image src={emailPng} className="" alt="webure email"/>
            <p className="font-semibold lg:font-bold">
              connect@weburetech@gmail.com
            </p>
            <Image src={mobilePng} className="" alt="webure mobile"/>
            <p className="font-semibold lg:font-bold">080 694 53922</p>
            <p className="font-semibold lg:font-bold">080-456-81178</p>
          </div>
          <hr className="mt-2" />
        </div>
      </div>
    </div>
  );
};

export default NavbarBar;
