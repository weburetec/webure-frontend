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
  
  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
    },

    {
      url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
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
          <div className="col-md-3">
            
            <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      ></div>
            
            
              <div className="right_img">
  <img className="img1 hidden sm:block md:block" src="https://www.karvyinfotech.com/images/banner2.svg" alt="Webure Technologies" />
</div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
