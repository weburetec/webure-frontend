import React, { useEffect, useState } from "react";
import Container from "./container";
import { Link } from "next/link";

export default function Services(props) {
  const Data = [
    {
      id: 0,
      title: "Startup Solution",
      description:
        "We help startups build product MVPs, set up teams, and access new technologies",
    },
    {
      id: 1,
      title: "Product Companies",
      description:
        "Our technical capabilities help accelerate product development & delivery.",
    },
    {
      id: 2,
      title: "Digital Agencies",
      description:
        "We help digital agencies manage talent shortages and expand expertise.",
    },
    {
      id: 3,
      title: "Enterprises",
      description:
        "Our 360° enterprise solutions range from product development to modernization.",
    },
  ];

  const ImageData = [
    "https://f.hubspotusercontent10.net/hubfs/341816/CW_Solutions_Healthcare%202x.png",
    "https://f.hubspotusercontent10.net/hubfs/341816/CW_Drag%20Drop_2x.png",
    "https://res.cloudinary.com/ds8lbdapq/image/upload/v1676891576/Programming-pana_zhhzh9.svg",
    "https://media.istockphoto.com/id/1265041897/vector/business-team-working-together-on-web-page-design-people-building-website-interface-on.jpg?s=612x612&w=0&k=20&c=0nwzJe_VQNlN94Own93LE5pqnYG5g8E1ez7M4u0NWvk=",
  ];

  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => (count + 1) % ImageData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="our-services">
      <div className="container">
        <div className="row-fluid-wrapper row-depth-1 row-number-6">
          <div
            className="span12 widget-span widget-type-cell service-pattern"
            style={{ marginBottom: "64px" }}
            data-widget-type="cell"
            data-x="0"
            data-w="12"
          >
            <div className="row-fluid-wrapper row-depth-1 row-number-7 ">
              <div className="row-fluid ">
                <div
                  className="span12 widget-span widget-type-cell container service_block service-wrap"
                  style={{}}
                  data-widget-type="cell"
                  data-x="0"
                  data-w="12"
                >
                  <div className="ourbox row-fluid-wrapper row-depth-1 row-number-8 ">
                    <div className="container p-8 mx-auto xl:px-0 flex w-full flex-col  items-center justify-center text-center">
                      <span className="hiring">OUR SERVICES</span>
                      <h2 className="font-Lexend text-4xl font-bold">
                        Digital Solutions That Drive Change
                      </h2>
                      <p className="text-white font-Lexend -mt-5 text-opacity-0">
                        Digital Solutions That Drive Change
                      </p>
                    </div>
                  </div>
                  
                  <div className="row-fluid-wrapper  row-depth-1 row-number-9 ">
                    <div className="grid  grid-cols-1 drivebox   mx-auto gap-5 md:grid-cols-2 lg:grid-cols-4">
                     
                      <div
                        className="span3   widget-span  widget-type-custom_widget possibilities-tile serviicebg1"
                        style={{}}
                        data-widget-type="custom_widget"
                        data-x="0"
                        data-w="3"
                      >
                        <div
                          id="hs_cos_wrapper_module_1597130703376814"
                          className="  hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-rich_text"
                          style={{}}
                          data-hs-cos-general-type="widget"
                          data-hs-cos-type="module"
                        >
                          <span
                            id="hs_cos_wrapper_module_1597130703376814_"
                            className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_rich_text"
                            style={{}}
                            data-hs-cos-general-type="widget"
                            data-hs-cos-type="rich_text"
                          >
                            <a
                              href="/product-development"
                              target="_blank"
                              rel="noopener"
                              linktext="Custom Software Development"
                            >
                              <img
                                src="https://www.classicinformatics.com/hs-fs/hubfs/service-icon1.png?width=87&amp;name=service-icon1.png"
                                alt="service-icon1"
                                width="87"
                                style={{ width: "87px" }}
                                srcSet="https://www.classicinformatics.com/hs-fs/hubfs/service-icon1.png?width=44&amp;name=service-icon1.png 44w, https://www.classicinformatics.com/hs-fs/hubfs/service-icon1.png?width=87&amp;name=service-icon1.png 87w, https://www.classicinformatics.com/hs-fs/hubfs/service-icon1.png?width=131&amp;name=service-icon1.png 131w, https://www.classicinformatics.com/hs-fs/hubfs/service-icon1.png?width=174&amp;name=service-icon1.png 174w, https://www.classicinformatics.com/hs-fs/hubfs/service-icon1.png?width=218&amp;name=service-icon1.png 218w, https://www.classicinformatics.com/hs-fs/hubfs/service-icon1.png?width=261&amp;name=service-icon1.png 261w"
                                sizes="(max-width: 87px) 100vw, 87px"
                              />
                              <h3 className="font-Lexend font-semibold mb-3 text-xs">
                                Product Designing
                              </h3>
                              <p className=" font-Lexend text-base text-justify">
                                Building and supercharging your web, mobile
                                &amp; digital products from design to delivery
                                from scratch.
                              </p>
                            </a>
                          </span>
                        </div>
                      </div>
                      <div
                        className="span3 widget-span widget-type-custom_widget possibilities-tile serviicebg2"
                        style={{}}
                        data-widget-type="custom_widget"
                        data-x="3"
                        data-w="3"
                      >
                        <div
                          id="hs_cos_wrapper_module_1643090549575313"
                          className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-rich_text"
                          style={{}}
                          data-hs-cos-general-type="widget"
                          data-hs-cos-type="module"
                        >
                          <span
                            id="hs_cos_wrapper_module_1643090549575313_"
                            className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_rich_text"
                            style={{}}
                            data-hs-cos-general-type="widget"
                            data-hs-cos-type="rich_text"
                          >
                            <a
                              href="/customer-experience"
                              target="_blank"
                              rel="noopener"
                            >
                              <img
                                src="https://www.classicinformatics.com/hs-fs/hubfs/service-icon2.png?width=87&amp;name=service-icon2.png"
                                alt="service-icon2"
                                style={{ width: "87px" }}
                                srcSet="https://www.classicinformatics.com/hs-fs/hubfs/service-icon2.png?width=44&amp;name=service-icon2.png 44w, https://www.classicinformatics.com/hs-fs/hubfs/service-icon2.png?width=87&amp;name=service-icon2.png 87w, https://www.classicinformatics.com/hs-fs/hubfs/service-icon2.png?width=131&amp;name=service-icon2.png 131w, https://www.classicinformatics.com/hs-fs/hubfs/service-icon2.png?width=174&amp;name=service-icon2.png 174w, https://www.classicinformatics.com/hs-fs/hubfs/service-icon2.png?width=218&amp;name=service-icon2.png 218w, https://www.classicinformatics.com/hs-fs/hubfs/service-icon2.png?width=261&amp;name=service-icon2.png 261w"
                                sizes="(max-width: 87px) 100vw, 87px"
                              />
                              <h3 className="font-Lexend font-semibold mb-3 text-xs">
                                User Experience
                              </h3>
                              <p className="font-Lexend text-base text-justify">
                                Keeping people, process, and product in mind to
                                design, develop &amp; deliver unmatched
                                experiences.
                              </p>
                            </a>
                          </span>
                        </div>
                      </div>
                      <div
                        className="span3 widget-span widget-type-custom_widget possibilities-tile serviicebg3"
                        style={{}}
                        data-widget-type="custom_widget"
                        data-x="6"
                        data-w="3"
                      >
                        <div
                          id="hs_cos_wrapper_module_1597130714432817"
                          className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-rich_text"
                          style={{}}
                          data-hs-cos-general-type="widget"
                          data-hs-cos-type="module"
                        >
                          <span
                            id="hs_cos_wrapper_module_1597130714432817_"
                            className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_rich_text"
                            style={{}}
                            data-hs-cos-general-type="widget"
                            data-hs-cos-type="rich_text"
                          >
                            <a
                              href="/enterprise-digital-transformation/"
                              target="_blank"
                              rel="noopener"
                              linktext="Digital Transformation Enabling enterprises to leverage new-gen technologies to improve efficiency &amp; innovate."
                            >
                              <img
                                src="https://www.classicinformatics.com/hs-fs/hubfs/service-icon3.png?width=87&amp;name=service-icon3.png"
                                alt="service-icon3"
                                style={{ width: "87px" }}
                                srcSet="https://www.classicinformatics.com/hs-fs/hubfs/service-icon3.png?width=44&amp;name=service-icon3.png 44w, https://www.classicinformatics.com/hs-fs/hubfs/service-icon3.png?width=87&amp;name=service-icon3.png 87w, https://www.classicinformatics.com/hs-fs/hubfs/service-icon3.png?width=131&amp;name=service-icon3.png 131w, https://www.classicinformatics.com/hs-fs/hubfs/service-icon3.png?width=174&amp;name=service-icon3.png 174w, https://www.classicinformatics.com/hs-fs/hubfs/service-icon3.png?width=218&amp;name=service-icon3.png 218w, https://www.classicinformatics.com/hs-fs/hubfs/service-icon3.png?width=261&amp;name=service-icon3.png 261w"
                                sizes="(max-width: 87px) 100vw, 87px"
                              />
                              <h3 className="font-Lexend font-semibold mb-3 text-xs">
                                Digital Transform
                              </h3>
                              <p className="font-Lexend text-base text-justify">
                                Enabling enterprises to leverage new-generation
                                technologies to improve efficiency &amp;
                                innovate.
                              </p>
                            </a>
                          </span>
                        </div>
                      </div>
                      <div
                        className="span3 widget-span widget-type-custom_widget possibilities-tile serviicebg4"
                        style={{}}
                        data-widget-type="custom_widget"
                        data-x="9"
                        data-w="3"
                      >
                        <div
                          id="hs_cos_wrapper_module_1643090536355301"
                          className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-rich_text"
                          style={{}}
                          data-hs-cos-general-type="widget"
                          data-hs-cos-type="module"
                        >
                          <span
                            id="hs_cos_wrapper_module_1643090536355301_"
                            className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_rich_text"
                            style={{}}
                            data-hs-cos-general-type="widget"
                            data-hs-cos-type="rich_text"
                          >
                            <a
                              href="/ai-ml-development"
                              target="_blank"
                              rel="noopener"
                            >
                              <img
                                src="https://www.classicinformatics.com/hs-fs/hubfs/service-icon4.png?width=87&amp;name=service-icon4.png"
                                alt="service-icon4"
                                style={{ width: "87px" }}
                                srcSet="https://www.classicinformatics.com/hs-fs/hubfs/service-icon4.png?width=44&amp;name=service-icon4.png 44w, https://www.classicinformatics.com/hs-fs/hubfs/service-icon4.png?width=87&amp;name=service-icon4.png 87w, https://www.classicinformatics.com/hs-fs/hubfs/service-icon4.png?width=131&amp;name=service-icon4.png 131w, https://www.classicinformatics.com/hs-fs/hubfs/service-icon4.png?width=174&amp;name=service-icon4.png 174w, https://www.classicinformatics.com/hs-fs/hubfs/service-icon4.png?width=218&amp;name=service-icon4.png 218w, https://www.classicinformatics.com/hs-fs/hubfs/service-icon4.png?width=261&amp;name=service-icon4.png 261w"
                                sizes="(max-width: 87px) 100vw, 87px"
                              />
                              <h3 className="font-Lexend font-semibold mb-3 text-xs">
                                Digital Solution
                              </h3>
                              <p className="font-Lexend text-base text-justify">
                                Providing consultation &amp; engineers for
                                new-age technologies like AI, ML, IoT,
                                Blockchain and more.
                              </p>
                            </a>
                          </span>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row-fluid-wrapper row-depth-1 row-number-10 ">
          <div className="row-fluid ">
            <div
              className="span12 widget-span widget-type-cell pad-bot service2-pattern"
              style={{}}
              data-widget-type="cell"
              data-x="0"
              data-w="12"
            >
              <div className="row-fluid-wrapper row-depth-1 row-number-11 ">
                <div className="row-fluid ">
                  <div
                    className="span12 widget-span widget-type-cell "
                    style={{}}
                    data-widget-type="cell"
                    data-x="0"
                    data-w="12"
                  >
                    <div className="row-fluid-wrapper row-depth-1 row-number-12 ">
                      <div className="row-fluid ">
                        <div
                          id="myList"
                          className="span12 widget-span widget-type-cell container tile-wrap"
                          style={{ marginBottom: "30px" }}
                          data-widget-type="cell"
                          data-x="0"
                          data-w="12"
                        >
                          <div
                            className="row-fluid-wrapper row-depth-1 row-number-13 "
                            style={{ display: "block" }}
                          >
                            <div className="row-fluid">
                              <div
                                className="span6 widget-span widget-type-cell production-Unit"
                                style={{}}
                                data-widget-type="cell"
                                data-x="0"
                                data-w="6"
                              >
                                <div className="row-fluid-wrapper row-depth-2 row-number-1 ">
                                  <div className="row-fluid ">
                                    <div
                                      className="span2 widget-span widget-type-custom_widget "
                                      style={{}}
                                      data-widget-type="custom_widget"
                                      data-x="0"
                                      data-w="2"
                                    >
                                      <div
                                        className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-rich_text"
                                        style={{}}
                                        data-hs-cos-general-type="widget"
                                        data-hs-cos-type="module"
                                      >
                                        <span
                                          className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_rich_text"
                                          style={{}}
                                          data-hs-cos-general-type="widget"
                                          data-hs-cos-type="rich_text"
                                        >
                                          <img 
                                          
                                            src="https://www.classicinformatics.com/hs-fs/hubfs/service-icon5.png?width=87&amp;name=service-icon5.png"
                                            alt="service-icon5"
                                            style={{ width: "87px" }}
                                            srcSet="https://www.classicinformatics.com/hs-fs/hubfs/service-icon5.png?width=44&amp;name=service-icon5.png 44w, https://www.classicinformatics.com/hs-fs/hubfs/service-icon5.png?width=87&amp;name=service-icon5.png 87w, https://www.classicinformatics.com/hs-fs/hubfs/service-icon5.png?width=131&amp;name=service-icon5.png 131w, https://www.classicinformatics.com/hs-fs/hubfs/service-icon5.png?width=174&amp;name=service-icon5.png 174w, https://www.classicinformatics.com/hs-fs/hubfs/service-icon5.png?width=218&amp;name=service-icon5.png 218w, https://www.classicinformatics.com/hs-fs/hubfs/service-icon5.png?width=261&amp;name=service-icon5.png 261w"
                                            sizes="(max-width: 87px) 100vw, 87px"
                                          />
                                          <p>&nbsp;</p>
                                        </span>
                                      </div>
                                    </div>
                                    <div
                                      className="span10 widget-span widget-type-custom_widget section_Wrapper"
                                      style={{}}
                                      data-widget-type="custom_widget"
                                      data-x="2"
                                      data-w="10"
                                    >
                                      <div
                                        className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-rich_text"
                                        style={{}}
                                        data-hs-cos-general-type="widget"
                                        data-hs-cos-type="module"
                                      >
                                        <span
                                          className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_rich_text"
                                          style={{}}
                                          data-hs-cos-general-type="widget"
                                          data-hs-cos-type="rich_text"
                                        >
                                          <a
                                            href="/custom-software-development"
                                            target="_blank"
                                            rel="noopener"
                                          >
                                            <h3 className="font-Lexend text-lg font-semibold">
                                              Custom Software Development
                                            </h3>
                                            <p className="font-Lexend text-lg text-gray-600">
                                              Customized webapp for your
                                              specific needs.
                                            </p>
                                          </a>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="span6 widget-span widget-type-cell production-Unit"
                                style={{}}
                                data-widget-type="cell"
                                data-x="6"
                                data-w="6"
                              >
                                <div className="row-fluid-wrapper row-depth-2 row-number-2 ">
                                  <div className="row-fluid ">
                                    <div
                                      className="span2 widget-span widget-type-custom_widget "
                                      style={{}}
                                      data-widget-type="custom_widget"
                                      data-x="0"
                                      data-w="2"
                                    >
                                      <div
                                        className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-rich_text"
                                        style={{}}
                                        data-hs-cos-general-type="widget"
                                        data-hs-cos-type="module"
                                      >
                                        <span
                                          className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_rich_text"
                                          style={{}}
                                          data-hs-cos-general-type="widget"
                                          data-hs-cos-type="rich_text"
                                        >
                                          <img 
                                          
                                            src="https://www.classicinformatics.com/hs-fs/hubfs/service-icon6.png?width=87&amp;name=service-icon6.png"
                                            alt="service-icon6"
                                            style={{ width: "87px" }}
                                            srcSet="https://www.classicinformatics.com/hs-fs/hubfs/service-icon6.png?width=44&amp;name=service-icon6.png 44w, https://www.classicinformatics.com/hs-fs/hubfs/service-icon6.png?width=87&amp;name=service-icon6.png 87w, https://www.classicinformatics.com/hs-fs/hubfs/service-icon6.png?width=131&amp;name=service-icon6.png 131w, https://www.classicinformatics.com/hs-fs/hubfs/service-icon6.png?width=174&amp;name=service-icon6.png 174w, https://www.classicinformatics.com/hs-fs/hubfs/service-icon6.png?width=218&amp;name=service-icon6.png 218w, https://www.classicinformatics.com/hs-fs/hubfs/service-icon6.png?width=261&amp;name=service-icon6.png 261w"
                                            sizes="(max-width: 87px) 100vw, 87px"
                                          />
                                          <p>&nbsp;</p>
                                        </span>
                                      </div>
                                    </div>
                                    <div
                                      className="span10 widget-span widget-type-custom_widget section_Wrapper"
                                      style={{}}
                                      data-widget-type="custom_widget"
                                      data-x="2"
                                      data-w="10"
                                    >
                                      <div
                                        className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-rich_text"
                                        style={{}}
                                        data-hs-cos-general-type="widget"
                                        data-hs-cos-type="module"
                                      >
                                        <span
                                          className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_rich_text"
                                          style={{}}
                                          data-hs-cos-general-type="widget"
                                          data-hs-cos-type="rich_text"
                                        >
                                          <a
                                            href="/mvp-development"
                                            target="_blank"
                                            rel="noopener"
                                          >
                                            <h3 className="font-Lexend text-lg font-semibold">
                                              MVP Development
                                            </h3>
                                            <p className="font-Lexend text-lg text-gray-600">
                                              Rapid prototyping for testing
                                              potential in weeks.
                                            </p>
                                          </a>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="row-fluid-wrapper row-depth-1 row-number-1 "
                            style={{ display: "block" }}
                          >
                            <div className="row-fluid ">
                              <div
                                className="span6 widget-span widget-type-cell production-Unit"
                                style={{}}
                                data-widget-type="cell"
                                data-x="0"
                                data-w="6"
                              >
                                <div className="row-fluid-wrapper row-depth-2 row-number-1 ">
                                  <div className="row-fluid ">
                                    <div
                                      className="span2 widget-span widget-type-custom_widget "
                                      style={{}}
                                      data-widget-type="custom_widget"
                                      data-x="0"
                                      data-w="2"
                                    >
                                      <div
                                        className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-rich_text"
                                        style={{}}
                                        data-hs-cos-general-type="widget"
                                        data-hs-cos-type="module"
                                      >
                                        <span
                                          className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_rich_text"
                                          style={{}}
                                          data-hs-cos-general-type="widget"
                                          data-hs-cos-type="rich_text"
                                        >
                                          <img 
                                          
                                            src="https://www.classicinformatics.com/hs-fs/hubfs/service-icon7.png?width=87&amp;name=service-icon7.png"
                                            alt="service-icon7"
                                            style={{ width: "87px" }}
                                            srcSet="https://www.classicinformatics.com/hs-fs/hubfs/service-icon7.png?width=44&amp;name=service-icon7.png 44w, https://www.classicinformatics.com/hs-fs/hubfs/service-icon7.png?width=87&amp;name=service-icon7.png 87w, https://www.classicinformatics.com/hs-fs/hubfs/service-icon7.png?width=131&amp;name=service-icon7.png 131w, https://www.classicinformatics.com/hs-fs/hubfs/service-icon7.png?width=174&amp;name=service-icon7.png 174w, https://www.classicinformatics.com/hs-fs/hubfs/service-icon7.png?width=218&amp;name=service-icon7.png 218w, https://www.classicinformatics.com/hs-fs/hubfs/service-icon7.png?width=261&amp;name=service-icon7.png 261w"
                                            sizes="(max-width: 87px) 100vw, 87px"
                                          />
                                          <p>&nbsp;</p>
                                        </span>
                                      </div>
                                    </div>
                                    <div
                                      className="span10 widget-span widget-type-custom_widget section_Wrapper"
                                      style={{}}
                                      data-widget-type="custom_widget"
                                      data-x="2"
                                      data-w="10"
                                    >
                                      <div
                                        className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-rich_text"
                                        style={{}}
                                        data-hs-cos-general-type="widget"
                                        data-hs-cos-type="module"
                                      >
                                        <span
                                          className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_rich_text"
                                          style={{}}
                                          data-hs-cos-general-type="widget"
                                          data-hs-cos-type="rich_text"
                                        >
                                          <a
                                            href="/ecommerce-development/"
                                            target="_blank"
                                            rel="noopener"
                                          >
                                            <h3 className="font-Lexend text-lg font-semibold">
                                              Digital Commerce
                                            </h3>
                                            <p className="font-Lexend text-lg text-gray-600">
                                              Crafting intuitive digital
                                              commerce experiences.
                                            </p>
                                          </a>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="span6 widget-span widget-type-cell production-Unit"
                                style={{}}
                                data-widget-type="cell"
                                data-x="6"
                                data-w="6"
                              >
                                <div className="row-fluid-wrapper row-depth-2 row-number-2 ">
                                  <div className="row-fluid ">
                                    <div
                                      className="span2 widget-span widget-type-custom_widget "
                                      style={{}}
                                      data-widget-type="custom_widget"
                                      data-x="0"
                                      data-w="2"
                                    >
                                      <div
                                        className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-rich_text"
                                        style={{}}
                                        data-hs-cos-general-type="widget"
                                        data-hs-cos-type="module"
                                      >
                                        <span
                                          className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_rich_text"
                                          style={{}}
                                          data-hs-cos-general-type="widget"
                                          data-hs-cos-type="rich_text"
                                        >
                                          <img 
                                          
                                            src="https://www.classicinformatics.com/hs-fs/hubfs/service-icon8.png?width=87&amp;name=service-icon8.png"
                                            alt="service-icon8"
                                            style={{ width: "87px" }}
                                            srcSet="https://www.classicinformatics.com/hs-fs/hubfs/service-icon8.png?width=44&amp;name=service-icon8.png 44w, https://www.classicinformatics.com/hs-fs/hubfs/service-icon8.png?width=87&amp;name=service-icon8.png 87w, https://www.classicinformatics.com/hs-fs/hubfs/service-icon8.png?width=131&amp;name=service-icon8.png 131w, https://www.classicinformatics.com/hs-fs/hubfs/service-icon8.png?width=174&amp;name=service-icon8.png 174w, https://www.classicinformatics.com/hs-fs/hubfs/service-icon8.png?width=218&amp;name=service-icon8.png 218w, https://www.classicinformatics.com/hs-fs/hubfs/service-icon8.png?width=261&amp;name=service-icon8.png 261w"
                                            sizes="(max-width: 87px) 100vw, 87px"
                                          />
                                          <p>&nbsp;</p>
                                        </span>
                                      </div>
                                    </div>
                                    <div
                                      className="span10 widget-span widget-type-custom_widget section_Wrapper"
                                      style={{}}
                                      data-widget-type="custom_widget"
                                      data-x="2"
                                      data-w="10"
                                    >
                                      <div
                                        className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-rich_text"
                                        style={{}}
                                        data-hs-cos-general-type="widget"
                                        data-hs-cos-type="module"
                                      >
                                        <span
                                          className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_rich_text"
                                          style={{}}
                                          data-hs-cos-general-type="widget"
                                          data-hs-cos-type="rich_text"
                                        >
                                          <a
                                            href="/bi-consulting-development"
                                            target="_blank"
                                            rel="noopener"
                                          >
                                            <h3 className="font-Lexend text-lg font-semibold">
                                              Business Intelligence
                                            </h3>
                                            <p className="font-Lexend text-lg text-gray-600">
                                              Infusing intelligence in business
                                              with strategies.
                                            </p>
                                          </a>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row-fluid-wrapper row-depth-1 row-number-1 ">
                            <div className="row-fluid ">
                              <div
                                className="span6 widget-span widget-type-cell production-Unit"
                                style={{}}
                                data-widget-type="cell"
                                data-x="0"
                                data-w="6"
                              >
                                <div className="row-fluid-wrapper row-depth-2 row-number-1 ">
                                  <div className="row-fluid ">
                                    <div
                                      className="span2 widget-span widget-type-custom_widget "
                                      style={{}}
                                      data-widget-type="custom_widget"
                                      data-x="0"
                                      data-w="2"
                                    >
                                      <div
                                        className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-rich_text"
                                        style={{}}
                                        data-hs-cos-general-type="widget"
                                        data-hs-cos-type="module"
                                      >
                                        <span
                                          className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_rich_text"
                                          style={{}}
                                          data-hs-cos-general-type="widget"
                                          data-hs-cos-type="rich_text"
                                        >
                                          <img 
                                          
                                            src="https://www.classicinformatics.com/hs-fs/hubfs/service-icon9.png?width=87&amp;name=service-icon9.png"
                                            alt="service-icon9"
                                            style={{ width: "87px" }}
                                            srcSet="https://www.classicinformatics.com/hs-fs/hubfs/service-icon9.png?width=44&amp;name=service-icon9.png 44w, https://www.classicinformatics.com/hs-fs/hubfs/service-icon9.png?width=87&amp;name=service-icon9.png 87w, https://www.classicinformatics.com/hs-fs/hubfs/service-icon9.png?width=131&amp;name=service-icon9.png 131w, https://www.classicinformatics.com/hs-fs/hubfs/service-icon9.png?width=174&amp;name=service-icon9.png 174w, https://www.classicinformatics.com/hs-fs/hubfs/service-icon9.png?width=218&amp;name=service-icon9.png 218w, https://www.classicinformatics.com/hs-fs/hubfs/service-icon9.png?width=261&amp;name=service-icon9.png 261w"
                                            sizes="(max-width: 87px) 100vw, 87px"
                                          />
                                          <p>&nbsp;</p>
                                        </span>
                                      </div>
                                    </div>
                                    <div
                                      className="span10 widget-span widget-type-custom_widget section_Wrapper"
                                      style={{}}
                                      data-widget-type="custom_widget"
                                      data-x="2"
                                      data-w="10"
                                    >
                                      <div
                                        className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-rich_text"
                                        style={{}}
                                        data-hs-cos-general-type="widget"
                                        data-hs-cos-type="module"
                                      >
                                        <span
                                          className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_rich_text"
                                          style={{}}
                                          data-hs-cos-general-type="widget"
                                          data-hs-cos-type="rich_text"
                                        >
                                          <a
                                            href="/cms-development/"
                                            target="_blank"
                                            rel="noopener"
                                          >
                                            <h3 className="font-Lexend text-lg font-semibold">
                                              Content Management Systems
                                            </h3>
                                            <p className="font-Lexend text-lg text-gray-600">
                                              Buiding platforms to simplify
                                              content management.
                                            </p>
                                          </a>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="span6 widget-span widget-type-cell production-Unit"
                                style={{}}
                                data-widget-type="cell"
                                data-x="6"
                                data-w="6"
                              >
                                <div className="row-fluid-wrapper row-depth-2 row-number-2 ">
                                  <div className="row-fluid ">
                                    <div
                                      className="span2 widget-span widget-type-custom_widget "
                                      style={{}}
                                      data-widget-type="custom_widget"
                                      data-x="0"
                                      data-w="2"
                                    >
                                      <div
                                        className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-rich_text"
                                        style={{}}
                                        data-hs-cos-general-type="widget"
                                        data-hs-cos-type="module"
                                      >
                                        <span
                                          className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_rich_text"
                                          style={{}}
                                          data-hs-cos-general-type="widget"
                                          data-hs-cos-type="rich_text"
                                        >
                                          <img 
                                          
                                            src="https://www.classicinformatics.com/hs-fs/hubfs/service-icon10.png?width=87&amp;name=service-icon10.png"
                                            alt="service-icon10"
                                            style={{ width: "87px" }}
                                            srcSet="https://www.classicinformatics.com/hs-fs/hubfs/service-icon10.png?width=44&amp;name=service-icon10.png 44w, https://www.classicinformatics.com/hs-fs/hubfs/service-icon10.png?width=87&amp;name=service-icon10.png 87w, https://www.classicinformatics.com/hs-fs/hubfs/service-icon10.png?width=131&amp;name=service-icon10.png 131w, https://www.classicinformatics.com/hs-fs/hubfs/service-icon10.png?width=174&amp;name=service-icon10.png 174w, https://www.classicinformatics.com/hs-fs/hubfs/service-icon10.png?width=218&amp;name=service-icon10.png 218w, https://www.classicinformatics.com/hs-fs/hubfs/service-icon10.png?width=261&amp;name=service-icon10.png 261w"
                                            sizes="(max-width: 87px) 100vw, 87px"
                                          />
                                          <p>&nbsp;</p>
                                        </span>
                                      </div>
                                    </div>
                                    <div
                                      className="span10 widget-span widget-type-custom_widget section_Wrapper"
                                      style={{}}
                                      data-widget-type="custom_widget"
                                      data-x="2"
                                      data-w="10"
                                    >
                                      <div
                                        className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-rich_text"
                                        style={{}}
                                        data-hs-cos-general-type="widget"
                                        data-hs-cos-type="module"
                                      >
                                        <span
                                          className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_rich_text"
                                          style={{}}
                                          data-hs-cos-general-type="widget"
                                          data-hs-cos-type="rich_text"
                                        >
                                          <a
                                            href="/demand-generation"
                                            target="_blank"
                                            rel="noopener"
                                          >
                                            <h3 className="font-Lexend text-lg font-semibold">
                                              Inbound Marketing
                                            </h3>
                                            <p className="font-Lexend text-lg text-gray-600">
                                              Paving new ways to increase
                                              traffic &amp; inbound leads.
                                            </p>
                                          </a>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row-fluid ">
          <div
            className="span12 widget-span widget-type-cell pad-topp pad-bot tech-pattern"
            style={{}}
            data-widget-type="cell"
            data-x="0"
            data-w="12"
          >
            <div className="row-fluid-wrapper row-depth-1 row-number-3 ">
              <div className="row-fluid ">
                <div
                  className="span12 widget-span widget-type-cell container latest_Section-data"
                  style={{}}
                  data-widget-type="cell"
                  data-x="0"
                  data-w="12"
                >
                  <div className="row-fluid-wrapper row-depth-1 row-number-4 ">
                    <div className="row-fluid ">
                      <div
                        className="span4 widget-span widget-type-custom_widget "
                        style={{}}
                        data-widget-type="custom_widget"
                        data-x="0"
                        data-w="4"
                      >
                        <div
                          className="hs_cos_wrapper hs_cos_wrapper1 hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-rich_text"
                          style={{}}
                          data-hs-cos-general-type="widget"
                          data-hs-cos-type="module"
                        >
                          <span className="hiring font-Lexend text-sm">
                            Our Technologies
                          </span>
                          <h2 className="font-Lexend font-bold text-3xl">
                            Tech Stack For Your Mission-critical Projects
                          </h2>
                          <p className="font-Lexend text-lg text-justify">
                            Bringing together the best of front-end, back-end,
                            web, and mobile technologies &amp; platforms to
                            build an awesome product. Experts at end-to-end
                            product engineering & building custom software at
                            scale for start-ups and enterprises. Outsource
                            product development, build on-demand teams, or hire
                            individual remote developers.
                          </p>
                          <div className="btn-get-touch">
                            <button
                              className="btn font-Lexend"
                              data-toggle="modal"
                              data-target="/contactus"
                            >
                              Have a Project
                            </button>
                          </div>
                        </div>
                      </div>
                      <div
                        className="span8 widget-span widget-type-custom_widget"
                        style={{
                          textAlign: "center",
                          position: "relative",
                          zIndex: "1",
                        }}
                        data-widget-type="custom_widget"
                        data-x="4"
                        data-w="8"
                      >
                        <div
                          className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-linked_image"
                          style={{}}
                          data-hs-cos-general-type="widget"
                          data-hs-cos-type="module"
                        >
                          <span
                            className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_linked_image"
                            style={{}}
                            data-hs-cos-general-type="widget"
                            data-hs-cos-type="linked_image"
                          >
                            <img
                              src="https://www.classicinformatics.com/hubfs/tech-logos.png"
                              className="hs-image-widget "
                              style={{ maxWidth: "100%", height: "auto" }}
                              alt="tech-logos"
                              title="tech-logos"
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row-fluid ">
          <div
            className="span12 widget-span widget-type-cell "
            style={{}}
            data-widget-type="cell"
            data-x="0"
            data-w="12"
          >
            <div className="row-fluid-wrapper row-depth-1 row-number-6 ">
              <div className="row-fluid ">
                <div
                  className="span12 widget-span widget-type-global_group pad-top pad-bot"
                  style={{}}
                  data-widget-type="global_group"
                  data-x="0"
                  data-w="12"
                >
                  <div
                    className=""
                    data-global-widget-path="generated_global_groups/25084627327.html"
                  >
                    <div className="row-fluid-wrapper row-depth-1 row-number-1 ">
                      <div className="row-fluid ">
                        <div
                          className="span12 widget-span widget-type-cell container outsource-product engage-us"
                          style={{}}
                          data-widget-type="cell"
                          data-x="0"
                          data-w="12"
                        >
                          <div className="row-fluid-wrapper row-depth-1 row-number-4 ">
                            <div className="row-fluid ">
                              <div
                                className="span5 widget-span widget-type-cell engage-boxx"
                                style={{}}
                                data-widget-type="cell"
                                data-x="0"
                                data-w="5"
                              >
                                <div className="row-fluid-wrapper row-depth-1 row-number-5 ">
                                  <div className="row-fluid ">
                                    <div
                                      className="span12 widget-span widget-type-custom_widget "
                                      style={{}}
                                      data-widget-type="custom_widget"
                                      data-x="0"
                                      data-w="12"
                                    >
                                      <div
                                        className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-rich_text"
                                        style={{}}
                                        data-hs-cos-general-type="widget"
                                        data-hs-cos-type="module"
                                      >
                                        <span
                                          className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_rich_text"
                                          style={{}}
                                          data-hs-cos-general-type="widget"
                                          data-hs-cos-type="rich_text"
                                        >
                                          <div className="engage-left">
                                            <h2 className="font-Lexend text-lg font-semibold">
                                              Managed <br />
                                              Product Development
                                            </h2>
                                            <div>
                                              <p className="font-Lexend text-xl font-normal">
                                                On demand agile teams for end to
                                                end product engineering starting
                                                from conceptualization, rapid
                                                MVPs, development to scaling and
                                                more.
                                              </p>
                                              <a
                                                className="font-Lexend text-base font-semibold"
                                                href="/hiretalent"
                                              >
                                                Build a Team
                                              </a>
                                            </div>
                                          </div>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="span7 widget-span widget-type-cell engage-boxx "
                                style={{}}
                                data-widget-type="cell"
                                data-x="5"
                                data-w="7"
                              >
                                <div className="row-fluid-wrapper row-depth-1 row-number-6 ">
                                  <div className="row-fluid ">
                                    <div
                                      className="span12 widget-span widget-type-custom_widget slide-patterne1"
                                      style={{}}
                                      data-widget-type="custom_widget"
                                      data-x="0"
                                      data-w="12"
                                    >
                                      <div
                                        className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-rich_text"
                                        style={{}}
                                        data-hs-cos-general-type="widget"
                                        data-hs-cos-type="module"
                                      >
                                        <span
                                          className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_rich_text"
                                          style={{}}
                                          data-hs-cos-general-type="widget"
                                          data-hs-cos-type="rich_text"
                                        >
                                          <div className="engage-right">
                                            <h2 className="font-Lexend text-lg font-semibold">
                                              Build Extended Teams
                                            </h2>
                                            <div>
                                              <p className="font-Lexend text-xl font-normal">
                                                A team that is an extension of
                                                yours. Fill in short-term
                                                technology gaps or build a
                                                Centre of Excellence.
                                              </p>
                                              <a
                                                className="font-Lexend text-base font-semibold"
                                                style={{
                                                  backgroundColor: "#581C87",
                                                }}
                                                href="/hiretalent"
                                              >
                                                Hire a Team
                                              </a>
                                            </div>
                                          </div>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="row-fluid-wrapper row-depth-1 row-number-7 pt-2">
                                  <div className="row-fluid ">
                                    <div
                                      className="span12 widget-span widget-type-custom_widget slide-patterne2"
                                      style={{}}
                                      data-widget-type="custom_widget"
                                      data-x="0"
                                      data-w="12"
                                    >
                                      <div
                                        className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-rich_text"
                                        style={{}}
                                        data-hs-cos-general-type="widget"
                                        data-hs-cos-type="module"
                                      >
                                        <span
                                          className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_rich_text"
                                          style={{}}
                                          data-hs-cos-general-type="widget"
                                          data-hs-cos-type="rich_text"
                                        >
                                          <div className="engage-right">
                                            <h2 className="font-Lexend text-lg font-semibold">
                                              Hire Remote Developers
                                            </h2>
                                            <div>
                                              <p className="font-Lexend text-xl font-normal">
                                                Have specific requirements?
                                                <br />
                                                Hire one of our expert
                                                developers on demand.
                                              </p>
                                              <a
                                                className="font-Lexend text-base font-semibold"
                                                style={{
                                                  backgroundColor: "#581C87",
                                                }}
                                                href="/hiretalent"
                                              >
                                                Book Interview
                                              </a>
                                            </div>
                                          </div>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="page-center">
          <div
            className="tabs__wrapper col-space-2 flex-wrap flex-middle image-large reverse-order row-fluid"
            id="tabs-1"
          >
            <div className="tab__images flex-item col2 image-side w-shadow">
              <div className="header-content">
                <h2 className="-ml-20 pt-12 font-Lexend text-2xl font-bold text-left">
                  Trusted Full Service Design Agency since 2015
                </h2>
                <div className="image-inner">
                  <h3 className="-ml-20 font-Lexend text-lg leading-6 text-justify text-gray-600">
                    Webure Technologies teams up with Startups, SMEs &
                    Enterprises to build and deliver user-centric products and
                    solutions. We do it by infusing our technical expertise with
                    design thinking, enabling businesses to transform the way
                    they work.
                  </h3>
                </div>
                <div className="tab__image  active">
                  <img
                    className="lazy loaded"
                    alt="Secure Contract Repository"
                    loading="lazy"
                    src={ImageData[count]}
                  />
                </div>
              </div>
            </div>
            <div className="tabs flex-item col1 content-side">
              <div className="content-inner   scroll-smooth ">
                <br />
                {Data.length &&
                  Data.map((e) => (
                    <div
                      className={` bg-white font-normal cursor-pointer rounded-lg border-2 border-gray-300 p-6 m-6 mx-auto max-w-md ${
                        e.id === count ? "border-purple-800" : ""
                      } `}
                    >
                      <p className="font-Lexend text-lg font-semibold">
                        <strong>{e.title}</strong>
                      </p>
                      <p className="font-Lexend text-lg font-normal">
                        {e.description}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
