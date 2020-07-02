import React from "react";
import { SidebarProps, NavItemsType } from "./types";
import { Link } from "react-router-dom";
import User from "../user";
import "./Sidebar.scss";
import { ReactComponent as DashboardIcon } from "../../assets/img/icons8-dashboard.svg";
import { ReactComponent as CustomersIcon } from "../../assets/img/icons8-business_contact.svg";
import { ReactComponent as CalendarIcon } from "../../assets/img/icons8-calendar.svg";
import { ReactComponent as ChatsIcon } from "../../assets/img/icons8-collaboration.svg";
import { ReactComponent as TasksIcon } from "../../assets/img/icons8-todo_list.svg";
import { ReactComponent as InboxIcon } from "../../assets/img/icons8-inbox.svg";
import { ReactComponent as CallsIcon } from "../../assets/img/icons8-number_pad.svg";
import { ReactComponent as LeadsIcon } from "../../assets/img/icons8-live_folder.svg";
import { ReactComponent as TeamIcon } from "../../assets/img/icons8-user_group_man_man.svg";

const navItems: NavItemsType = [
  {
    path: "/dashboard",
    label: "Dashboard",
    ico: DashboardIcon,
  },
  {
    path: "/customers",
    label: "Customers",
    ico: CustomersIcon,
  },
  {
    path: "/calendar",
    label: "Calendar",
    ico: CalendarIcon,
  },
  {
    path: "/chats",
    label: "Chats",
    ico: ChatsIcon,
  },
  {
    path: "/tasks",
    label: "Tasks",
    ico: TasksIcon,
  },
  {
    path: "/inbox",
    label: "Inbox",
    ico: InboxIcon,
  },
  {
    path: "/calls",
    label: "Calls",
    ico: CallsIcon,
  },
  {
    path: "/leads",
    label: "Leads",
    ico: LeadsIcon,
  },
  {
    path: "/team",
    label: "Team",
    ico: TeamIcon,
  },
];

const getNavItems = (curPathName: string | undefined) => {
  return navItems.map((item) => {
    return (
      <Link
        key={item.path}
        to={item.path}
        className={
          item.path === curPathName ? "nav__btn nav__btn_active" : "nav__btn"
        }
      >
        <span className="nav__ico">
          <item.ico />
        </span>
        <span className="nav__label">{item.label}</span>
      </Link>
    );
  });
};

const Sidebar = (props: SidebarProps) => {
  const { isOpenSidebar, toggleSidebar, path, breakpoint } = props;
  const getClassName = () =>
    isOpenSidebar ? "sidebar sidebar_show" : "sidebar";
  return (
    <div className={getClassName()}>
      <nav className="nav">{getNavItems(path)}</nav>
      <User
        isOpenSidebar={isOpenSidebar}
        toggleSidebar={toggleSidebar}
        breakpoint={breakpoint}
      />
    </div>
  );
};

export default Sidebar;
