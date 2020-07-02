import React from "react";
import { SidebarToggleProps } from "./types";
import { ReactComponent as BarsIcon } from "../../assets/img/bars-solid.svg";
import "./SidebarToggle.scss";

const SidebarToggle = (props: SidebarToggleProps) => (
  <>
    {!props.isOpenSidebar && (
      <button
        className="sidebar-toggle-btn"
        onClick={() => props.toggleSidebar(!props.isOpenSidebar)}
      >
        <BarsIcon />
      </button>
    )}
  </>
);

export default SidebarToggle;
