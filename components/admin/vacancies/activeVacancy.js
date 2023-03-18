import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";

import { getActiveVacancies } from "../../../feature/action/vacancy/vacancyAction";
import { filterActiveVacancy } from "../../../feature/reducer/vacancy/vacanciesReducer";
import { columns } from "./allVacancy";

const ActiveVacancy = () => {
  const dispatch = useDispatch();
  const { activeVacancies } = useSelector((s) => s.vacancyReducer);

  const inputRef = useRef("");
  const router = useRouter();

  const filterHandler = (e) => {
    e.preventDefault();
    dispatch(filterActiveVacancy(inputRef.current.value));
  };

  useEffect(() => {
    dispatch(getActiveVacancies());
  }, []);
  return (
    <div className="p-2 lg:p-4 rounded-md">
      <DataTable
        title="Active Vacancies"
        columns={columns}
        data={activeVacancies}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="500px"
        selectableRows
        selectableRowsHighlight
        actions={
          <button
            type="button"
            className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 tracking-wider"
            onClick={() => router.push("/admin/vacancy/add")}
          >
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Add Vacancy</span>
            </div>
          </button>
        }
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
                placeholder="Search by title"
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

export default ActiveVacancy;
