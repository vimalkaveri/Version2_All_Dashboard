// src/Sidebarpages/Dashboard.js

import React, { useState } from "react";
import { Container, Row, Col, Card, Dropdown } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import Sitetable from "../pages/Sitetable";
import Siteheatmap from "../pages/Siteheatmap";
import Sitemap from "../pages/Sitemap";
import { FaSearch } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { Bar } from "react-chartjs-2";
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
  const [view, setView] = useState("table"); // Default view is table

  // Sample data and options for Bar Chart 1
  const alert = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Alert",
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: "rgba(255, 0, 0, 1)",
        backgroundColor: "rgba(255, 0, 0, 0.7)",
        barThickness: 30, // Adjusted bar thickness
      },
    ],
  };

  const alertoptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Sample data and options for Bar Chart 2 with unique colors and bar thickness
  // SMS Data
  const SMS = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Delivered",
        data: [28, 48, 40, 19, 86, 27, 60],
        borderColor: "rgba(0,136,17,1)",
        backgroundColor: "rgba(0,136,17, 0.7)", // Slightly darker for emphasis
        barThickness: 20,
      },
      {
        label: "Failed",
        data: [20, 48, 40, 25, 84, 20, 65],
        borderColor: "rgba(255, 0, 0, 1)",
        backgroundColor: "rgba(255, 0, 0, 0.7)",
        barThickness: 20,
      },
    ],
  };

  // Call Data
  const call = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Completed",
        data: [28, 48, 40, 19, 86, 27, 60],
        borderColor: "rgba(0,136,17,1)", // Blue for completed
        backgroundColor: "rgba(0,136,17,0.7)",
        barThickness: 15,
      },
      {
        label: "No Answer",
        data: [10, 4, 15, 5, 4, 0, 5],
        borderColor: "rgba(255,206,86,1)", // Yellow for no answer
        backgroundColor: "rgba(255,206,86,0.7)",
        barThickness: 15,
      },
      {
        label: "Failed",
        data: [2, 8, 4, 5, 4, 2, 5],
        borderColor: "rgba(255, 0, 0, 1)",
        backgroundColor: "rgba(255, 0, 0, 0.7)",
        barThickness: 15,
      },
    ],
  };

  // Chart Options
  const callSMSoptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top", // Place legend at the top
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide gridlines for x-axis
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(200,200,200,0.5)", // Light gray gridlines
        },
      },
    },
  };

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const menuOptions = [
    { label: "Table", action: () => setView("table") },
    { label: "Heatmap", action: () => setView("heatmap") },
    { label: "Map", action: () => setView("map") },
  ];

  return (
    <Container fluid>
      <Row className="gx-2 gy-4">
        <Col md={5} className="gx-2 gy-4">
          <Card>
            <Card.Header
              className="d-flex justify-content-between align-items-center"
              style={{
                backgroundColor: "#f7f8fa", // Set your desired background color here
                //color: "#ffffff", // Set your desired text color here
                fontWeight: 600,
                fontSize: "13px",
              }}
            >
              <div>Device Summary</div>
            </Card.Header>
            <Card.Body style={{ padding: "10px", backgroundColor: "#f7f8fa" }}>
              <Row className="gy-3">
                <Col md={3} style={{ textAlign: "center" }}>
                  <div style={{ fontWeight: 600, fontSize: "13px" }}>Total</div>
                  <div style={{ fontSize: "13px", marginTop: "10px" }}>122</div>
                </Col>
                <Col md={3} style={{ textAlign: "center" }}>
                  <div style={{ fontWeight: 600, fontSize: "13px" }}>
                    Active
                  </div>
                  <div style={{ fontSize: "13px", marginTop: "10px" }}>121</div>
                </Col>
                <Col md={3} style={{ textAlign: "center" }}>
                  <div style={{ fontWeight: 600, fontSize: "13px" }}>
                    Inactive
                  </div>
                  <div style={{ fontSize: "13px", marginTop: "10px" }}>01</div>
                </Col>
                <Col md={3} style={{ textAlign: "center" }}>
                  <div style={{ fontWeight: 600, fontSize: "13px" }}>
                    Available
                  </div>
                  <div style={{ fontSize: "13px", marginTop: "10px" }}>0</div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3} className="gx-2 gy-4">
          <Card>
            <Card.Header
              className="d-flex justify-content-between align-items-center"
              style={{ fontWeight: 600, fontSize: "13px" }}
            >
              {" "}
              <div>Alert</div>
            </Card.Header>
            <Card.Body style={{ padding: "10px", backgroundColor: "#f7f8fa" }}>
              <Row className="gy-3">
                <Col md={4} style={{ textAlign: "center" }}>
                  <div style={{ fontWeight: 600, fontSize: "13px" }}>Alert</div>
                  <div style={{ fontSize: "13px", marginTop: "10px" }}>10</div>
                </Col>
                <Col md={4} style={{ textAlign: "center" }}>
                  <div style={{ fontWeight: 600, fontSize: "13px" }}>Calls</div>
                  <div style={{ fontSize: "13px", marginTop: "10px" }}>08</div>
                </Col>
                <Col md={4} style={{ textAlign: "center" }}>
                  <div style={{ fontWeight: 600, fontSize: "13px" }}>SMS</div>
                  <div style={{ fontSize: "13px", marginTop: "10px" }}>06</div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="gx-2 gy-4">
          <Card
            style={{
              fontWeight: 600,
              fontSize: "13px",
              backgroundColor: "#f7f8fa",
              border: "1px solid #ddd",
              borderRadius: "8px",
            }}
          >
            <Card.Body
              style={{
                padding: "20px", // Slightly increase padding for better spacing
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                height: "100%",
              }}
            >
              <span style={{ marginBottom: "10px" }}>
                Balance: <strong>155</strong>
              </span>
              <span>
                Expire on: <strong>31/12/2025</strong>
              </span>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="gx-2 gy-4">
        <Col md={7}>
          <Card style={{ minHeight: "650px", marginTop: "10px" }}>
            <Card.Header
              className="d-flex justify-content-between align-items-center"
              style={{ fontWeight: 600, fontSize: "13px" }}
            >
              {/* Title Section */}
              <span>Organization Summary</span>

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

                {/* Create User Button */}
                <button
                  className="btn btn-primary me-2"
                  style={{
                    fontSize: "12px",
                    padding: "5px 10px",
                    whiteSpace: "nowrap", // Prevent text wrapping
                  }}
                >
                  Create New Site
                </button>

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
                          <Col md={2} style={{ textAlign: "center" }}>
                            <div style={{ fontWeight: 600, fontSize: "13px" }}>
                              Healthy
                            </div>
                            <div
                              style={{ fontSize: "13px", marginTop: "10px" }}
                            >
                              03
                            </div>
                          </Col>
                          <Col md={2} style={{ textAlign: "center" }}>
                            <div style={{ fontWeight: 600, fontSize: "13px" }}>
                              Alert
                            </div>
                            <div
                              style={{ fontSize: "13px", marginTop: "10px" }}
                            >
                              05
                            </div>
                          </Col>
                          <Col md={2} style={{ textAlign: "center" }}>
                            <div style={{ fontWeight: 600, fontSize: "13px" }}>
                              Offline
                            </div>
                            <div
                              style={{ fontSize: "13px", marginTop: "10px" }}
                            >
                              10
                            </div>
                          </Col>

                          {/* Adding the dropdowns aligned to the right */}
                          <Col
                            md={6}
                            className="d-flex justify-content-end align-items-center"
                            style={{ paddingRight: 0 }}
                          >
                            <div
                              className="d-flex justify-content-end align-items-center w-100"
                              style={{ fontWeight: 600, fontSize: "13px" }}
                            >
                              <div className="mx-2">
                                <Dropdown className="me-2">
                                  <Dropdown.Toggle
                                    variant="secondary"
                                    id="dropdown1"
                                    style={{ fontSize: "12px" }}
                                  >
                                    All Site
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu style={{ fontSize: "12px" }}>
                                    <Dropdown.Item href="#/action-1">
                                      Site 1
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">
                                      Site 2
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                      Site 3
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                              <div className="mx-2">
                                <Dropdown>
                                  <Dropdown.Toggle
                                    variant="secondary"
                                    id="dropdown2"
                                    style={{ fontSize: "12px" }}
                                  >
                                    All Units
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu style={{ fontSize: "12px" }}>
                                    <Dropdown.Item href="#/action-1">
                                      unit 1
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">
                                      unit 2
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                      unit 3
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              {/* Conditional Rendering for Different Views */}
              {view === "table" && (
                <Row className="fs-6 g-0">
                  <Col md={12}>
                    <Sitetable />
                  </Col>
                </Row>
              )}
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

        {/* Nested Column 2 */}
        <Col md={5} className="gx-2 gy-4">
          <Card style={{ minHeight: "650px", marginTop: "10px" }}>
            <Card.Header style={{ fontWeight: 600, fontSize: "16px" }}>
              <span>Alert</span>
            </Card.Header>
            <Card.Body
              style={{
                padding: "10px",
                maxHeight: "600px", // Set a maximum height
                overflowY: "auto", // Enable vertical scrolling for overflowing content
              }}
            >
              <Card.Title style={{ fontWeight: 600, fontSize: "16px" }}>
                Alert
              </Card.Title>
              <Bar data={alert} options={alertoptions} />

              <Card.Title
                className="mt-4"
                style={{ fontWeight: 600, fontSize: "16px" }}
              >
                SMS
              </Card.Title>
              <Bar data={SMS} options={callSMSoptions} />

              <Card.Title
                className="mt-4"
                style={{ fontWeight: 600, fontSize: "16px" }}
              >
                Call
              </Card.Title>
              <Bar data={call} options={callSMSoptions} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
