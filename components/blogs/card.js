import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";
import HtmlParser from "react-html-parser";

import rectangleImage from "../../assets/png/Rectangle.png";
import { Excerpt } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { getActiveBlogs } from "../../feature/action/blog/blogAction";
import axios from "axios";

// styles
const styles = {
  banner: "text-back font-bold text-md uppercase",
};

const Bannercard = () => {
  const dispatch = useDispatch();
  const { activeBlogs } = useSelector((s) => s.blogReducer);

  useEffect(() => {dispatch(getActiveBlogs());}, []);
  return (
    <div className="px-20">
    <div className="px-6 mb-4 mt-2 lg:mt-0">
      <div className="flex items-center min-h-screen">
        {/* main row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-[27px] self-center pt-4">
          {activeBlogs?.slice(0, 2).map((activeBlog) => (
            <div className="bg-white border border-[#C9C5C5] shadow-sm mb-4 md:mb-0 hover:bg-gray-50 hover:scale-105 duration-300 ease-linear" key={activeBlog._id}>
              <Link href={`/blog/${activeBlog._id}`}>
                <a>
                  <image
                    className="w-full h-[350px] object-fill"
                    src={`${axios.defaults.baseURL}/blog/${activeBlog.picture}`}
                    alt={activeBlog.title}
                  />
                </a>
              </Link>
              <div className="flex bg-[#e7c5e3] bg-opacity-40 p-1 justify-between py-4 px-2">
                <p className="font-Lexend font-normal text-base">8/11/2022</p>
                <p className="font-Lexend font-normal text-base">web admin</p>
              </div>                
              {/* button */}
              <div className="p-4 flex gap-3 lg:gap-4">
                {/* Colorography Button */}
                <button className="bg-[#FF5A5A] px-4 py-1 rounded-[10px] text-[#BE5151] bg-opacity-25 font-Lexend text-xs">
                  Colorography
                </button>
                {/* Images Button */}
                <button className="bg-[#E5E5E5] px-4 py-1 rounded-[10px] font-Lexend text-xs">
                  Images
                </button>
              </div>
              <div className="p-4">
                <a href="#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-black font-Lexend">
                    {activeBlog.title}
                  </h5>
                </a>
                <p className="mb-3 font-Lexend font-normal text-base text-gray-700 dark:text-gray-400">
                  {HtmlParser(Excerpt(activeBlog.shortDescription, 115))}
                </p>
                <Link href={`/blog/${activeBlog._id}`}>
                  <a className="inline-flex items-center py-2 px-3 text-sm font-medium font-Lexend text-center text-black bg-white focus:ring-gray-500 float-right mb-4 uppercase border-2 hover:text-black hover:bg-gray-100 cursor-pointer">
                    Read more ...
                  </a>
                </Link>
              </div>
            </div>
          ))}
          {/* RECENT POSTS column */}
          <div className="bg-white mb-4 md:mb-0">
            <p className="font-bold text-black tracking-wide text-xl md:text-2xl">
              RECENT POSTS
            </p>
            <div className="hidden md:flex border-b-2 md:w-1/2 lg:w-[80%] xl:w-[52%]" />
            {activeBlogs?.slice(1).map((activeBlog) => (
              <Link href={`/blog/${activeBlog._id}`} key={activeBlog._id}>
                <a className="flex py-2 flex-col my-2 border-b border-[#bdbaba] text-[#979494] font-Lexend font-normal text-lg hover:text-gray-700 cursor-pointer">
                  {activeBlog.title}
                </a>
              </Link>
            ))}
          </div>
        </div>        
      </div>
      <div>
        {/* second row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-[27px] self-center">
          {activeBlogs?.slice(0, 3).map((activeBlog) => (
            <div className="bg-white border border-[#C9C5C5] shadow-sm mb-4 md:mb-0 hover:bg-gray-50 hover:scale-105 duration-300 ease-linear" key={activeBlog._id}>
              <Link href={`/blog/${activeBlog._id}`}>
                <a>
                  <image
                    className="w-full h-[350px] object-fill"
                    src={`${axios.defaults.baseURL}/blog/${activeBlog.picture}`}
                    alt={activeBlog.title}
                  />
                </a>
              </Link>
              <div className="flex bg-[#e7c5e3] bg-opacity-40 p-1 justify-between py-4 px-2">
                <p className="font-Lexend font-normal text-base">8/11/2022</p>
                <p className="font-Lexend font-normal text-base">web admin</p>
              </div>              
              {/* button */}
              <div className="p-4 flex gap-3 lg:gap-4">
                {/* Colorography Button */}
                <button className="bg-[#FF5A5A] px-4 py-1 rounded-[10px] text-[#BE5151] bg-opacity-25 font-Lexend text-xs">
                  Colorography
                </button>
                {/* Images Button */}
                <button className="bg-[#E5E5E5] px-4 py-1 rounded-[10px] font-Lexend text-xs">
                  Images
                </button>
              </div>
              <div className="p-4">
                <a href="#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-black font-Lexend">
                    {activeBlog.title}
                  </h5>
                </a>
                <p className="mb-3 font-Lexend font-normal text-base text-gray-700 dark:text-gray-400">
                  {HtmlParser(Excerpt(activeBlog.shortDescription, 115))}
                </p>
                <Link href={`/blog/${activeBlog._id}`}>
                  <a className="inline-flex items-center py-2 px-3 text-sm font-medium font-Lexend text-center text-black bg-white focus:ring-gray-500 float-right mb-4 uppercase border-2 hover:text-black hover:bg-gray-100 cursor-pointer">
                    Read more ...
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* third row */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:gap-x-[25px]">
        {/* Big card */}
        <div className="bg-white border border-[#C9C5C5] md:mb-0">
          <div className="flex">
            <Image
              src={rectangleImage}
              className="object-contain"
              height="231px"
              loading="lazy"
              alt="Webure Technologies"
            />
          </div>
          <div className="flex bg-[#e7c5e3] bg-opacity-40 p-1 justify-between py-4 px-2">
            <p className="font-Lexend font-normal text-base">8/11/2022</p>
            <p className="font-Lexend font-normal text-base">web admin</p>
          </div>
          {/* button */}
          <div className="p-2 flex gap-3 lg:gap-4">
            {/* Colorography Button */}
            <button className="bg-[#FF5A5A] px-4 py-1 rounded-[10px] text-[#BE5151] bg-opacity-25 font-Lexend text-xs">
              Colorography
            </button>
            {/* Images Button */}
            <button className="bg-[#E5E5E5] px-4 py-1 rounded-[10px] font-Lexend text-xs">
              Images
            </button>
          </div>
          <div className="p-4">
            <a href="#">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-black font-Lexend">
                SEO for IT Services
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 font-Lexend text-base">
              High competition and a huge cost of getting the lead are fears
              preventing IT company and software houses. Our Team was inspired
              by the seven skills of highly effective programmers created by the
              Tech lead. We wanted to provice our own take on the topic. Here
              are the seven skills of effective programmers.
            </p>
            <Link href="/blog">
              <span className="inline-flex items-center py-2 px-3 text-sm font-medium font-Lexend text-center text-black bg-white focus:ring-gray-500 float-right mb-4 uppercase border-2 hover:text-black hover:bg-gray-100 cursor-pointer">
                Read more ...
              </span>
            </Link>
          </div>
        </div>
        <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-6">
          {["", "", "", ""].map(() => (
            <div className="border border-[#C9C5C5] h-[252px] md:mb-0 hover:bg-gray-50 hover:scale-105 duration-300 ease-linear cursor-pointer">
              <image src="/img/graph.png" loading="lazy" alt="Webure Technologies" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  );
};

export default Bannercard;
