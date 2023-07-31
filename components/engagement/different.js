import Link from "next/link";
import Image from "next/image";
import React from "react";
import Container from "../container";

export default function Different() {
  return (
    <div className="relative">

      <div className="relative" style={{backgroundColor:"#ffffff"}}>
        <Container>
          <div>         
            <div className="p-5">
                <p className="font-bold font-Lexend text-lg leading-6 text-center">PARTNER WITH WEBURE TECHNOLOGIES</p>
                <p className="font-Lexend text-lg leading-6 text-center">What makes us Different?</p>
                <p className="font-Lexend text-lg leading-6 text-center">Webure Technologies aims to become a global leader in the software industry, following high values and ethical standards that make us stand out from the crowd.</p>
            </div>
          </div>
          <div>
            <div className="flex">
              <div className="col-md-4">
                <div>
                  <img alt="" srcset="https://res.cloudinary.com/weburetec/image/upload/v1690802857/igbxpthdywdncucjh3ok.png" src="https://res.cloudinary.com/weburetec/image/upload/v1690802857/igbxpthdywdncucjh3ok.png" decoding="async" data-nimg="future" loading="lazy" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="ind_item_1 border-purple-900 hover:border-purple-800">
                  <img className="px-5" alt="" srcset="https://www.classicinformatics.com/hs-fs/hubfs/service-icon2.png?width=87&amp;name=service-icon2.png" src="https://www.classicinformatics.com/hs-fs/hubfs/service-icon2.png?width=87&amp;name=service-icon2.png" width="80" height="80" decoding="async" data-nimg="future" loading="lazy" />
                  <p className="font-Lexend font-medium text-lg text-left px-5">Unprecedented Quality</p>
                  <p className="font-Lexend text-sm text-justify px-5">Deploying high-capability software practices for various industries, we ensure the highest quality results and maintenance support, which deliver you an improved return on investment.</p>
                </div>
                <div className="ind_item_1 border-purple-900 hover:border-purple-800">
                  <img className="px-5" alt="" srcset="https://www.classicinformatics.com/hs-fs/hubfs/service-icon2.png?width=87&amp;name=service-icon2.png" src="https://www.classicinformatics.com/hs-fs/hubfs/service-icon2.png?width=87&amp;name=service-icon2.png" width="80" height="80" decoding="async" data-nimg="future" loading="lazy" />
                  <p className="font-Lexend font-medium text-lg text-left px-5">Project Analytical Skills</p>
                  <p className="font-Lexend text-sm text-justify px-5">Whether you want us to create something from scratch or modernize your digital product with product engineering, our experts will scrutinize each step with logical data, and realistic timescales to keep you informed.</p>
                </div>
                <div className="ind_item_1 border-purple-900 hover:border-purple-800">
                  <img className="px-5" alt="" srcset="https://www.classicinformatics.com/hs-fs/hubfs/service-icon2.png?width=87&amp;name=service-icon2.png" src="https://www.classicinformatics.com/hs-fs/hubfs/service-icon2.png?width=87&amp;name=service-icon2.png" width="80" height="80" decoding="async" data-nimg="future" loading="lazy" />
                  <p className="font-Lexend font-medium text-lg text-left px-5">Result Driven Approach</p>
                  <p className="font-Lexend text-sm text-justify px-5">Providing complete satisfaction with extended business hours and project transparency, we make everything possible to achieve the best results as per the global standards.</p>
                </div>  
              </div>
              <div className="col-md-4">
                <div className="ind_item_1 border-purple-900 hover:border-purple-800">
                  <img className="px-5" alt="" srcset="https://www.classicinformatics.com/hs-fs/hubfs/service-icon2.png?width=87&amp;name=service-icon2.png" src="https://www.classicinformatics.com/hs-fs/hubfs/service-icon2.png?width=87&amp;name=service-icon2.png" width="80" height="80" decoding="async" data-nimg="future" loading="lazy" />
                  <p className="font-Lexend font-medium text-lg text-left px-5">Cost Effectiveness</p>
                  <p className="font-Lexend text-sm text-justify px-5">We are among the most cost-efficient sources for quality-rich IT services, known for professionalism and round-o-clock support. From IT outsourcing to automated systems, we do it all at competitive pricing.</p>
                </div>
                <div className="ind_item_1 border-purple-900 hover:border-purple-800">
                  <img className="px-5" alt="" srcset="https://www.classicinformatics.com/hs-fs/hubfs/service-icon2.png?width=87&amp;name=service-icon2.png" src="https://www.classicinformatics.com/hs-fs/hubfs/service-icon2.png?width=87&amp;name=service-icon2.png" width="80" height="80" decoding="async" data-nimg="future" loading="lazy" />
                  <p className="font-Lexend font-medium text-lg text-left px-5">Teamwork is our Strength</p>
                  <p className="font-Lexend text-sm text-justify px-5">Behind every successful project, there is a team that works for hours without getting afraid of obstacles. Team Advantal is on a mission together to transform businesses with a tech-driven and futuristic path.</p>
                </div>
                <div className="ind_item_1 border-purple-900 hover:border-purple-800">
                  <img className="px-5" alt="" srcset="https://www.classicinformatics.com/hs-fs/hubfs/service-icon2.png?width=87&amp;name=service-icon2.png" src="https://www.classicinformatics.com/hs-fs/hubfs/service-icon2.png?width=87&amp;name=service-icon2.png" width="80" height="80" decoding="async" data-nimg="future" loading="lazy" />
                  <p className="font-Lexend font-medium text-lg text-left px-5">Fastest Response Time</p>
                  <p className="font-Lexend text-sm text-justify px-5">When it comes to our support & maintenance assistance, we offer the fastest technical support covering all time zones with post delivery maintenance and project consultation.</p>
                </div>  
              </div>  
            </div>                          
          </div>
        </Container>
      </div>
    </div>
  );
}
