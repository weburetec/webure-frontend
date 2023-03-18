import React from "react";
import Image from "next/image";

import quizFirstImage from "../../assets/png/first.jpg";
import quizMiddleImage from "../../assets/png/middle.jpg";
import quizLastImage from "../../assets/png/last.png";

const QuizSection = () => {
  return (
    <div className="container">
    <div className="w-full bg-[#181059] bg-opacity-80 p-3 mb-4 lg:px-6">
      <div className="md:flex md:justify-center flex-wrap md:flex-nowrap md:gap-3 lg:gap-0">
        {[
          {
            title: "The infuriating IE Quiz",
            src: quizFirstImage,
            polygon: "polygonFirstImage",
          },
          {
            title: "The infuriating IE Quiz",
            src: quizMiddleImage,
            polygon: "polygonMiddleImage",
          },
          {
            title: "The infuriating IE Quiz",
            src: quizMiddleImage,
            polygon: "polygonMiddleImage",
          },
          {
            title: "The infuriating IE Quiz",
            src: quizMiddleImage,
            polygon: "polygonMiddleImage",
          },
          {
            title: "The infuriating IE Quiz",
            src: quizLastImage,
            polygon: "polygonLastImage",
          },
        ].map((item, index) => (
          <div key={index} className={`${item.polygon} cursor-pointer `}>
            <Image
              src={item.src}
              className={`hover:scale-150 duration-[4500ms] ease-out transition-all`}
              alt="Webure Technologies"
            />
            <p className="text-white font-notoSans text-center font-semibold w-1/2 text-md lg:text-xl mb-3 lg:mb-0">
              Quiz: {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default QuizSection;
