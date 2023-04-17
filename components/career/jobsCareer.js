import React from "react";
import Image from "next/image";

import jobcareer from "../../assets/png/jobcareer.png";

// work hard
const lists = [
  {
    title: "Lifestyle",
    sub: [
      "Casual Dress Code",
      "Wellness Challenges",
      "Worldwide Parental Leave",
    ],
  },
  {
    title: "Professional Development",
    sub: [
      "World Class Training",
      "Professional Training",
      "Mentor Program",
      "Cross Functional Learning",
    ],
  },
  {
    title: "Benefits",
    sub: [
      "Comprehensive Benefits",
      "Generous Vacation Policy",
      "Life Insurance",
    ],
  },
  {
    title: "Workplace Culture",
    sub: [
      "Celebratory Happy Hours",
      "Employee Recognition",
      "Company Contests",
    ],
  },
];
const JobsCareer = () => {
  return (
    <div className="container ">
    <div className="px-2 md:px-6 mt-4 ">
      {/* Jobs that become careers */}
      <h3 className="text-[#A22DEA] text-4xl text-opacity-50 font-bold tracking-wider">
        Jobs that become careers
      </h3>
      <div className="md:flex flex-wrap lg:flex-nowrap relative gap-2">
       

        <Polygon className="absolute right-0 h-full hidden lg:inline-flex" />

        <div className="lg:w-[20%]">
          <Image src={jobcareer} loading="lazy" alt="Webure Technologies"/>
        </div>
      </div>
      {/* work hard */}
      <div className="md:flex flex-wrap lg:flex-nowrap relative gap-2 mt-6 lg:justify-center">
        <div className="lg:w-[20%] hidden lg:inline-flex">
          <img src={jobcareer} loading="lazy" alt="Webure Technologies" />
          <Polygon className="absolute h-full hidden lg:inline-flex -z-50" />
        </div>
        <div className="w-full lg:w-1/2 [border:1px_solid_#A22DEA] lg:rounded-r-xl p-4 mt-4">
          <h3 className="text-2xl tracking-widest text-center font-bold text-[#454440] text-opacity-60 font-Ubuntu">
            WORK HARD PERK HARD
          </h3>
          {/*  */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5">
            {lists?.map((item, index) => (
              <div key={index}>
                <p className="text-[#454440] text-opacity-70 text-xl font-bold mb-2 tracking-wider">
                  {item.title}
                </p>
                {item.sub?.map((list, index) => (
                  <li
                    key={index}
                    className="text-[#454440] text-opacity-70 font-semibold"
                  >
                    {list}
                  </li>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default JobsCareer;

const Polygon = ({ className }) => (
  <svg
    viewBox="0 0 589 489"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M4.80591 55.5096C-6.14215 36.0814 7.59508 11.9988 29.8907 11.5335L558.281 0.506464C582.284 0.00554605 596.801 26.8574 583.237 46.6669L289.978 474.952C277.635 492.978 250.663 491.801 239.937 472.768L4.80591 55.5096Z"
      fill="#A22DEA"
      fillOpacity="0.4"
      stroke="#A22DEA"
    />
  </svg>
);
