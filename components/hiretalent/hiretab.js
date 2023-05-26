import React from "react";

export default function Hiretab() {
  return (
    <div className="container  mx-auto px-4 gap-2 p-4">
      <div className="flex costBox  gap-5 flex-wrap justify-center">
        <div className="w-1/6 border border-[#c3bebc] p-2">
          <image src="https://cdn0.iconfinder.com/data/icons/social-media-2049/512/linkedin-256.png" alt="networking" />
          <p className="font-Lexend text-sm text-center">Network</p>
          <p className="font-Lexend text-xl font-semibold text-center">50000+ Talents</p>
        </div>
        <div className="w-1/6 border border-[#c3bebc] p-2">
          <image src="https://cdn0.iconfinder.com/data/icons/social-media-2049/512/linkedin-256.png" alt="networking" />
          <p className="font-Lexend text-sm text-center">Process</p>
          <p className="font-Lexend text-xl font-semibold text-center">2 Days Hiring</p>
        </div>
        <div className="w-1/6 border border-[#c3bebc] p-2">
          <image src="https://cdn0.iconfinder.com/data/icons/social-media-2049/512/linkedin-256.png" alt="networking" />
          <p className="font-Lexend text-sm text-center">Talent</p>
          <p className="font-Lexend text-xl font-semibold text-center">Top 2.5% Vetted</p>
        </div>
        <div className="w-1/6 border border-[#c3bebc] p-2">
          <image src="https://cdn0.iconfinder.com/data/icons/social-media-2049/512/linkedin-256.png" alt="networking" />    
          <p className="font-Lexend text-sm text-center">Cost Advantage</p>
          <p className="font-Lexend text-xl font-semibold text-center">Upto 52%</p>
        </div>
        <div className="w-1/6 border border-[#c3bebc] p-2">
          <image src="https://cdn0.iconfinder.com/data/icons/social-media-2049/512/linkedin-256.png" alt="networking" />
          <p className="font-Lexend text-sm text-center">Availability</p>
          <p className="font-Lexend text-xl font-semibold text-center">5+ Timezones</p>
        </div>
      </div>
      <div className="mx-auto costBox2 max-w-2xl md:text-center">
        <h4 className="w-full text-4xl font-Lexend font-bold text-gray-500 leading-snug">Hire India’s top remote talent</h4>
        <p className="contactsectiondescription -mt-6 font-base text-justify text-gray-500 font-Lexend text-25 font-weight-400">A hiring platform that helps remote-first companies hire 10X faster & more efficiently. A network of 50,000+ talents, pre-vetted against their technical capabilities, language proficiency and behavioral skills.</p>
        <div className="flex gap-4 px-20 pt-10">
          <div className="w-1/2">
            <div className="p-5 font-Lexend text-lg border-solid text-white bg-[#581C87] border-2 border-[#581C87] hover:bg-white hover:[border-#581C87] hover:text-[#581C87]">
              <a style={{textAlign:"center"}} href="https://www.weburetech.com/contactus" target="_blank" rel="noreferrer">HIRE DEVELOPERS</a>
            </div>
          </div>
          <div className="w-1/2">
            <div className="p-5 font-Lexend text-lg border-solid text-[#581C87] border-2 border-[#581C87] bg-white hover:bg-purple-800 hover:[border-#581C87] hover:text-white">
              <a style={{textAlign:"center"}} href="https://www.weburetech.com/contactus" target="_blank" rel="noreferrer">APPLY FOR DEV TEAM</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
