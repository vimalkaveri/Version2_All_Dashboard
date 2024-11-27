import React from "react";
import {
  CSidebar,
  CSidebarNav,
  CNavItem,
  CImage,
} from "@coreui/react";
import {
  FaHome,
  FaUser,
  FaQuestionCircle,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { TbDeviceHeartMonitor } from "react-icons/tb";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const TheSidebar = ({ isCollapsed, toggleSidebar }) => {
  return (
    <CSidebar
      unfoldable
      visible={!isCollapsed}
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        height: "100vh",
        width: isCollapsed ? "80px" : "250px",
        backgroundColor: "#F8F9FA",
        transition: "width 0.3s ease",
        zIndex: "1000",
        boxShadow: "2px 0px 15px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Logo */}
      <div className="text-center my-3">
        <CImage
          src={logo}
          alt="SiFe Logo"
          width={isCollapsed ? "50" : "120"}
          height={isCollapsed ? "15" : "30"}
        />
      </div>

      <CSidebarNav className="p-2">
        {/* Links */}
        {[
          { path: "/admin", icon: <FaHome />, label: "Admin" },
          { path: "/client", icon: <TbDeviceHeartMonitor />, label: "Client" },
          { path: "/organization", icon: <FaUser />, label: "Organization" },
          { path: "/site", icon: <FaQuestionCircle />, label: "Site" },
        ].map((item, index) => (
          <CNavItem key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `d-flex align-items-center text-black ${
                  isActive ? "bg-light fw-bold" : ""
                }`
              }
              style={{
                padding: isCollapsed ? "10px" : "15px 20px",
                fontWeight: 600,
                fontSize: "13px",
                textDecoration: "none",
                transition: "background-color 0.3s ease",
              }}
            >
              <span
                style={{
                  marginRight: isCollapsed ? "0" : "10px",
                  fontSize: isCollapsed ? "20px" : "22px",
                }}
              >
                {item.icon}
              </span>
              {!isCollapsed && item.label}
            </NavLink>
          </CNavItem>
        ))}
      </CSidebarNav>

      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
        style={{
          position: "absolute",
          bottom: "20px",
          left: isCollapsed ? "50%" : "80%",
          transform: "translateX(-50%)",
          cursor: "pointer",
          background: "none",
          border: "none",
          padding: 0,
        }}
      >
        {isCollapsed ? (
          <FaChevronRight style={{ color: "#0d6efd", fontSize: "20px" }} />
        ) : (
          <FaChevronLeft style={{ color: "#0d6efd", fontSize: "20px" }} />
        )}
      </button>
    </CSidebar>
  );
};

export default TheSidebar;
