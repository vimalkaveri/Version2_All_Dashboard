import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import TheSidebar from "./TheSidebar";
import TheHeader from "./TheHeader";
import TheFooter from "./TheFooter";
import Admin from "../Sidebarpages/Admin";
import Client from "../Sidebarpages/Client";
import Organization from "../Sidebarpages/Organization";
import Site from "../Sidebarpages/Site";

const AppLayout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const sidebarWidth = isSidebarCollapsed ? "80px" : "250px";

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <TheHeader />
      <div style={{ display: "flex", flex: 1 }}>
        <TheSidebar
          isCollapsed={isSidebarCollapsed}
          toggleSidebar={toggleSidebar}
        />
        <div
          style={{
            marginLeft: sidebarWidth,
            width: `calc(100% - ${sidebarWidth})`,
            transition: "margin-left 0.3s ease", // Smooth transition for content shift
            paddingTop: "20px",
          }}
        >
          <Container fluid>
            <Routes>
              <Route index element={<Admin />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/client" element={<Client />} />
              <Route path="/organization" element={<Organization />} />
              <Route path="/site" element={<Site />} />
            </Routes>
          </Container>
        </div>
      </div>
      <TheFooter isSidebarCollapsed={isSidebarCollapsed} />
    </div>
  );
};

export default AppLayout;
