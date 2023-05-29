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
    <div className="masthead  h-[381px] bgcontainer1 relative py-20">
      <div className="bgcontainer h-100">
        <div className="row">
          <div className="col-mdd-6">
            <div className="border-solid border-2 border-indigo-600">
              <h1 className="banner_heading font-Lexend text-2xl px-20">
                <span className="span-txt">Your Ideal IT</span>{" "}
                <span style={{ color: "#E60970" }}>Growth Partner</span>
              </h1>
              <p className="lead font-Lexend text-lg -mt-6 leading-5 px-20">
                Our heart and soul is only Creativity & Innovation
              </p>
              <br />
              <p className="lead font-Lexend text-6xl leading-5 px-20">
                CONSULT | CREATE | COLLABORATE
              </p>
              <p className="lead font-Lexend text-2xl leading-5 px-20">
                Either you are a Start-up, Scale-up, or a Big Company - Webure Technologies is always your Best Tech-Partner!
              </p>
              <ul className="pl-20" style={{display:"-webkit-inline-box"}}>
                 <li className="px-5"><img src="https://www.webtechnomind.com/wp-content/uploads/2021/10/bitbucket.svg" class="attachment-full size-full" alt="" loading="lazy" /></li>
                 <li className="px-5"><img src="https://www.webtechnomind.com/wp-content/uploads/2021/10/github.svg" class="attachment-full size-full" alt="" loading="lazy" /></li>
                 <li className="px-5"><img src="https://www.webtechnomind.com/wp-content/uploads/2021/10/trello.svg" class="attachment-full size-full" alt="" loading="lazy" /></li>
                 <li className="px-5"><img src="https://www.webtechnomind.com/wp-content/uploads/2021/10/slack.svg" class="attachment-full size-full" alt="" loading="lazy" /></li>
                 <li className="px-5"><img src="https://www.webtechnomind.com/wp-content/uploads/2021/10/slack.svg" class="attachment-full size-full" alt="" loading="lazy" /></li>
              </ul>
              <div className="btn-get-touch">
                <div>
                  <button className="btn" data-toggle="modal" data-target="#myModal">Case Studies</button>
                </div>
                <div>
                  <button className="btn" data-toggle="modal" data-target="#myModal">Get in Our Touch</button>
                </div>
              </div>
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
