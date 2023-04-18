import React, { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useDispatch, useSelector } from "react-redux";
import { getActiveVacancies } from "../../feature/action/vacancy/vacancyAction";
import { Excerpt } from "../../utils";
import HtmlParser from "react-html-parser";

const animatedComponents = makeAnimated();

// styles
export const styles = {
  time: "bg-[#FF5A5A] bg-opacity-20 px-2 py-1 rounded-[10px] font-semibold",
  level: "bg-[#4CE364] bg-opacity-20 px-2 py-1 rounded-[10px] font-semibold",
  exp: "bg-[#8bb3ff] bg-opacity-20 px-2 py-1 rounded-[10px] font-semibold",
};

const CareerPage = () => {
  const [switchValue, setSwitchValue] = useState(false);
  const [data, setData] = useState([]);

  const dispatch = useDispatch();
  const { activeVacancies } = useSelector((s) => s.vacancyReducer);

  useEffect(() => {
    setData(activeVacancies);
  }, [activeVacancies]);

  useEffect(() => {
    dispatch(getActiveVacancies());
  }, []);

  return (
    <div className="container ">
    <div className="px-2 md:px-6 mt-4 md:mt-12 mb-6 md:mb-12">
      {/*  */}
      <div className="w-full jobBox1 [border:1px_solid_#B8B8B8] p-4">
        <div className="flex justify-between">
          <div className="bg-[#A22DEA] bg-opacity-30 px-3 py-1">
            <button className="text-[#676767] font-Lexend font-medium tracking-wider hover:text-black duration-300">
              OPEN POSITIONS
            </button>
          </div>
          {/* open job */}
          <div>
            <p className="text-[#676767] font-bold font-Lexend cursor-pointer hover:text-black duration-300">
              {activeVacancies?.length} Open Jobs
            </p>
            <div className="bg-[#A22DEA] bg-opacity-30 h-1"></div>
          </div>
        </div>
        <p className="mt-3 text-[#676767] font-semibold font-Lexend text-lg md:text-2xl">
          We’re looking for talented people to join our team.
        </p>
        {/* location / department / work type */}
        <div className="md:flex md:justify-between mt-3 md:flex-nowrap items-center">
          {/* location */}
          <div className="w-full md:w-1/4 font-Lexend">
            <FilterText text="Select a Location" />
            <CustomSelect
              options={activeVacancies?.map((activeVacancy) => ({
                value: activeVacancy.location,
                label: activeVacancy.location,
              }))}
              onChange={(e) => {
                const filterLocation = activeVacancies.filter(
                  (activeVacancy) => activeVacancy.location === e.value
                );
                setData(filterLocation);
              }}
            />
          </div>
          {/* Department */}
          <div className="w-full md:w-1/4 mt-3 md:mt-0 font-Lexend">
            <FilterText text="Select a Department" />
            <CustomSelect
              options={activeVacancies?.map((activeVacancy) => ({
                value: activeVacancy.department,
                label: activeVacancy.department,
              }))}
              onChange={(e) => {
                const filterDepartment = activeVacancies.filter(
                  (activeVacancy) => activeVacancy.department === e.value
                );
                setData(filterDepartment);
              }}
            />
          </div>
          {/* work type */}
          <div className="w-full md:w-1/4 mt-3 md:mt-0 font-Lexend">
            <FilterText text="Select a Work Type" />
            <CustomSelect
              options={activeVacancies?.map((activeVacancy) => ({
                value: activeVacancy.jobType,
                label: activeVacancy.jobType,
              }))}
              onChange={(e) => {
                const filterJobType = activeVacancies.filter(
                  (activeVacancy) => activeVacancy.jobType === e.value
                );
                setData(filterJobType);
              }}
            />
          </div>
          <div>
            <div className="flex gap-2 mt-3 md:mt-0 font-Lexend">
              <Switch.Group as="div" className="flex items-center space-x-4">
                <Switch
                  as="button"
                  checked={switchValue}
                  onChange={(e) => {
                    setSwitchValue(!switchValue);
                    const filterRemoteOnly = activeVacancies.filter(
                      (activeVacancy) => activeVacancy.isRemoteOnly
                    );
                    !switchValue
                      ? setData(filterRemoteOnly)
                      : setData(activeVacancies);
                  }}
                  className={`${
                    switchValue ? "bg-[#A22DEA]" : "bg-[#A22DEA] bg-opacity-30"
                  } relative font-Lexend inline-flex flex-shrink-0 h-5 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:shadow-outline`}
                >
                  {({ checked }) => (
                    <span
                      className={`${
                        checked ? "translate-x-5" : "translate-x-0"
                      } inline-block w-4 h-4 transition duration-200 font-Lexend ease-in-out transform bg-white rounded-full`}
                    />
                  )}
                </Switch>
              </Switch.Group>
              <div>
                <p className="text-[#676767] font-Lexend font-semibold">REMOTE ONLY</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Jobs */}
      <div className="grid dataContainer grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-2 md:mt-2">
        {data?.map((activeVacancy) => (
          <div
            className="[border:1px_solid_#B8B8B8] p-4 mt-4 md:mt-6"
            key={activeVacancy._id}
          >
            {/*  */}
            <div className="flex justify-between">
              <div>
                <p className="text-[#676767] text-xl md:text-2xl font-semibold md:font-bold">
                  {activeVacancy.jobTitle}
                </p>
              </div>
              <div>
                <p className="text-[#676767] font-semibold">
                  {activeVacancy.openVacancy} applicants
                </p>
                <div className="bg-[#A22DEA] bg-opacity-30 h-1 w-[80%]"></div>
              </div>
            </div>
            {/*  */}
            <div className="flex flex-wrap justify-between mt-2">
              <div className="flex gap-2">
                {activeVacancy.isRemoteOnly && (
                  <div className={styles.time}>
                    <button className="text-[#BE5151]">Remote</button>
                  </div>
                )}
                <div className={styles.level}>
                  <button className="text-[#43A552]">
                    {activeVacancy.jobType}
                  </button>
                </div>
              </div>
              <div className={styles.exp}>
                <button className="text-[#3E6EC3]">
                  {activeVacancy.experience}
                </button>
              </div>
            </div>
            <p className="my-3 text-black font-semibold text-lg">
              {activeVacancy.location}
            </p>
            {/* description */}
            <p className="tracking-wide text-black text-justify font-Lexend mt-4 md:mt-6">
              {HtmlParser(Excerpt(activeVacancy.jobHeightLight, 314))}
            </p>
            {/* Apply Button */}
            <div className="flex justify-end mt-4">
              <div className="bg-[#A22DEA] bg-opacity-30 px-4 py-2 font-Lexend">
                <a href={`/career/${activeVacancy._id}`}>
                  <button className="text-black font-Lexend font-normal tracking-wider hover:text-[#676767] duration-300 ">
                    APPLY NOW
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div>
      <div className="px-2 dataContainer md:px-6 mt-4 md:mt-12 mb-2 md:mb-12">
        <hr style={{borderbottom: "2px dashed #231F2033"}} />
        <div className="flex">
          <h1 className="text-2xl font-semibold text-gray-400 font-Lexend">Contractual Jobs</h1>   
        </div>
        <div>   
          {/* Contractual Jobs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 mt-5 md:mt-6">
            {data?.map((activeVacancy) => (
              <div
                className="[border:1px_solid_#B8B8B8] p-4 mt-2 md:mt-2"
                key={activeVacancy._id}
              >
                {/*  */}
                <div className="flex justify-between">
                  <div>
                    <p className="text-[#676767] text-xl md:text-2xl font-semibold md:font-bold">
                      {activeVacancy.jobTitle}
                    </p>
                  </div>
                </div>
                {/*  */}
                <div className="flex flex-wrap justify-between mt-2">
                  <div className="flex gap-2">
                    {activeVacancy.isRemoteOnly && (
                      <div className={styles.time}>
                        <button className="text-[#BE5151]">Remote</button>
                      </div>
                    )}
                    <div className={styles.level}>
                      <button className="text-[#43A552]">
                        {activeVacancy.jobType}
                      </button>
                    </div>
                  </div>
                </div>
                {/* description */}
                <p className="tracking-wide text-black font-Lexend text-justify mt-4 md:mt-6">
                  {HtmlParser(Excerpt(activeVacancy.jobHeightLight, 314))}
                </p>
                {/* Apply Button */}
                <div className="flex justify-end mt-4">
                  <div className="bg-[#A22DEA] bg-opacity-30 px-4 py-2 font-Lexend">
                    <a href={`/career/${activeVacancy._id}`}>
                      <button className="text-black font-Lexend font-normal tracking-wider hover:text-[#676767] duration-300 ">
                        APPLY NOW
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center jobBox1">
        <div className="[border:1px_solid_#F3F5F6] rounded-xl p-4 mt-4 md:mt-6 text-center">
          <p className="font-Lexend font-normal text-xl">If you don&apos;t see anything that fits your skills, email us on <span>hr@weburetech.com</span> with more information about you. </p>
        </div>
      </div>
      </div>           
    </div>
  );
};

export default CareerPage;

export const CustomSelect = ({ noDefault, options, ...props }) => (
  <Select
    options={options}
    components={animatedComponents}
    defaultValue={!noDefault && options[0]}
    {...props}
  />
);

/* -------------------------------------------------------------------------- */
/*                                 filter text                                */
/* -------------------------------------------------------------------------- */

const FilterText = ({ text }) => (
  <p className="font-semibold text-md tracking-wide font-Ubuntu text-[#676767]">
    {text}
  </p>
);
