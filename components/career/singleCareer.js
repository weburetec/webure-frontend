import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import {
  faFacebookF,
  faGooglePlusG,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/router";
import { Formik, Form } from "formik";
import Select from "react-select";

import { styles } from "./careerPage";
import { useDispatch, useSelector } from "react-redux";
import {
  applyVacancy,
  getVacancy,
} from "../../feature/action/vacancy/vacancyAction";
import HtmlParser from "react-html-parser";
import { validationSchema } from "./validation";

// styles
const setStyles = {
  skill: "font-Lexend text-[#676767] font-semibold tracking-wider",
  input: "appearance-none bg-transparent border-none w-full leading-tight focus:outline-none",
  inputBorder: "border-b-1",
  errorInputBorder: "border-b-2 border-red-600",
};

const SingleCareer = () => {
  const dispatch = useDispatch();
  const [referral, setReferral] = useState({
    fullName: "",
    email: "",
  });

  const router = useRouter();
  const { id } = router.query;

  const { vacancy } = useSelector((s) => s.vacancyReducer);

  const formHandler = async (values) => {
    const data = new FormData();

    data.append("vacancyId", id);
    data.append("email", values.email);
    data.append("fullName", values.fullName);
    data.append("phone", values.phone);
    data.append("positionFor", values.positionFor);
    data.append("document", values.document);

    data.append("referralName", referral.email);
    data.append("referralEmail", referral.fullName);

    await dispatch(applyVacancy(data, referral));

    router.reload();
  };

  useEffect(() => {
    dispatch(getVacancy(id));
  }, [id]);

  return (
    <div className="container">
    <div className="px-2 md:px-6 mt-8 md:mt-12 mb-8 md:mb-12">
      {/* flex */}
      <div className="md:flex gap-4">
        {/* Left side */}
        <div className="w-full md:w-[70%] [border:1px_solid_#B8B8B8] p-4">
          <h3 className="text-[#676767] text-xl md:text-3xl font-Lexend font-semibold md:font-bold">
            {vacancy.jobTitle}
          </h3>

          <p className="text-gray-500 text-justify tracking-wide font-normal text-lg font-Lexend">
            {HtmlParser(vacancy.jobHeightLight)}
          </p>
          {/*  */}
          <div className="grid grid-cols-1 md:grid-cols-2 mt-3">
            <div>
              <p className={setStyles.skill}>SKILLSET</p>
              <JobTimeLevelAndExp />
            </div>
            <div>
              <p className={setStyles.skill}>TECHNICAL SKILL</p>
              <JobTimeLevelAndExp />
            </div>
          </div>
        </div>
        {/* Right side */}
        <div className="mt-6 md:mt-0 w-full md:w-[30%] [border:1px_solid_#B8B8B8] p-4">
          {/*  */}
          <div className="flex">
            <div className="w-1/3">
              <div className="text-base text-[#676767] font-Lexend tracking-wide">
                <p>Job #</p>
              </div>              
            </div>
            <div className="w-2/3">
              <div className="text-base text-[#676767] font-Lexend tracking-wide">
                <p>{vacancy.jobCode}</p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-1/3">
              <div className="text-base text-[#676767] font-Lexend tracking-wide">
                <p>Branch </p>
              </div>
            </div>
            <div className="w-2/3">
              <div className="text-base text-[#676767] font-Lexend tracking-wide">
                <p> {vacancy.department}</p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-1/3">
              <div className="text-base text-[#676767] font-Lexend tracking-wide">
                <p>Salary</p>
              </div>              
            </div>
            <div className="w-2/3">
              <div className="text-base text-[#676767] font-Lexend tracking-wide">
                <p>Best in Industry</p>
              </div>
            </div>
          </div>
          <p className="text-[#676767] text-lg font-Lexend mt-2 mb-2">
            Share the job posting
          </p>
          {/* Social media */}
          <div className="flex gap-4">
            <div className="socialblock1">
              <a href="https://www.facebook.com/W3Nuts/" target="_blank" rel="noreferrer">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 20 20" enableBackground="new 0 0 20 20" >
                  <path fill="#777777" d="M7.8,20v-8.9h-3V7.5h3V4.7c0-3,1.9-4.7,4.6-4.7c1.3,0,2.4,0.1,2.7,0.1v3.2h-1.9c-1.5,0-1.8,0.7-1.8,1.7v2.4h3.3l-0.5,3.6h-2.9V20"></path>
                </svg>
              </a>
                      <a href="https://twitter.com/w3nuts" target="_blank" rel="noreferrer">
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
                      <a
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
                      <a
                        href="https://www.linkedin.com/company/w3nuts/"
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
      {/* Second Row */}
      <div className="md:flex gap-4 mt-6">
        {/* Job Description Page */}
        <div className="w-full flex flex-col gap-3 md:w-[70%] p-4 relative">
          <h3 className="text-gray-700 text-2xl font-Lexend font-normal leading-none">{vacancy.jobTitle}</h3>
        <div>
          <p className="text-[#676767] text-lg tracking-wide font-medium underline-offset-2 font-Lexend">COME BE A PART OF SOMETHING AMAZING!</p>
          <p className="text-[#676767] text-base text-justify tracking-wide font-Lexend">After over 20 years of consulting the biggest brands in Silicon Valley and beyond, such as Mozilla, Facebook, and Hulu we saw a need in the market place that has yet to be fully realized. The need for brands to reach people similar to their customers based on behavior and life experience. After 3 years of development, we released Helio, a customer surveying platform that provides access to over 400,000 participants where brands can collect qualitative and quantitative answers that allow creative decisions to be made quickly and affordably.</p>
        </div>
        <p className="text-[#676767] text-lg tracking-wide font-medium underline-offset-2 font-Lexend">WHY WEBURE</p>
        <svg width="50" height="15" viewBox="0 0 75 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0"><line y1="7.5" x2="75" y2="7.5" stroke="#A22DEA" strokeOpacity="0.4" strokeWidth="15" /></svg>
          <p className="text-[#676767] text-base text-justify tracking-wide font-Lexend">Webure Technologies is a forward thinking and creative Full service agency based in Bengaluru having global office in New York, London, Australia and New Zealand that provides consultancy and have a proven track record in helping small, medium and large businesses achieve high levels of success. Our consulting services can be tailored for your needs, be it large, medium or small campaigns. Webure Technologies are a leading Full service digital transformation agency committed in helping businesses to meet their online potential. We are a Digital Marketing and Technology Agency in India that provide complete end-to-end digital media solutions with higher scope on Brand Strategy, Creating uncontested market space and Analytics. Our R&D team are in the process of creating breakthrough technologies to make advertising more engaging and converting for businesses.</p>
          <p className="text-[#676767] text-lg tracking-wide font-medium underline-offset-2 font-Lexend">YOUR ROLE</p>
          <p className="text-[#676767] text-base text-justify tracking-wide font-Lexend">You will determines or is assigned the duties and job responsibilities that are required by the senior management team to meet the needs of their workforce management. We are serious about remote work. You can work for from anywhere.</p>
          <div className="text-[#676767] text-base text-justify tracking-wide font-Lexend" dangerouslySetInnerHTML={{ __html: vacancy.jobRequirement }}/>
          {/* <div dangerouslySetInnerHTML={{ __html: vacancy.jobRequirement }} /> */}
          <p className="text-[#676767] text-lg tracking-wide font-medium underline-offset-2 font-Lexend">WHAT YOUR WILL BE DOING</p>
          <p className="text-[#676767] text-base text-justify tracking-wide font-Lexend">Recruiting, training and developing staff Making sure that staff get</p>
          <div className="text-[#676767] text-base text-justify tracking-wide font-Lexend" dangerouslySetInnerHTML={{ __html: vacancy.jobRequirement }}/>
          <p className="text-[#676767] text-lg tracking-wide font-medium underline-offset-2 font-Lexend">QUALIFICATION REQUIRED</p>
          <p className="text-[#676767] text-base text-justify tracking-wide font-Lexend">A degree or a professional qualification with Relevant experience.</p>
          <div className="text-[#676767] text-base text-justify tracking-wide font-Lexend" dangerouslySetInnerHTML={{ __html: vacancy.jobRequirement }}/>
          <p className="text-[#676767] text-lg tracking-wide font-medium underline-offset-2 font-Lexend">JOB BENEFITS</p>
          <div className="text-[#676767] text-sm text-justify tracking-wide font-Lexend">
            <div className="grid grid-cols-1 md:grid-cols-2 mt-3">
              <div>
                <div className="flex gap-3 mb-2 mt-2">
                  <div className={styles.time}>
                    <button className="text-[#BE5151]">5 Days Working</button>
                  </div>
                  <div className={styles.level}>
                    <button className="text-[#43A552]">No Bond</button>
                  </div>
                  <div className={styles.exp}>
                    <button className="text-[#3E6EC3]">Health Insurance</button>
                  </div>
                  <div className={styles.time}>
                    <button className="text-[#BE5151]">Flexible Working Hours</button>
                  </div>
                  <div className={styles.level}>
                    <button className="text-[#43A552]">Movie Tickets</button>
                  </div>
                  <div className={styles.exp}>
                    <button className="text-[#3E6EC3]">Team Party Weekly / Yearly Trip</button>
                  </div>
                </div>
              </div>
            </div>
          </div>          
          <p className="text-[#676767] text-lg tracking-wide font-medium underline-offset-2 font-Lexend">WORKING HOURS</p>
          <div className="text-[#676767] text-sm text-justify tracking-wide font-Lexend">
            <div className="grid grid-cols-1 md:grid-cols-2 mt-3">
              <div>
                <div className="flex gap-3 mb-2 mt-2">
                  <div className={styles.time}>
                    <button className="text-[#BE5151]">Remote</button>
                  </div>
                  <div className={styles.level}>
                    <button className="text-[#43A552]">Flexible</button>
                  </div>
                  <div className={styles.exp}>
                    <button className="text-[#3E6EC3]">9:30 AM - 6:30PM</button>
                  </div>
                </div>
              </div>
            </div>
          </div>          
        </div>
        <Formik
          enableReinitialize
          initialValues={{
            fullName: "",
            email: "",
            phone: "",
            positionFor: "",
            document: null,
          }}
          validationSchema={validationSchema}
          onSubmit={formHandler}
        >
          {({
            handleChange,
            handleSubmit,
            values,
            errors,
            touched,
            isValid,
            setFieldValue,
          }) => (
            <Form
              onSubmit={handleSubmit}
              className="mt-6 md:mt-0 w-full font-Lexend text-base md:w-[30%] py-4"
            >
              {/* Career form */}
              <div className="flex flex-col gap-3">
                <div
                  className={
                    errors.fullName && touched.fullName
                      ? setStyles.errorInputBorder
                      : setStyles.inputBorder
                  }
                >
                  <input
                    type="text"
                    className={setStyles.input}
                    placeholder={`${
                      errors.fullName && touched.fullName
                        ? "Full Name Required*"
                        : "Full Name *"
                    }`}
                    name="fullName" 
                    onChange={handleChange}
                  />
                </div>
                <div
                  className={
                    errors.email && touched.email
                      ? setStyles.errorInputBorder
                      : setStyles.inputBorder
                  }
                >
                  <input
                    type="email"
                    className={setStyles.input}
                    placeholder={`${
                      errors.fullName && touched.fullName
                        ? "Work Email Required*"
                        : "Work Email *"
                    }`}
                    name="email"
                    value={values.email.toLowerCase()}
                    onChange={handleChange}
                  />
                </div>
                <div
                  className={
                    errors.phone && touched.phone
                      ? setStyles.errorInputBorder
                      : setStyles.inputBorder
                  }
                >
                  <input
                    type="text"
                    className={setStyles.input}
                    placeholder={`${
                      errors.fullName && touched.fullName
                        ? "Phone Number Required*"
                        : "Phone Number *"
                    }`}
                    name="phone"
                    onChange={handleChange}
                  />
                </div>
                <div
                  className={`mt-2 mb-2 ${
                    errors.positionFor && touched.positionFor
                      ? "border border-red-600 rounded-md"
                      : ""
                  }`}
                >
                  <Select
                    options={vacancy.jobPosition?.map((el) => ({
                      value: el,
                      label: el,
                    }))}
                    name="positionFor"
                    onChange={(val) => setFieldValue("positionFor", val.value)}
                    placeholder={`${
                      errors.positionFor && touched.positionFor
                        ? "Position Required*"
                        : "Position *"
                    }`}
                  />
                </div>
              </div>
              {[
                {
                  text: `Objective - To make money. To kill time. To get popular. Sorry, not interested. Next! To learn and learn more. To take up a challenging role. To grow with growing organization. Great!`,
                },
                {
                  text: `Experience - Experienced and all set to march a different beat? Yes please! - No or little experience, but game for trying out new things and ready for an adventurous trip? HOP IN!`,
                },
                {
                  text: `Education - Anything above higher secondary is a plus. We focus more on the skill set and potential of an individual than degrees and certificates.`,
                },
              ].map((item, index) => (
                <div
                  className="p-2 [border:1px_solid_#B8B8B8] font-Lexend mt-3 tracking-wide text-[#6F6969]"
                  key={index}
                >
                  {item.text}
                </div>
              ))}
              {/* File */}
              <div
                className={`flex p-5 ${
                  errors.document && touched.document
                    ? "[border:1px_solid_red]"
                    : "[border:1px_solid_#B8B8B8]"
                } mt-3 tracking-wide text-[#6F6969]`}
              >
                <input
                  type="file"
                  name="document"
                  accept=".doc,.docx,.pdf"
                  onChange={(e) => setFieldValue("document", e.target.files[0])}
                />
              </div>
              {/* {errors.document && touched.document ? (
                <div style={{ color: "red" }}> {errors.document} </div>
              ) : null} */}

              <div className="flex justify-end mt-5 mb-2">
                <div className="bg-[#A22DEA] bg-opacity-30 px-4 py-2 font-Lexend">
                  <button
                    className="text-black font-normal tracking-wider hover:text-[#676767] duration-300"
                    onClick={handleSubmit}
                  >
                    Apply Job
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
    </div>
  );
};

export default SingleCareer;

const JobTimeLevelAndExp = () => (
  <div className="flex gap-3 mb-2 mt-2">
    <div className={styles.time}>
      <button className="text-[#BE5151]">Full Time</button>
    </div>
    <div className={styles.level}>
      <button className="text-[#43A552]">Mid Level</button>
    </div>
    <div className={styles.exp}>
      <button className="text-[#3E6EC3]">2-3 Years</button>
    </div>
  </div>
);
