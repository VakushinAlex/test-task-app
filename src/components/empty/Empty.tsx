import React from "react";
import "./Empty.scss";
import { Link } from "react-router-dom";

const Empty = () => (
  <div className="empty">
    <div>
      <Link to="/user/settings/working-hours">Working hours</Link>
    </div>
  </div>
);

export default Empty;
