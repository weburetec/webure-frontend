import axios from "axios";
import React, { useRef } from "react";
import { useEffect } from "react";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { getAppliedVacancy } from "../../../feature/action/vacancy/vacancyAction";
import { filterAppliedVacancy } from "../../../feature/reducer/vacancy/vacanciesReducer";

const AppliedVacancy = () => {
  const dispatch = useDispatch();
  const { appliedVacancies } = useSelector((s) => s.vacancyReducer);

  const inputRef = useRef("");

  const filterHandler = (e) => {
    e.preventDefault();
    dispatch(filterAppliedVacancy(inputRef.current.value));
  };

  const columns = [
    {
      name: "Applied By",
      selector: (row) => row.fullName,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Applied For",
      selector: (row) => row.positionFor,
    },
    {
      name: "Job Code",
      selector: (row) => row.vacancyId.jobCode,
    },
    {
      name: "Document",
      selector: (row) => (
        <a
          href={`${axios.defaults.baseURL}/vacancy/${row.document}`}
          target="_blank" rel="noreferrer"
          download
        >
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-blue-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            <p className="text-blue-800 font-semibold">Download</p>
          </div>
        </a>
      ),
    },
  ];

  useEffect(() => {
    dispatch(getAppliedVacancy());
  }, []);

  return (
    <div className="p-2 lg:p-4 rounded-md">
      <DataTable
        title="Applied Vacancies"
        columns={columns}
        data={appliedVacancies}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="500px"
        selectableRows
        selectableRowsHighlight
        subHeader
        subHeaderAlign="left"
        subHeaderComponent={
          <form
            className="flex items-center w-full md:w-1/2"
            onSubmit={filterHandler}
          >
            <label htmlFor="voice-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="search"
                className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search by Applicant Name"
                ref={inputRef}
                onChange={filterHandler}
              />
            </div>
          </form>
        }
      />
    </div>
  );
};

export default AppliedVacancy;
