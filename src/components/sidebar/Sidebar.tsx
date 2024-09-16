import React, { useState } from "react";
import "./Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import AppsIcon from "@mui/icons-material/Apps"; // Choose an appropriate icon for portfolio
import MenuIcon from "@mui/icons-material/Menu"; // For the toggle button
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import Tooltip from "@mui/material/Tooltip";

const Sidebar: React.FC = () => {
  const [toggle, showMenu] = useState<boolean>(false);

  return (
    <>
      <aside className={toggle ? "sidebar sidebar--open" : "sidebar"}>
        <a href="#home" className="sidebar__logo"></a>

        <nav className="sidebar__navigation">
          <div className="sidebar__menu">
            <ul className="sidebar__list">
              <li className="sidebar__item">
                <a href="#home" className="sidebar__link">
                  <Tooltip title="Home" placement="right" arrow>
                    <HomeIcon className="sidebar__icon" />
                  </Tooltip>
                </a>
              </li>

              <li className="sidebar__item">
                <a href="#about" className="sidebar__link">
                  <Tooltip title="About Me" placement="right" arrow>
                    <PersonIcon className="sidebar__icon" />
                  </Tooltip>
                </a>
              </li>

              <li className="sidebar__item">
                <a href="#experience" className="sidebar__link">
                  <Tooltip title="Experience" placement="right" arrow>
                    <WorkIcon className="sidebar__icon" />
                  </Tooltip>
                </a>
              </li>

              <li className="sidebar__item">
                <a href="#resume" className="sidebar__link">
                  <Tooltip title="Resume" placement="right" arrow>
                    <DocumentScannerIcon className="sidebar__icon" />
                  </Tooltip>
                </a>
              </li>

              <li className="sidebar__item">
                <a href="#portfolio" className="sidebar__link">
                  <Tooltip title="Portfolio" placement="right" arrow>
                    <AppsIcon className="sidebar__icon" />
                  </Tooltip>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div
          className={
            toggle ? "sidebar__toggle sidebar__toggle--open" : "sidebar__toggle"
          }
          onClick={() => {
            showMenu(!toggle);
          }}
        >
          <MenuIcon className="sidebar__toggle-icon" />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
