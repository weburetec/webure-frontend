import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import HtmlParser from "react-html-parser";

import { getVacancy } from "../../../feature/action/vacancy/vacancyAction";

const Vacancy = () => {
  const dispatch = useDispatch();

  const router = useRouter();
  const { id } = router.query;

  const { vacancy } = useSelector((s) => s.vacancyReducer);

  useEffect(() => {
    dispatch(getVacancy(id));
  }, [id]);

  return (
    <div>
      <div>
        <h3 className="text-center font-semibold text-lg lg:text-2xl">
          Jobs Openings At{" "}
          <span className="text-green-400">{vacancy.location}</span>
        </h3>
        <p className="text-center font-semibold mb-3">
          We’re always searching for
          <span className="text-green-500 text-lg">
            {" "}
            {vacancy.openVacancy}
          </span>{" "}
          peoples to join our team having{" "}
          <span className="text-lg">({vacancy.experience})</span>. Take a look
          at our current openings.
        </p>
        <span className="bg-green-100 mt-2 text-green-800 dark:bg-green-200 dark:text-green-900 text-lg font-bold px-3 p-1.5 rounded">
          {vacancy.jobType}
        </span>
      </div>
      {/*  */}
      <div className="flex flex-col md:flex-row justify-between gap-3 px-2 lg:px-6 py-3 font-semibold mt-2">
        <div className="text-red-400 capitalize">
          {vacancy.jobTitle}{" "}
          <span className="text-black">({vacancy.jobCode})</span>
        </div>
        <div className="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
              clipRule="evenodd"
            />
          </svg>

          <p>{moment(vacancy.deadline).format("MMM Do YY")}</p>
        </div>
        <div>
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>

            <p>{vacancy.location}</p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 px-2 gap-4 lg:gap-6">
        <div>
          <div className="font-bold text-lg tracking-wider mb-2">
            Description
          </div>
          {HtmlParser(vacancy.jobDescription)}
        </div>
        <div>
          <div className="font-bold text-lg tracking-wider mb-2">
            Requirements
          </div>
          {HtmlParser(vacancy.jobRequirement)}
        </div>
      </div>
      <div className="flex gap-2 mt-3 lg:mt-4">
        <p className="font-Josefin">Job Posted By:</p>
        <p className="bg-green-200 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
          {vacancy.jobPostedBy?.email} ({vacancy.jobPostedBy?.name})
        </p>
      </div>
    </div>
  );
};

export default Vacancy;
