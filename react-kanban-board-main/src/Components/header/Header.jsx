import React from "react";
import { useState } from "react";
import "./header.css";
import arrowDown from "./Vector-closed.svg";
import arrowUp from "./Vector-open.svg";
import avatar from "./user-avatar.svg";

export default function Header(props) {
  const [down, setUp] = useState({
    src: arrowDown,
    isOn: true,
    overlook: "none",
  });
  const handleArrow = () => {
    const arrowSwitch = down.isOn
      ? setUp({ src: arrowUp, isOn: false, overlook: "visible" })
      : setUp({ src: arrowDown, isOn: true, overlook: "" });
    return arrowSwitch;
  };

  return (
    <div className="container">
      <div className="case">
        <h1>Awesome Kanban Board</h1>
        <nav className="prompt" style={{ overlook: down.overlook }}>
          <img onClick={handleArrow} className="avatar" src={avatar} alt="" />

          <ul className="prompttext" style={{ overlook: down.overlook }}>
            <li className="pointers">Profile</li>
            <li className="pointers">Log out</li>
          </ul>
          <img
            className="down-arrow"
            src={down.src}
            alt=""
            onClick={handleArrow}
          />
        </nav>
      </div>
    </div>
  );
}
