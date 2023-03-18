import React, { useEffect, useRef, useState } from "react";
import style from "./automate.module.css";
import { Divdata } from "./divdata";
import { Singlediv } from "./Singlediv";

const Automate = () => {

  return (
    <div className={style.maincontainer}>
      {/* leftside div */}
      <div className={style.leftdiv}>
        {/* heading */}
        <div className={style.headingdiv}>
          <p className={style.heading}>
            Trusted Full Service Design Agency since 2015
          </p>
          <p>
            Webure Technologies teams up with Startups, SMEs & Enterprises to
            build and deliver user-centric products and solutions. We do it by
            infusing businsses to technical expertise with design thinking,
            enabling businesses to transform the way they work.
          </p>
        </div>

        {/* automation image */}
        <div className={style.dataimage}>
          <Singlediv />
        </div>
      </div>

      {/* rightside div */}
      <Divdata />
    </div>
  );
};

export default Automate;