import Image from "next/image";
import React from "react";

import ownership1 from "../../assets/png/ownership.png";
import ownership2 from "../../assets/png/ownership2.png";
import improvement from "../../assets/png/improvement.png";
import transparency from "../../assets/png/transparency.png";
import pana4 from "../../assets/png/pana4.png";

const ShapeIcons = () => {
  return (
    <div className="container whoBox">

      <div className="flex px-2 md:px-6 mt-4">
        <div className="w-2/5 p-5">
          <image src="https://growzilla.co/images/pana4.png.webp" alt="Webure Technologies" loading="lazy" />
        </div>
        <div className="w-3/5 py-8 whoBox1">
          <h4 className="w-full text-4xl font-Lexend font-bold text-gray-700 leading-snug -mt-6">Who are we &amp; What we do?</h4>
          <div className="space10"></div>
          <p className="text-justify mb-10 font-Lexend text-lg text-gray-500">We are a team of enthusiasts who are here to introduce the power of <a href="https://weburetech.com/community-building" className="text-purple-900 font-bold">community building</a> to most people so that you can truly connect and get that competitive advantage in this fast pacing world. Our team of industry experts can help you learn and view this concept from various perspectives so that you can tap its fuller potential. Wishing you an enriching, interactive, and joyful ride with us! We’re a company regiment who care for employees and brings out the best in one another. Our growth is streamlining with synergic efforts to attain uncommon goals and deliver exceptional results</p>          
          <div className="padding-10px-top sm-text-center">
            <a href="#inquire_now" className="text-4xl text-justify text-gray-500 font-Lexend btn btn-deep-pink float-left sm-float-none">Know Us Better</a>
          </div>  
        </div>
      </div>
      <br />
      <br />
      <div className="bg16 -mt-10 whoBox2">
      <h2 className="w-full text-4xl text-center font-Lexend font-bold text-gray-700 leading-snug -mt-6">Our Core Values</h2>
      <p className="w-full text-xl text-center font-Lexend text-gray-700 leading-snug -mt-6">Our values are our personality, it truly defines us and is sure to help you! </p>
      </div>
      <div className="flex px-2 gap-6 md:px-6 mt-4 bg16 whoBox2">
        <div className="w-1/3 p-6 boxwho1 border-solid border-2 border-gray-200 rounded-md">              
          {/* <image src="https://growzilla.co/images/icons/empathy.svg" alt="Webure Technologies" loading="lazy" /> */}
          <h5 className="text-3xl font-Lexend text-left text-gray-600">Empathy</h5>
          <p className="text-base font-Lexend text-left">We let you connect with a community that truly cares and with building relationships, comes empathy. </p>              
        </div>
        <div className="w-1/3 p-6 boxwho1 border-solid border-2 border-gray-200 rounded-md">
          {/* <image src="https://growzilla.co/images/icons/manner%20(Traced).svg" alt="Webure Technologies Bangalore" loading="lazy" /> */}
          <h5 className="text-3xl font-Roboto text-left text-gray-600 font-bold">Courtesy</h5>
          <p className="text-base font-Lexend text-left">We have built a safe space for you to interact, share and learn with others, this is what defines us. </p>          
        </div>
        <div className="w-1/3 p-6 boxwho1 border-solid border-2 border-gray-200 rounded-md">
          {/* <image src="https://growzilla.co/images/icons/success%20(Traced).svg" alt="Webure Technologies" loading="lazy" /> */}
          <h5 className="text-3xl font-Roboto text-left text-gray-600 font-bold">Thriving</h5>
          <p className="text-base font-Lexend text-left">Being a part of the community that is truly engaging gives you a sense of belonging and wishfulness. </p>          
        </div>
      </div>
      <div className="flex px-2 gap-5 md:px-6 mt-4 whoBox21 whoBox2">
        <div className="w-1/3 p-6 boxwho1 border-solid border-2 border-gray-200 rounded-md">              
          {/* <image src="https://growzilla.co/images/icons/Group%20328.svg" alt="Webure Technologies Bangalore" loading="lazy" /> */}
          <h5 className="text-3xl font-Roboto text-left text-gray-600 font-bold">Craftsmanship</h5>
          <p className="text-base font-Lexend text-left">To best define craftsmanship, we believe in patience, purpose and beauty. We thrive to live by the words.  </p>              
        </div>
        <div className="w-1/3 p-6 boxwho1 border-solid border-2 border-gray-200 rounded-md">
          {/* <image src="https://growzilla.co/images/icons/Group%20327.svg" alt="Webure Technologies Bangalore" loading="lazy" /> */}
          <h5 className="text-3xl font-Roboto text-left text-gray-600 font-bold">Integrity</h5>
          <p className="text-base font-Lexend text-left">Our community is a reflection of our thoughts of trust, respect, and honesty. We believe in standing strong together. </p>          
        </div>
        <div className="w-1/3 p-6 boxwho1 border-solid border-2 border-gray-200 rounded-md">
          {/* <image src="https://growzilla.co/images/icons/Group%20326.svg" alt="Webure Technologies" loading="lazy" /> */}
          <h5 className="text-3xl font-Roboto text-left text-gray-600 font-bold">Solidarity</h5>
          <p className="text-base font-Lexend text-left">Our community is defined by the highlighted value of unity which is seen in the social bonds that they own. </p>          
        </div>
      </div>
      <br />
      <br />
      <div className="flex px-2 gap-4 md:px-6 mt-4 motivBox">
        <div className="w-1/2 p-2">
          <h4 className="w-full text-3xl font-Lexend font-bold text-gray-700 leading-snug">Are You A Self-motivated Person<br /> Who Knows How To Get Things<br /> Done On Time?</h4>          
        </div>
        <div className="w-1/2 p-2">
          <span className="text-white text-sm font-Lexend bg-purple-800 px-2 py-1 rounded-md">We are hiring</span>
          <br />
          <p className="text-justify mb-10 font-Lexend text-lg text-gray-500">We’re an award-winning team of dedicated individuals that create memorable digital experiences for visionary startups, agencies & enterprises. We hire people because of their potential and whether or not they are a cultural fit in addition to their technical proficiency.</p>
        </div>        
      </div>
      <div className="flex px-2 gap-4 md:px-6 mt-4">
        <div className="w-2/3 p-2 webureBox">
          <h3 className="text-gray-600 font-Lexend font-bold text-3xl">Who are you at Webure?</h3>
          <div className="ContactUs_content__QbHa2">
            <div>
              <div className="flex items-start space-x-3 py-6">
                <input type="checkbox" className="border-gray-300 rounded h-5 w-5" checked/>
                <div className="flex flex-col">
                  <h1 className="text-gray-700 text-xl font-Lexend font-normal leading-none">Great Team Player</h1>
                  <p className="text-gray-500 text-base font-Lexend font-normal leading-2">A plugin that provides a basic reset for form styles that makes form elements easy to override with utilities.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 py-6">
                <input type="checkbox" className="border-gray-300 rounded h-5 w-5" checked/>

                <div className="flex flex-col">
                  <h1 className="text-gray-700 text-xl font-Lexend font-normal leading-none">Probem Solver</h1>
                  <p className="text-gray-500 text-base font-Lexend font-normal leading-2">A plugin that provides a basic reset for form styles that makes form elements easy to override with utilities.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 py-6">
                <input type="checkbox" className="border-gray-300 rounded h-5 w-5" checked/>

                <div className="flex flex-col">
                  <h1 className="text-gray-700 text-xl font-Lexend font-normal leading-none">Steadfast Learner</h1>
                  <p className="text-gray-500 text-base font-Lexend font-normal leading-2">A plugin that provides a basic reset for form styles that makes form elements easy to override with utilities.</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-start space-x-3 py-6">
                <input type="checkbox" className="border-gray-300 rounded h-5 w-5" checked />

                <div className="flex flex-col">
                  <h1 className="text-gray-700 text-xl font-Lexend font-normal leading-none">Real Enthusiast</h1>
                  <p className="text-gray-500 text-base font-Lexend font-normal leading-2">A plugin that provides a basic reset for form styles that makes form elements easy to override with utilities.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 py-6">
                <input type="checkbox" className="border-gray-300 rounded h-5 w-5" checked/>

                <div className="flex flex-col">
                  <h1 className="text-gray-700 text-xl font-Lexend font-normal leading-none">Growth Feak</h1>
                  <p className="text-gray-500 text-base font-Lexend font-normal leading-2">A plugin that provides a basic reset for form styles that makes form elements easy to override with utilities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 p-2 figureimg">
          <figure><img src="https://growzilla.co/images2/car2.png.webp" alt="Webure Technologies" loading="lazy" /></figure>    
        </div> 
      </div>      
      <div className="openBox">
        <h1 className="text-center font-Lexend text-4xl font-semibold"><i className="webure-shape"></i><span className="text-white font-Lexend font-semibold">Op</span>en Positions</h1>
        <p className="text-left text-lg font-Lexend text-gray-600">Experience creativity & flexibility like never before. A paradise for performers, under-utilized potential, Webure is welcoming you to enter a new era of work-life freedom. Ready to get on board? So hop on and take a look at our open positions. With no limitations of location, we invite you to work from anywhere in the world. If you are a go-getter, dynamic, and willing to grab opportunities that come your way, Webure Technologies is the place to be and your playground where dreams take flight, ideas turn into innovations and every goal achieved is celebrated.</p>
      </div>
      <div className="flex px-2 gap-4 md:px-6 mt-4 jobBox">
        <div className="w-2/3 p-2 jobBox">
          <h4 className="w-full text-3xl font-Lexend font-bold text-gray-700 leading-snug">Jobs that become careers</h4>          
          <span className="text-white text-sm font-Lexend bg-purple-800 px-2 py-1 rounded-md">Current Opening</span>
          <p className="text-justify mb-10 font-Lexend text-lg text-gray-500">
            If you are an individual with a disability and require a reasonable
            accomadation to complete any part of the application process, or are
            limited in the ability or unable to access or use this online
            application process and need an alternative method for applying you
            may contact{" "}
            <span className="text-[#A22DEA] font-semibold">career@weburetech.com</span>{" "}
            <br />
            <br />
            We are an equal opportunity that values diversity at all levels. All
            qualified applicants will receive consideration for employement
            without regards to race, color, religion gender, national origin,
            age, sexual orientation, gender identity, disability or veteran
            status.
          </p>
        </div>
        <div className="w-1/3 p-2">
          
        </div>        
      </div>
      <div className="jobBox">
        <h2 className="w-full text-4xl text-center font-Lexend font-bold text-gray-700 leading-snug">Make a career with Webure Technologies</h2>
        <p className="w-full text-xl text-center font-Lexend text-gray-700 leading-snug -mt-6">Choose from the open roles below to apply!<br />All positions listed below are for<span className="text-purple-900"> Remote & Full-time opportunities.</span></p>
      </div>
    </div>
  );
};

export default ShapeIcons;
