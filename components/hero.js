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
        <div className="flex">
          <div className="col-mdd-6">
            <img style={{width:"66%", padding-top:"20px"}} class="img1 hidden sm:block md:block absolute -mt-28" src="https://res.cloudinary.com/weburetec/image/upload/v1685469755/homepage_banner_ijjowu.svg" alt="Webure Technologies" />
            <div>
              <h1 className="banner_heading font-Lexend text-2xl px-20">
                <span className="span-txt">Your IT</span>{" "}
                <span style={{ color: "#581C87" }}>Growth Partner</span>
              </h1>
              <p className="lead font-Lexend text-lg -mt-6 leading-5 px-20">
                Our heart and soul is only Creativity & Innovation
              </p>
              <br />
              <br />
              <p className="font-bold text-center font-Lexend text-2xl px-20">
                <span style={{ color: "#581C87" }}>CONSULT | CREATE | COLLABORATE</span>
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

              <div className="flex gap-4 px-20 pt-10" style={{justifyContent:"right"}}>
                <div>
                  <div className="p-2 font-Lexend text-sm border-solid text-white bg-[#581C87] border-2 border-[#581C87] hover:bg-white hover:[border-#581C87] hover:text-[#581C87]">
                    <a style={{textAlign:"center"}} href="https://www.weburetech.com/contactus" target="_blank" rel="noreferrer">HIRE DEVELOPERS</a>
                  </div>
                </div>
                <div>
                  <div className="p-2 font-Lexend text-sm border-solid text-[#581C87] border-2 border-[#581C87] bg-white hover:bg-purple-800 hover:[border-#581C87] hover:text-white">
                    <a style={{textAlign:"center"}} href="https://www.weburetech.com/contactus" target="_blank" rel="noreferrer">ROI STORIES</a>
                  </div>
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
