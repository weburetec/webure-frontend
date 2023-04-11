import React, { useEffect } from "react";
import {
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Swal from "sweetalert2";

import { MainLogo } from "../components/logo";
import { signOut } from "../feature/action/user/userAction";
import { menuLists } from "./menuLists";

const AdminLayout = ({ children }) => {
  const router = useRouter();

  // dispatch
  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex flex-row h-screen bg-gray-100">
        <div className="flex flex-row flex-auto bg-white rounded-tl-xl border-l shadow-xl">
          <div className="flex flex-col w-1/5">
            <div
              className="items-center cursor-pointer flex px-3 py-2"
              onClick={() => router.push("/admin/dashboard")}
            >
              <a href="/">
              <MainLogo />
              </a>
              <p className="text-base flex hover:underline text-center font-bold text-blue-900 border-b border-gray-100">
                Webure Dashboard
              </p>
            </div>
            <div className="flex-auto overflow-y-auto">
              <div className="px-3">
                {menuLists.map((item, index) => (
                  <div
                    className={`flex mb-2 px-4 justify-start items-center gap-3 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto ${
                      item.activeLink?.includes(router.pathname.slice(0, 10)) &&
                      "bg-black"
                    }`}
                    key={index}
                    onClick={() => !item.subMenu && router.push(item.link)}
                  >
                    <p
                      className={`text-2xl group-hover:text-white ${
                        item.activeLink?.includes(router.pathname.slice(0, 10))
                          ? "text-white"
                          : "text-gray-600"
                      }`}
                    >
                      {item.icon}
                    </p>
                    <div
                      className={`text-base group-hover:text-white font-semibold capitalize ${
                        item.activeLink?.includes(router.pathname.slice(0, 10))
                          ? "text-white"
                          : "text-gray-800"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {item.title}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="px-3">
              <div className="border-b border-gray-100">
                {/* <div className="flex mb-2 justify-start items-center gap-3 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <MdOutlineSettings className="text-2xl text-gray-600 group-hover:text-white" />
                  <p className="text-base text-gray-800 group-hover:text-white font-semibold ">
                    Settings
                  </p>
                </div> */}
                <div className="flex mb-2 justify-start items-center gap-3 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <MdOutlineMoreHoriz className="text-2xl text-gray-600 group-hover:text-white " />
                  <p className="text-base text-gray-800 group-hover:text-white font-semibold ">
                    More
                  </p>
                </div>
              </div>
              {/* logout */}
              <div className="my-4">
                <div
                  className="flex mb-2 justify-items-end items-center gap-4 pl-5 border border-gray-200  hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
                  onClick={() => {
                    Swal.fire({
                      title: "Log out?",
                      text: "Are you sure want to Log out?",
                      icon: "info",
                      showCancelButton: true,
                      confirmButtonColor: "#3085d6",
                      cancelButtonColor: "#d33",
                      confirmButtonText: "Yes, Log out",
                    }).then((result) => {
                      if (result.isConfirmed) {
                        dispatch(signOut());
                        router.push("/login-or-register");
                      }
                    });
                  }}
                >
                  <MdOutlineLogout className="text-2xl text-gray-600 group-hover:text-white " />
                  <p className="text-base text-gray-800 group-hover:text-white font-semibold ">
                    Logout
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full bg-gray-200 flex-auto overflow-y-auto">
            {/*  */}
            <MenuDropdown />
            <div className="p-3">
              <div className="bg-white p-3 shadow-md">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const MenuDropdown = () => {
  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-end">
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="rounded-full bg-gray-400 p-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="sr-only">View notifications</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
                  />
                </svg>
              </button>

              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-3">
                <div>
                  <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Profile
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Settings
                        </a>
                      )}
                    </Menu.Item>
                    {/* <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item> */}
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      )}
    </Disclosure>
  );
};
