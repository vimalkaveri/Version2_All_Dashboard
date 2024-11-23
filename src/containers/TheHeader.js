import React from "react";
import {
  CNavbar,
  CContainer,
  CNavbarNav,
  CNavItem,
  CNavLink,
} from "@coreui/react";

const TheHeader = () => {
  return (
    <CNavbar
      expand="lg"
      colorScheme="light"
      className="bg-light"
      style={{ padding: "5px 10px", backgroundColor: "#F8F9FA" }}
    >
      <CContainer fluid>
        <CNavbarNav className="ms-auto">
          <CNavItem>
            <CNavLink href="#home" style={{ color: "#000" }}>
              Home
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#features" style={{ color: "#000" }}>
              Features
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#logout" style={{ color: "#000" }}>
              Logout
            </CNavLink>
          </CNavItem>
        </CNavbarNav>
      </CContainer>
    </CNavbar>
  );
};

export default TheHeader;
