import React from "react";
import "./User.scss";
import { Link } from "react-router-dom";
import AvatarImg from "../../assets/img/user.jpg";
import { ReactComponent as ArrowLeftIcon } from "../../assets/img/angle-left-solid.svg";
import { UserProps } from "./types";

const User = (props: UserProps) => (
  <div className="user">
    <Link to="/user/settings/working-hours" className="user__link">
      <img src={AvatarImg} alt="Avatar" className="user__avatar" />
      <span className="user__label">Settings</span>
    </Link>
    {(props.breakpoint === "sm" || props.breakpoint === "xs") && (
      <button
        className="toggle-btn"
        onClick={() => props.toggleSidebar(!props.isOpenSidebar)}
      >
        <span className="toggle-btn__ico">
          <ArrowLeftIcon />
        </span>
      </button>
    )}
  </div>
);

export default User;
