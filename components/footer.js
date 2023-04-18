import Link from "next/link";
import Image from "next/image";
import React from "react";
import Container from "./container";
import { MainLogo, NameWithSlogan } from "./logo";

export default function Footer() {
  // styles
  const styles = {footerTag:"text-white hover:text-[#995FC6] cursor-pointer my-4 md:my-0 lg:[border-bottom:3.5px_solid_#995FC6] tracking-wide md:tracking-wider",};
  const navigation = ["Product", "Features", "Pricing", "Company", "Blog"];
  const legal = ["Terms", "Privacy", "Legal"];
  return (
    <div className="relative1  relBox">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 225">
        <path
          fill="#3D3D3D"
          fillOpacity="1"
          d="M0,128L40,122.7C80,117,160,107,240,117.3C320,128,400,160,480,165.3C560,171,640,149,720,165.3C800,181,880,235,960,213.3C1040,192,1120,96,1200,80C1280,64,1360,128,1400,160L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
      <div className="relative footerelative" style={{ backgroundColor: "#3D3D3D" }}>
        <>
          <div>
            <div className="androidrow">
              <div className="col-lg-4">  
                <div className="left_footer1">
                  <div className="f_left_new1">
                    <div className="flex col-2">
                      <div>
                        <div className="f_logo">
                          <MainLogo />
                        </div>
                      </div>
                      <div className="py-4 px-4">
                        <NameWithSlogan />
                      </div>
                    </div>
                    <ul id="menu-about-w3nuts-1" className="fmainul">
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-517">
                        <a className="font-Lexend text-4xl text-[#777777]" href="https://w3nuts.co.uk/about-us/">About Us</a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-745">
                        <a className="font-Lexend text-4xl text-[#777777]" href="https://w3nuts.co.uk/collaboration-models/">
                          Collaboration
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-760">
                        <a className="font-Lexend text-4xl text-[#777777]" href="https://w3nuts.co.uk/hire-dedicated-resources/">
                          Hire Resources
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-526">
                        <a className="font-Lexend text-4xl text-[#777777]" href="https://w3nuts.co.uk/blog/">Blog</a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-527">
                        <a className="font-Lexend text-4xl text-[#777777]" href="https://w3nuts.co.uk/contact/">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                  <div className="f_left_new2">
                    <div className="con-blk">
                      <div className="conlinks">
                        <a href="mailto:hello@weburetech.com">
                          <span>
                            <svg
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              width="30px"
                              height="30px"
                              viewBox="0 0 30 30"
                              enableBackground="new 0 0 30 30"
                            >
                              <path
                                fill="none"
                                stroke="#777777"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit="10"
                                d="M27,24.8H3c-1.1,0-2-0.9-2-2V7.2c0-1.1,0.9-2,2-2h24c1.1,0,2,0.9,2,2v15.6C29,23.9,28.1,24.8,27,24.8z"
                              ></path>
                              <path
                                fill="none"
                                stroke="#777777"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit="10"
                                d="M22.5,18.6l-4.2-3.9l-1.9,1.7c-0.8,0.7-1.9,0.7-2.7,0l-1.9-1.7l-4.2,3.9"
                              ></path>
                              <path
                                fill="none"
                                stroke="#777777"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit="10"
                                d="M1.6,5.7l10.1,9.1l1.9,1.7c0.8,0.7,1.9,0.7,2.7,0l1.9-1.7l10.1-9.1"
                              ></path>
                            </svg>
                            <p className="font-Lexend text-lg text-[#777777] -mt-7 pl-10">hi@weburetech.com</p>
                          </span>
                          
                        </a>
                      </div>
                      <div className="conlinks">
                        <a href="skype:samir.kaila1?chat">
                          <span>
                            <svg
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              width="30px"
                              height="30px"
                              viewBox="0 0 30 30"
                              enableBackground="new 0 0 30 30"
                            >
                              <path
                                fill="none"
                                stroke="#777777"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit="10"
                                d="M27.2,16.2c0-0.4,0.1-0.8,0.1-1.2c0-6.8-5.5-12.3-12.3-12.3c-1.9,0-3.7,0.4-5.3,1.2C8.9,3.6,8.2,3.5,7.3,3.5C3.8,3.5,1,6.3,1,9.8c0,1.7,0.6,3.2,1.7,4.3c0,0.3,0,0.6,0,0.9c0,6.8,5.5,12.3,12.3,12.3c1.8,0,3.4-0.4,4.9-1c0.8,0.4,1.8,0.6,2.8,0.6c3.5,0,6.3-2.8,6.3-6.3C29,18.9,28.3,17.3,27.2,16.2z"
                              ></path>
                              <path
                                className="pathsky"
                                fill="#777777"
                                d="M15.6,12.7c2.5,0.6,6.2,1.5,6.2,5.6c0,2-1,3.6-2.8,4.4c-1.3,0.6-2.8,0.6-4,0.6c-3.9,0-6.3-3-6.4-3.2c-0.6-0.8-0.5-2,0.3-2.6c0.8-0.6,2-0.5,2.6,0.3c0,0,1.5,1.7,3.6,1.8c2.5,0.1,3.1-0.7,3.2-1.3c0.1-0.8-0.6-1.3-3.4-2c-2.4-0.6-5.9-1.4-5.9-5.2c0-1.2,0.5-5,6.7-5c3.9,0,6.2,3.1,6.3,3.2c0.6,0.8,0.4,2-0.4,2.6c-0.8,0.6-2,0.4-2.6-0.4c0-0.1-1.4-1.5-3.3-1.7c-1.5-0.1-3,0.4-3,1.2C12.5,11.8,13,12.1,15.6,12.7z"
                              ></path>
                            </svg>
                          </span>
                          <p className="font-Lexend text-lg text-[#777777] pl-12">weburetech</p>
                        </a>
                      </div>
                      <div className="conlinks">
                        <a href="https://wa.me/917093042424" target="_blank" rel="noreferrer">
                          <span>
                            <svg
                              className="iconleft"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              width="32px"
                              height="32px"
                              viewBox="0 0 32 32"
                              enableBackground="new 0 0 32 32"
                            >
                              <path
                                fill="none"
                                stroke="#777777"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit="10"
                                d="M1,31l2.1-7.5C1.7,21.2,1,18.6,1,15.9C1,7.7,7.7,1,15.9,1S31,7.7,31,15.9S24.2,31,15.9,31c-2.6,0-5.1-0.8-7.3-2.1L1,31z"
                              ></path>
                              <path
                                fill="#777777"
                                className="pathsky"
                                d="M12,9l-1-0.1c-0.3,0-0.6,0.1-0.8,0.3c-0.5,0.4-1.2,1.2-1.4,2.2c-0.4,1.6,0.2,3.4,1.6,5.3c1.3,1.9,3.9,4.9,8.5,6.2c1.4,0.4,2.6,0.2,3.5-0.4c0.7-0.5,1.2-1.2,1.3-2l0.2-0.7c0.1-0.2-0.1-0.5-0.3-0.6l-3.3-1.5c-0.2-0.1-0.5-0.1-0.6,0.2l-1.3,1.7c-0.1,0.1-0.3,0.2-0.4,0.1c-0.9-0.3-3.8-1.6-5.4-4.7c-0.1-0.2-0.1-0.3,0.1-0.4l1.2-1.4c0.1-0.2,0.2-0.4,0.1-0.5l-1.5-3.4C12.3,9.1,12.2,9,12,9"
                              ></path>
                            </svg>
                          </span>
                          <p className="font-Lexend text-lg text-[#777777] pl-10">+91 803 786 2398</p>
                        </a>
                      </div>
                    </div>
                    <div className="socialblock">
                      <a className="hover:animate-bounce"
                        href="https://www.facebook.com/weburetech/"
                        target="_blank" rel="noreferrer"
                      >
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="20px"
                          height="20px"
                          viewBox="0 0 20 20"
                          enableBackground="new 0 0 20 20"
                        >
                          <path
                            fill="#777777"
                            d="M7.8,20v-8.9h-3V7.5h3V4.7c0-3,1.9-4.7,4.6-4.7c1.3,0,2.4,0.1,2.7,0.1v3.2h-1.9c-1.5,0-1.8,0.7-1.8,1.7v2.4h3.3l-0.5,3.6h-2.9V20"
                          ></path>
                        </svg>
                      </a>
                      <a className="hover:animate-bounce" href="https://twitter.com/webure" target="_blank" rel="noreferrer">
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="20px"
                          height="20px"
                          viewBox="0 0 20 20"
                          enableBackground="new 0 0 20 20"
                        >
                          <path
                            fill="#777777"
                            d="M17.1,6.3c0,0.2,0,0.3,0,0.5c0,4.9-3.7,10.5-10.5,10.5c-2.1,0-4-0.6-5.7-1.7c0.3,0,0.6,0,0.9,0c1.7,0,3.3-0.6,4.6-1.6c-1.6,0-3-1.1-3.4-2.6c0.2,0,0.5,0.1,0.7,0.1c0.3,0,0.7,0,1-0.1c-1.7-0.3-3-1.8-3-3.6v0c0.5,0.3,1.1,0.4,1.7,0.5c-1-0.7-1.6-1.8-1.6-3.1c0-0.7,0.2-1.3,0.5-1.9c1.8,2.2,4.5,3.7,7.6,3.9C9.8,7,9.8,6.7,9.8,6.4c0-2,1.6-3.7,3.7-3.7c1.1,0,2,0.4,2.7,1.2C17,3.7,17.8,3.4,18.5,3c-0.3,0.9-0.9,1.6-1.6,2c0.7-0.1,1.5-0.3,2.1-0.6C18.5,5.2,17.9,5.8,17.1,6.3L17.1,6.3z"
                          ></path>
                        </svg>
                      </a>
                      <a className="hover:animate-bounce"
                        href="https://www.instagram.com/w3nutsofficial/"
                        target="_blank" rel="noreferrer"
                      >
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="20px"
                          height="20px"
                          viewBox="0 0 20 20"
                          enableBackground="new 0 0 20 20"
                        >
                          <path
                            fill="#777777"
                            d="M10,5.4c-2.6,0-4.6,2.1-4.6,4.6s2.1,4.6,4.6,4.6s4.6-2.1,4.6-4.6S12.6,5.4,10,5.4z M10,13c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S11.7,13,10,13L10,13z M15.9,5.2c0,0.6-0.5,1.1-1.1,1.1c-0.6,0-1.1-0.5-1.1-1.1s0.5-1.1,1.1-1.1S15.9,4.6,15.9,5.2z M18.9,6.3c-0.1-1.4-0.4-2.7-1.5-3.8c-1.1-1.1-2.3-1.4-3.8-1.5C12.2,1,7.8,1,6.3,1.1C4.8,1.1,3.6,1.5,2.5,2.5S1.1,4.8,1.1,6.3C1,7.8,1,12.2,1.1,13.7c0.1,1.4,0.4,2.7,1.5,3.8c1.1,1.1,2.3,1.4,3.8,1.5c1.5,0.1,5.9,0.1,7.4,0c1.4-0.1,2.7-0.4,3.8-1.5c1.1-1.1,1.4-2.3,1.5-3.8C19,12.2,19,7.8,18.9,6.3L18.9,6.3z M17,15.3c-0.3,0.8-0.9,1.4-1.7,1.7c-1.2,0.5-4,0.4-5.3,0.4S5.9,17.5,4.7,17c-0.8-0.3-1.4-0.9-1.7-1.7c-0.5-1.2-0.4-4-0.4-5.3S2.5,5.9,3,4.7C3.3,3.9,3.9,3.3,4.7,3c1.2-0.5,4-0.4,5.3-0.4s4.1-0.1,5.3,0.4c0.8,0.3,1.4,0.9,1.7,1.7c0.5,1.2,0.4,4,0.4,5.3S17.5,14.1,17,15.3z"
                          ></path>
                        </svg>
                      </a>
                      <a className="hover:animate-bounce"
                        href="https://www.linkedin.com/company/weburetech/"
                        target="_blank" rel="noreferrer"
                      >
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="20px"
                          height="20px"
                          viewBox="0 0 20 20"
                          enableBackground="new 0 0 20 20"
                        >
                          <path
                            fill="#777777"
                            d="M5,19H1.3V7H5V19z M3.2,5.3C2,5.3,1,4.4,1,3.2S2,1,3.2,1s2.2,1,2.2,2.2S4.4,5.3,3.2,5.3z M19,19h-3.7v-5.8c0-1.4,0-3.2-1.9-3.2c-1.9,0-2.2,1.5-2.2,3.1V19H7.4V7h3.6v1.6H11c0.5-0.9,1.7-1.9,3.5-1.9c3.8,0,4.5,2.5,4.5,5.7L19,19L19,19z"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 buildBox">
                <div className="right_footer1">
                  <div className="row">
                    <div className="">
                    <div className="col-lg-3 col-md-3">
                      <div className="f_block f_web">
                        <a
                          className="group text-white transition-all duration-300 ease-in-out"
                          href="#"
                        >
                          <span className="text-xl font-Lexend font-medium bg-left-bottom bg-gradient-to-r from-slate-400 to-slate-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                            Build Your Team
                          </span>
                        </a>
                        <ul id="menu-about-w3nuts-1">
                          <li className="font-Lexend text-lg menu-item menu-item-type-post_type menu-item-object-page menu-item-517 hover-underline-animationfooter">
                            <a href="https://w3nuts.co.uk/about-us/">
                              How it Works
                            </a>
                          </li>
                          <li className="font-Lexend text-lg menu-item menu-item-type-post_type menu-item-object-page menu-item-525">
                            <a href="https://w3nuts.co.uk/case-studies/">
                              Why Offshore
                            </a>
                          </li>
                          <li className="font-Lexend text-lg menu-item menu-item-type-post_type menu-item-object-page menu-item-525">
                            <a href="https://w3nuts.co.uk/case-studies/">
                              Why India
                            </a>
                          </li>
                          <li className="font-Lexend text-lg menu-item menu-item-type-post_type menu-item-object-page menu-item-745">
                            <a href="https://w3nuts.co.uk/collaboration-models/">
                              Pricing Estimator
                            </a>
                          </li>
                          <li className="font-Lexend text-lg menu-item menu-item-type-post_type menu-item-object-page menu-item-760">
                            <a href="https://w3nuts.co.uk/hire-dedicated-resources/">
                              Hire Resources
                            </a>
                          </li>
                          <li className="font-Lexend text-lg menu-item menu-item-type-post_type menu-item-object-page menu-item-526">
                            <a href="https://w3nuts.co.uk/blog/">Blog</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div className="f_block f_design">
                        <a
                          className="group text-white transition-all duration-300 ease-in-out"
                          href="#"
                        >
                          <span className="text-xl font-Lexend font-medium bg-left-bottom bg-gradient-to-r from-slate-400 to-slate-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                            Services
                          </span>
                        </a>
                        <ul id="menu-design-3" className="">
                          <li className="font-Lexend text-lg menu-item menu-item-type-post_type menu-item-object-page menu-item-458">
                            <a href="https://w3nuts.co.uk/web-design/brand-design-agency-uk/">
                              SEO Service
                            </a>
                          </li>
                          <li className="font-Lexend text-lg menu-item menu-item-type-post_type menu-item-object-page menu-item-459">
                            <a href="https://w3nuts.co.uk/web-design/ui-ux-services-london/">
                              UI/UX Design
                            </a>
                          </li>
                          <li className="font-Lexend text-lg menu-item menu-item-type-post_type menu-item-object-page menu-item-460">
                            <a href="https://w3nuts.co.uk/web-design/service-design-agency-london/">
                              SEM Services
                            </a>
                          </li>
                          <li className="font-Lexend text-lg menu-item menu-item-type-post_type menu-item-object-page menu-item-461">
                            <a href="https://w3nuts.co.uk/web-design/website-design-agency-london/">
                              EMail Marketing
                            </a>
                          </li>
                          <li className="font-Lexend text-lg menu-item menu-item-type-post_type menu-item-object-page menu-item-460">
                            <a href="https://w3nuts.co.uk/web-design/service-design-agency-london/">
                              Wordpress Develpment
                            </a>
                          </li>
                          <li className="font-Lexend text-lg menu-item menu-item-type-post_type menu-item-object-page menu-item-461">
                            <a href="https://w3nuts.co.uk/web-design/website-design-agency-london/">
                              Hubspot Development
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-4 -ml-12 companyBox">
                      <div className="f_block f_ecommerce">
                        <a
                          className="group text-white transition-all duration-300 ease-in-out"
                          href="#"
                        >
                          <span className="text-xl font-Lexend font-medium bg-left-bottom bg-gradient-to-r from-slate-400 to-slate-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                            Our Company
                          </span>
                        </a>
                        <div className="footerLinks know-us" id="know-us-one">
                          <ul className="font-Lexend text-lg wrap one grow gap-211">
                            <li>
                              <a href="/know-us/about-us/" title="About">
                                About Us
                              </a>
                            </li>
                            <li>
                              <a href="/know-us/our-team/" title="Our Team">
                                Our Team
                              </a>
                            </li>
                            <li>
                              <a
                                href="/know-us/board-of-directors/"
                                title="Board of Directors"
                              >
                                Referrals
                              </a>
                            </li>
                            <li>
                              <a href="/blog/" title="Blog" target="_blank">
                                #GivingBack
                              </a>
                            </li>
                            <li className="grow">
                              <a
                                href="/collab/community-partners/"
                                title="Community Partner"
                                target="_blank"
                              >
                                #OurCulture
                              </a>
                            </li>
                            <li>
                              <a
                                href="/collab/landlord/"
                                title="Landlord Partner"
                                target="_blank"
                              >
                                Career
                              </a>
                            </li>
                            <li>
                              <a
                                href="/collab/broker/"
                                title="Broker Partner"
                                target="_blank"
                              >
                                Contact Us
                              </a>
                            </li>
                            <li>
                              <a
                                href="/collab/landlord/"
                                title="Landlord Partner"
                                target="_blank"
                              >
                                FAQs
                              </a>
                            </li>
                            <li>
                              <a
                                href="/collab/landlord/"
                                title="Landlord Partner"
                                target="_blank"
                              >
                                Case Study
                              </a>
                            </li>
                            <li>
                              <a
                                href="/collab/broker/"
                                title="Broker Partner"
                                target="_blank"
                              >
                                Podcast
                              </a>
                            </li>
                            <li>
                              <a
                                href="/collab/landlord/"
                                title="Landlord Partner"
                                target="_blank"
                              >
                                eBooks
                              </a>
                            </li>
                            <li>
                              <a
                                href="/collab/broker/"
                                title="Broker Partner"
                                target="_blank"
                              >
                                Infographics
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 ml-3">
                    <div className="right_footer">
                      <div className="row">
                        <div className="f_block f_ecommerce">
                          <a
                            className="group text-white transition-all duration-300 ease-in-out"
                            href="#"
                          >
                            <span className="text-xl font-Lexend font-medium bg-left-bottom bg-gradient-to-r from-slate-400 to-slate-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                              Technologies
                            </span>
                          </a>
                          <div className="footerLinks know-us" id="know-us-one">
                            <ul className="wrap one grow">
                              <li className="font-Lexend text-lg menu-item menu-item-type-post_type menu-item-object-page menu-item-462 flex-grow-1">
                                <a href="https://w3nuts.co.uk/technologies/wearable-app-development/">
                                  Wearable App Development
                                </a>
                              </li>
                              <li className="font-Lexend text-lg menu-item menu-item-type-post_type menu-item-object-page menu-item-463">
                                <a href="https://w3nuts.co.uk/technologies/ar-apps-development/">
                                  AR Apps Development
                                </a>
                              </li>
                              <li className="font-Lexend text-lg menu-item menu-item-type-post_type menu-item-object-page menu-item-464">
                                <a href="https://w3nuts.co.uk/technologies/big-data-services/">
                                  Big Data Services
                                </a>
                              </li>
                              <li className="font-Lexend text-lg menu-item menu-item-type-post_type menu-item-object-page menu-item-465">
                                <a href="https://w3nuts.co.uk/technologies/iot-internet-of-things/">
                                  IOT – Internet of Things
                                </a>
                              </li>
                              <li className="font-Lexend text-lg menu-item menu-item-type-post_type menu-item-object-page menu-item-466">
                                <a href="https://w3nuts.co.uk/technologies/vr-apps-development/">
                                  VR Apps Development
                                </a>
                              </li>
                              <li className="font-Lexend text-lg menu-item menu-item-type-post_type menu-item-object-page menu-item-467">
                                <a href="https://w3nuts.co.uk/technologies/chatbot-development/">
                                  Chatbot Development
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex -mt-2 pt-8 gap-2 branchBox">
                    <div className="w-1/3 border-solid branchBox1 border-2 border-[#777777] p-2">
                      <p className="text-lg md:text-xl text-white font-normal font-Lexend">India</p>
                      <p className="text-sm font-Lexend text-[#995FC6] font-normal">Bengaluru</p>
                      <p className="text-[#777777] text-[14px] font-Lexend">Embassy Techvillage, HD-073 We Work Bellandur Bangalore Karnataka</p>
                    </div>
                    <div className="w-1/3 branchBox1 border-solid border-2 border-[#777777] p-2">
                    <p className="text-lg md:text-xl text-white font-normal font-Lexend">USA</p>
                      <p className="text-sm font-Lexend text-[#995FC6] font-normal">New York</p>
                      <p className=" text-[#777777] text-[14px] md:text-md font-Lexend">1 World Trade Centre, 285 Fulton Street Suite 8500 New York City, New York</p>
                    </div>                    
                    <div className="w-1/3 branchBox1 border-solid border-2 border-[#777777] p-2">
                    <p className="text-lg md:text-xl text-white font-normal font-Lexend">United Kingdom</p>
                      <p className="text-sm font-Lexend text-[#995FC6] font-normal">London</p>
                      <p className="text-[#777777] text-[14px] md:text-md font-Lexend">Level 30 Leadenhall Building, 122 Leadenhall Street, London, EC3V 4AB, UK</p>
                    </div>
                    <div className="w-1/3 branchBox1 border-solid border-2 border-[#777777] p-2">
                    <p className="text-lg md:text-xl text-white font-normal font-Lexend">Australia</p>
                      <p className="text-sm font-Lexend text-[#995FC6] font-normal">Sydney</p>
                      <p className="text-[#777777] text-[14px] md:text-md font-Lexend">Level 24, Three International Towers Barangaroo Avenue, Sydney Australia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-5 mt-2 text-lg text-center text-slate-200 dark:text-gray-400 font-Lexend">
            © {new Date().getFullYear()}{" "}
            <a href="https://weburetech.com/" target="_blank" rel="noreferrer">Webure Technologies</a>
            {" "}
            All Rights Reserved.{" "}
            <span className={styles.footerTag}><a href="https://weburetech.com/" target="_blank" rel="noreferrer">Privacy Policy</a></span>
            {" "}
            |
            {" "}
            <span className={styles.footerTag}><a href="https://weburetech.com/" target="_blank" rel="noreferrer">Cookie Policy</a></span>
            {" "}
            |
            {" "}
            <span className={styles.footerTag}><a href="https://weburetech.com/" target="_blank" rel="noreferrer">Terms of Use</a></span>
          </div>
        </>
      </div>
    </div>
  );
}

const Twitter = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.7 14-14.37v-.65c.96-.71 1.79-1.6 2.45-2.61z" />
  </svg>
);

const Facebook = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
  </svg>
);
const Instagram = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
  </svg>
);

const Linkedin = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
  </svg>
);
