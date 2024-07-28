// import Logo from "./Sidebar-Components/Logo";
import { RiExpandRightFill } from "react-icons/ri";
import {
  MdOutlineDashboardCustomize,
  MdOutlineCases,
  MdOutlinePeopleAlt,
  MdOutlineSettings,
} from "react-icons/md";

import { FaDiscord, FaFacebook, FaLinkedin } from "react-icons/fa";

import { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  // Sidebar logic
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Active link logic
  const [activeLink, setActiveLink] = useState("/dashboard");

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };
  return (
    <div className={`sidebar flex-col ${isOpen ? "is-open" : "is-closed"}`}>
      {/* <Logo /> */}
      <button
        className="sidebar__toggle sidebar-icon icon-hover"
        onClick={toggleSidebar}
      >
        <RiExpandRightFill />
      </button>

      <ul className="sidebar__navigation flex-col">
        <li className="sidebar__navigation__item">
          <NavLink
            className="sidebar__navigation__item__link flex-row"
            to="/dashboard"
            onClick={() => handleLinkClick("/dashboard")}
          >
            <span className="sidebar-icon">
              <MdOutlineDashboardCustomize />
            </span>
            <h4>Dashboard</h4>
          </NavLink>
        </li>
        <li className="sidebar__navigation__item">
          <NavLink
            className="sidebar__navigation__item__link flex-row"
            to="/jobs"
            onClick={() => handleLinkClick("/jobs")}
          >
            <span className="sidebar-icon">
              <MdOutlineCases />
            </span>
            <h4>Jobs</h4>
          </NavLink>
        </li>
        <li className="sidebar__navigation__item">
          <NavLink
            className="sidebar__navigation__item__link flex-row"
            to="/candidates"
            onClick={() => handleLinkClick("/candidates")}
          >
            <span className="sidebar-icon">
              <MdOutlinePeopleAlt />
            </span>
            <h4>Candidates</h4>
          </NavLink>
        </li>
      </ul>

      <div className="sidebar__footer flex-row">
        <button className="account-settings sidebar-icon">
          <MdOutlineSettings />
        </button>
        <div className="social-button-group flex-row">
          <a className="sidebar-icon icon-hover" href="#" target="_blank">
            <FaDiscord />
          </a>
          <a className="sidebar-icon icon-hover" href="#" target="_blank">
            <FaFacebook />
          </a>
          <a className="sidebar-icon icon-hover" href="#" target="_blank">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
