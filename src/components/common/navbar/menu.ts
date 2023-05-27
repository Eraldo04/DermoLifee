import { IconType } from "react-icons";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { RiShieldUserLine } from "react-icons/ri";
import {
  HiOutlineHome,
} from "react-icons/hi2";
import { AiOutlineSchedule } from "react-icons/ai";

export type NavbarItem = {
  path: string;
  icon: IconType;
  label: string;
};

export const menu: NavbarItem[] = [
  {
    icon: HiOutlineHome,
    path: "/dashboard",
    label: "Dashboard",
  },
  {
    icon: RiShieldUserLine,
    path: "/patient",
    label: "Patient",
  },
  {
    icon: MdOutlineSupervisorAccount,
    path: "/patients",
    label: "Patiens",
  },
  {
    icon: AiOutlineSchedule,
    path: "/appointments",
    label: "Appointments",
  },
];
