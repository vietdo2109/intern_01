import { FaChartSimple } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { BsCreditCard2BackFill } from "react-icons/bs";
import { AiFillTool } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { IoDocument } from "react-icons/io5";
import { IoRocketSharp } from "react-icons/io5";
import { IconType } from "react-icons";
import { Icon } from "@chakra-ui/react";

export interface SideMenuItem {
  icon: IconType;
  title: string;
  url: string;
}

export const sideMenuItems: SideMenuItem[] = [
  {
    icon: FaHome,
    title: "Dashboard",
    url: "/dashboard",
  },
  {
    icon: FaChartSimple,
    title: "Tables",
    url: "/tables",
  },
  {
    icon: BsCreditCard2BackFill,
    title: "Billing",
    url: "/billing",
  },
  {
    icon: AiFillTool,
    title: "RTL",
    url: "/rtl",
  },
  {
    icon: FaUser,
    title: "Profile",
    url: "/profile",
  },
  {
    icon: IoDocument,
    title: "Sign In",
    url: "/login",
  },
  {
    icon: IoRocketSharp,
    title: "Sign Up",
    url: "/signup",
  },
];
