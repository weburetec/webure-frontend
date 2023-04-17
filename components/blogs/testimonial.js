import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";

import Map from "../../assets/svg/blog-map.svg";

const BlogTestimonial = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="px-6 font-Ubuntu countryBox font-normal">
      <p className="text-[#F17216] font-Lexend font-normal text-sm ml-20">
        TESTIMONIAL
      </p>
      <p className="font-Lexend font-bold text-[#282C4B] ml-20 md:text-2xl lg:text-3xl">
        What Our <br />
        Customer’s Say
      </p>
      <div className="h-full w-full">
        <div className="relative">
          <Image src={Map} alt="Webure Location Map" />
          {/*  */}
          <div className=" mr-20 mt-20 opacity-80 sm:relative md:absolute top-0 right-0 lg:w-[534px] shadow-md lg:p-10 bg-white z-10">
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={8000}
              removeArrowOnDeviceType={["tablet", "mobile"]}
              // containerclassName="carousel-container"
              // dotListclassName="custom-dot-list-style"
              // itemclassName="carousel-item-padding-60-px"
            >
              {["", "", ""].map(() => (
                <div className="pl-6 md:pl-0">
                  <image src="/img/semi.png" alt="Webure-1" className="h-6" />

                  <p className="font-Lexend font-normal text-lg mt-2">
                    I really like the team for example, a relationship-focused
                    performance expectation might be that the employee sustain
                    collegial working relationships with her peers, subordinates
                    and customers.
                  </p>
                  <div className="flex mt-3 space-x-3 items-center">
                    <image
                      src="/img/user1.jpg"
                      className="h-10 rounded-full"
                      alt="user1"
                    />
                    <p className="font-Lexend font-bold text-xl">
                      Gloria Jessica
                    </p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTestimonial;
