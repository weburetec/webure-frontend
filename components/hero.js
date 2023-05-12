import Container from "./container";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="masthead  h-[381px] bgcontainer1 bg-[#a7a4a4] relative py-20">
      <div className="container bgcontainer h-100">
        <div className="row">
          <div className="col-mdd-6">
            <h1 className="banner_heading font-Lexend text-2xl">
              <span className="span-txt">Your Ideal IT</span>{" "}
              <span style={{ color: "#E60970" }}>Growth Partner</span>
            </h1>
            <p className="hidden md:block lead font-Lexend text-2xl leading-5">
  Either you are a Start-up, Scale-up, or a Big Company - Webure Technologies is always your Best Tech-Partner!
</p>

<div className="hidden md:block btn-get-touch">
  <button className="btn" data-toggle="modal" data-target="#myModal">
    Get in Our Touch
  </button>
</div>

          </div>
          <div className="col-mdd-6">
          
            <div id="default-carousel" class="relative w-full" data-carousel="slide">
    
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
 
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://www.webtechnomind.com/wp-content/uploads/2023/04/seo.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
 
<div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://www.webtechnomind.com/wp-content/uploads/2023/04/digitalmarketing2.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>

<div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://www.webtechnomind.com/wp-content/uploads/2023/04/app-development.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>

<div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://www.webtechnomind.com/wp-content/uploads/2023/04/digitalmarketing2.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>

<div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://www.webtechnomind.com/wp-content/uploads/2023/04/digitalmarketing2.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
    </div>

<div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>

<button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>
            
            
            
//            <div className="right_img">
  //<img className="img1 hidden sm:block md:block" src="https://www.karvyinfotech.com/images/banner2.svg" alt="Webure Technologies" />
//</div>
          </div>
        </div>
      </div>
      <section className="ttm-row zero-padding-section position-relative z-1 clearfix" style={{ margintop: "20px" }}></section>
    </div>
  );
}
