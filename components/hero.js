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
      <div className="bgcontainer h-100">
        <div className="row">
          <div className="col-mdd-6">
            <h1 className="banner_heading font-Lexend text-2xl p-20">
              <span className="span-txt">Your Ideal IT</span>{" "}
              <span style={{ color: "#E60970" }}>Growth Partner</span>
            </h1>
            <p className="hidden md:block lead font-Lexend text-2xl leading-5 p-20">
              Either you are a Start-up, Scale-up, or a Big Company - Webure Technologies is always your Best Tech-Partner!
            </p>

            <div className="hidden md:block btn-get-touch">
              <button className="btn" data-toggle="modal" data-target="#myModal">
                Get in Our Touch
              </button>
            </div>
          </div>
          <div className="col-mdd-6 -mt-20">            
              <div className="right_img">
                <img className="img1 hidden sm:block md:block" src="https://www.webtechnomind.com/wp-content/uploads/2023/04/app-development.png" alt="Webure Technologies" />
              </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
