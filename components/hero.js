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
    <div className="masthead h-[381px] bg-[#a7a4a4] relative py-20">
      <div className="container h-100">
        <div className="row">
          <div className="col-md-3">
            <div className="left_img">
              <img src="https://www.karvyinfotech.com/images/banner1.svg" alt="Webure Technologies" />
            </div>
          </div>
          <div className="col-mdd-6">
            <h1 className="banner_heading font-Lexend text-2xl">
              <span className="span-txt">Your Ideal IT</span>{" "}
              <span style={{ color: "#E60970" }}>Growth Partner</span>
            </h1>
            <p className="lead font-Lexend text-2xl leading-5">
              Either you are a Start-up, Scale-up, or a Big Company - Webure
              Technologies is always your Best Tech-Partner!
            </p>
            <div className="btn-get-touch">
              <button className="btn" data-toggle="modal" data-target="#myModal">
                Get in Our Touch
              </button>
            </div>
          </div>
          <div className="col-md-3">
            <div className="right_img">
              <img src="https://www.karvyinfotech.com/images/banner2.svg" alt="Webure Technologies" />
            </div>
          </div>
        </div>
      </div>
      <section className="ttm-row zero-padding-section position-relative z-1 clearfix" style={{ margintop: "20px" }}></section>
    </div>
  );
}
