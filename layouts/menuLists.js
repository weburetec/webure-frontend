import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineSettings,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BiMessageSquareDots } from "react-icons/bi";
import { FaBlogger } from "react-icons/fa";
import { AiOutlineMenuUnfold } from "react-icons/ai";

// Menu
// MAKE SURE ONLY 10 CHARACTERS IN "ACTIVELINK"
export const menuLists = [
  {
    title: "Dashboard",
    activeLink: ["/admin/das"],
    icon: <MdOutlineSpaceDashboard />,
    link: "/admin/dashboard",
    
  },
  {
    title: "Profile",
    activeLink: ["/admin/pro"],
    icon: <CgProfile />,
    link: "/admin/profile",
  },
  {
    title: "Blogs",
    activeLink: ["/admin/blo", "/admin/add", "/admin/edi"],
    icon: <FaBlogger />,
    link: "/admin/blogs",
  },
  {
    title: "Vacancy",
    activeLink: ["/admin/vac"],
    icon: <AiOutlineMenuUnfold />,
    link: "/admin/vacancy",
  },
  {
    title: "Messages",
    icon: <BiMessageSquareDots />,
    link: "#",
  },
  {
    title: "Integration",
    icon: <MdOutlineIntegrationInstructions />,

    link: "#",
  },
  {
    title: "Settings",
    icon: <MdOutlineSettings />,

    link: "#",
  },
  // {
  //   title: "Dropdown",
  //   icon: <BiMessageSquareDots />,
  //   rightIcon: <BiDownArrowAlt />,
  //   subMenu: true,
  //   dropdown: [
  //     {
  //       title: "Dropdown1",
  //       url: "#Dropdown1",
  //     },
  //     {
  //       title: "Dropdown2",
  //       url: "#Dropdown2",
  //     },
  //     {
  //       title: "Dropdown3",
  //       url: "#Dropdown3",
  //     },
  //     {
  //       title: "Dropdown4",
  //       url: "#Dropdown4",
  //     },
  //   ],
  // },
];
