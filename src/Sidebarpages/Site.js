import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import Siteheatmap from "../pages/Siteheatmap";
import Sitemap from "../pages/Sitemap";
import { FaSearch } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [view, setView] = useState("heatmap"); // Default view is heatmap

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const menuOptions = [
    { label: "Heatmap", action: () => setView("heatmap") },
    { label: "Map", action: () => setView("map") },
  ];

  return (
    <Container
      fluid
      style={{
        height: "100vh", // Full viewport height
        display: "flex",
        flexDirection: "column",
        padding: "0px", // Remove extra padding
      }}
    >
      <Row style={{ flex: 1, marginTop: "-15px" }}>
        <Col md={12} style={{ padding: "0px" }}>
          <Card style={{ height: "100%", marginTop: "0px" }}>
            <Card.Header
              className="d-flex justify-content-between align-items-center"
              style={{ fontWeight: 600, fontSize: "13px" }}
            >
              {/* Title Section */}
              <span>Site Summary</span>

              {/* Actions Section */}
              <div className="d-flex align-items-center">
                {/* Search Input */}
                <div className="input-group me-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    style={{ fontSize: "12px", width: "150px" }}
                  />
                  <span
                    className="input-group-text"
                    style={{ cursor: "pointer", fontSize: "12px" }}
                  >
                    <FaSearch />
                  </span>
                </div>

                {/* Menu Icon */}
                <CgMenuRight
                  size={30}
                  style={{ cursor: "pointer" }}
                  onClick={toggleMenu}
                />
                {showMenu && (
                  <div
                    style={{
                      position: "absolute",
                      top: "35px",
                      right: "0",
                      background: "#fff",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                      zIndex: 10,
                      width: "150px",
                      fontSize: "14px",
                    }}
                  >
                    {menuOptions.map((option, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          option.action(); // Execute the option's action
                          toggleMenu(); // Close the menu
                        }}
                        style={{
                          padding: "5px 20px",
                          cursor: "pointer",
                        }}
                        onMouseEnter={(e) =>
                          (e.target.style.backgroundColor = "#f1f1f1")
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.backgroundColor = "transparent")
                        }
                      >
                        {option.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Card.Header>

            <Card.Body style={{ padding: "0px", backgroundColor: "#f7f8fa" }}>
              <Row className="gy-3">
                <Col md={12}>
                  <Card
                    style={{
                      border: "none",
                      minHeight: "80px",
                      marginBottom: "0px",
                    }}
                  >
                    <Card.Body>
                      <Card.Text>
                        <Row className="gy-3">
                          {/* Statistics */}
                          {[
                            "Total",
                            "Active",
                            "Inactive",
                            "Healthy",
                            "Alert",
                            "Offline",
                            "Call",
                            "SMS",
                          ].map((label, index) => (
                            <Col
                              key={index}
                              md={1}
                              style={{ textAlign: "center" }}
                            >
                              <div
                                style={{ fontWeight: 600, fontSize: "13px" }}
                              >
                                {label}
                              </div>
                              <div
                                style={{ fontSize: "13px", marginTop: "10px" }}
                              >
                                {10}
                              </div>
                            </Col>
                          ))}
                        </Row>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              {/* Conditional Rendering for Different Views */}
              {view === "heatmap" && (
                <Row className="fs-6 g-0">
                  <Col md={12}>
                    <Siteheatmap />
                  </Col>
                </Row>
              )}
              {view === "map" && (
                <Row className="fs-6 g-0">
                  <Col md={12}>
                    <Sitemap />
                  </Col>
                </Row>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
