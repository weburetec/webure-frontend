import React from "react";

const Main = ({ blogs, careers }) => {
  return (
    <div className="masthead !mb-0">
      <div className="h-[531px] bg-[#777676] relative">
        <div className="absolute mx-10">
          <div className="hidden md:inline-block p-2">
            {blogs ? (
              <>
                <div className="w-[650px] md:ml-28 relative flex flex-col gap-2">
                <div className="lg:text-6xl md:text-5xl text-white font-Lexend font-bold md:mt-[10rem]">
                  OUR BLOG
                </div>
                <svg width="267" height="47" viewBox="0 0 267 47" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-[180px] md:w-[230px] lg:w-[250.37px] h-[46.84px]">
                  <line
                    y1="-22.5"
                    x2="266.006"
                    y2="-22.5"
                    transform="matrix(0.999976 0.00692504 -0.00816299 0.999967 0 45.158)"
                    stroke="#B791F4"
                    strokeOpacity="0.6"
                    strokeWidth="45"
                  />
                </svg>
                {/*  */}                  
                  <p className="md:text-4xl text-white font-Lexend font-bold">
                    Consult | Create | Collaborate
                  </p>
                  <p className="md:text-lg text-white text-justify font-Lexend font-normal">
                    Insightful content at your fingertips! OUR THOUGHTS, VIEWS AND EVERYTHING ELSE<br />
                    From updates to case studies and from stories to different interpretations
                    we have got it all! Learn how you can climb the ladder with power of words and networking.
                    Thoughts and ideas around the things that actually matters.
                    Resources for makers and creatives to learn sell and grow.
                  </p>                  
                </div>
              </>
            ) : careers ? (
              <>
                <div className="w-[650px] md:ml-28 md:mt-48 relative flex flex-col gap-2">
                  <p className="md:text-4xl text-white font-Lexend font-bold">
                    Shape the future of an entire industry. Be part of Webure
                  </p>
                  <p className="text-xl text-white font-Lexend font-light">
                    A company’s success start with the right and worthy people
                    who can create value for the customer. We are on a lookout of
                    delightful people who are exited about working on challenging problems
                    and constantly looking for creative, talented and goal oriented
                    professional.
                  </p>
                  <p className="text-4xl text-white font-Lexend font-medium">
                    Wanna be part of it all?
                  </p>
                  <svg
                    width="235"
                    height="46"
                    viewBox="0 0 267 47"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 mt-46"
                  >
                    <line
                      y1="-22.5"
                      x2="266.006"
                      y2="-22.5"
                      transform="matrix(0.999976 0.00692504 -0.00816299 0.999967 0 45.158)"
                      stroke="#B791F4"
                      strokeOpacity="0.6"
                      strokeWidth="38"
                    />
                  </svg>
                  <div className="padding-10px-top sm-text-center">
                  <a href="#inquire_now" className="font-base text-justify text-gray-500 font-Lexend btn btn-deep-pink float-left sm-float-none">View Our Current Openings</a>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="w-[650px] md:mt-72">
                  <p className="md:text-4xl text-white font-Lexend font-bold">
                    GET MORE LEADS - LEAD GENERATION ROI STORIES BY WEBURE
                  </p>
                  <p className="text-2xl text-white font-Lexend font-bold">
                    Client Name: SRIJAN INC.
                  </p>
                  <svg
                    width="270"
                    height="3"
                    viewBox="0 0 373 3"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="0.997068"
                      y1="2"
                      x2="372.997"
                      y2="1"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </>
            )}
          </div>
        </div>
        <img
          src="/img/blog.png"
          alt="blog banner"
          className="float-right pr-20 md:h-[492px] sm:h-[300px] object-cover"
        />
        </div>
    </div>
  );
};

export default Main;
