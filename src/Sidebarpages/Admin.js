// src/pages/Dashboard.js

import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Dropdown } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaSyncAlt, FaSearch, FaBell, FaTachometerAlt } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { Bar, Pie } from "react-chartjs-2";
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
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [data, setData] = useState(null); 
  const [showMenu, setShowMenu] = useState(false);

// Sample data and options for Bar Chart 1
const alert = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Alert",
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: "rgba(255, 0, 0, 1)",
      backgroundColor: "rgba(255, 0, 0, 0.7)",
      barThickness: 20, // Adjusted bar thickness
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
      barThickness: 15,
    },
    {
      label: "Failed",
      data: [20, 48, 40, 25, 84, 20, 65],
      borderColor: "rgba(255, 0, 0, 1)",
      backgroundColor: "rgba(255, 0, 0, 0.7)",
      barThickness: 15,
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

const pieData = {
  labels: ["Active", "Inactive", "Available", "On Progress"],
  datasets: [
    {
      data: [80, 10, 7, 3],
      backgroundColor: ["#28a745", "#dc3545", "#ffc107", "#007bff"],
      hoverBackgroundColor: [
        "#28a745cc",
        "#dc3545cc",
        "#ffc107cc",
        "#007bffcc",
      ],
    },
  ],
};

const pieOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
    tooltip: {
      callbacks: {
        label: (context) => `${context.label}: ${context.raw}`,
      },
    },
    datalabels: {
      color: "#fff",
      font: {
        size: 14,
        weight: "bold",
      },
      formatter: (value) => value,
    },
  },
  animation: {
    animateScale: true,
    animateRotate: true,
    duration: 1000,
    easing: "easeInOutQuart",
  },
};
const toggleMenu = () => {
  setShowMenu((prev) => !prev);
};

const menuOptions = [
  { label: "Last month 1", action: () => alert("Option 1 Selected") },
  { label: "Last Three Month", action: () => alert("Option 2 Selected") },
  { label: "Last Six Months", action: () => alert("Option 3 Selected") },
  { label: "Last Nine Month", action: () => alert("Option 4 Selected") },
  { label: "Show All", action: () => alert("Option 5 Selected") },
];
  const handleRefresh = () => {
    // Simulate fetching data (you can replace this with actual API call)
    setData(null); // Reset to null to simulate 'No Data' state
    /*setTimeout(() => {
      setData("Some job status data here..."); // Simulate data fetching
    }, 1000); // Simulate delay for fetching data
    */
  };

  return (
    <Container fluid>
      <Row>
        <Col md={5} className="gx-2 gy-4">
          <Card>
            <Card.Header
              className="d-flex justify-content-between align-items-center"
              style={{
                fontWeight: 600,
                fontSize: "13px",
              }}
            >
              <div>Device Summary</div>
            </Card.Header>
            <Card.Body style={{ backgroundColor: "#f7f8fa" }}>
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
              <div style={{ position: "relative", display: "inline-block" }}>
                {/* Menu Icon */}
                <CgMenuRight
                  size={20}
                  style={{ cursor: "pointer" }}
                  onClick={toggleMenu}
                />
                {showMenu && (
                  <div
                    style={{
                      position: "absolute",
                      top: "30px",
                      right: "0px",
                      background: "#fff",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                      zIndex: 10,
                      width: "160px",
                      fontSize: "13px",
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
            <Card.Body style={{ backgroundColor: "#f7f8fa" }}>
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

        <Col md={4} className="gx-2 gy-4">
          <Card
            style={{
              minHeight: "200px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Card.Header>
              <div style={{ fontWeight: 600, fontSize: "13px" }}>
                Job Status
              </div>
            </Card.Header>
            <Card.Body
              style={{
                padding: "10px",
                display: "flex", // Use flexbox to center content
                flexDirection: "column", // Stack text and button vertically
                justifyContent: "center", // Center content vertically
                alignItems: "center", // Center horizontally
                textAlign: "center", // Center the text
                height: "100%", // Ensure the body takes full height of the card
                backgroundColor: "#f7f8fa",
              }}
            >
              {data ? (
                <>
                  <Card.Title>Job Status Information</Card.Title>
                  <Card.Text>{data}</Card.Text>
                </>
              ) : (
                <>
                  <Card.Text>No Data Found</Card.Text>
                  <Button variant="link" onClick={handleRefresh}>
                    Refresh
                  </Button>
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={4} className="gx-2 gy-4">
          <Card style={{ minHeight: "355px", marginTop: "-95px" }}>
            <Card.Header>
              {" "}
              <div style={{ fontWeight: 600, fontSize: "13px" }}>
                Transactions
              </div>
            </Card.Header>
            <Card.Body
              style={{ padding: "10px", backgroundColor: "#f7f8fa" }}
            ></Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} className="gx-2 gy-4">
          <Card style={{ minHeight: "355px", marginTop: "-95px" }}>
            <Card.Header>
              {" "}
              <div style={{ fontWeight: 600, fontSize: "13px" }}>
                Upcoming Payments
              </div>
            </Card.Header>
            <Card.Body style={{ padding: "10px", backgroundColor: "#f7f8fa" }}>
              <Card.Title></Card.Title>
              <Row></Row>
              <Row></Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="gx-2 gy-0">
          <Card style={{ minHeight: "275px", marginTop: "8px" }}>
            <Card.Header
              as="h5"
              style={{
                fontWeight: 600,
                fontSize: "13px",
                display: "flex", // Use flexbox to align the content
                justifyContent: "space-between", // Space between title and icon
                alignItems: "center", // Center align items vertically
              }}
            >
              Tickets
              <FaBell style={{ cursor: "pointer" }} />
            </Card.Header>
            <Card.Body style={{ padding: "10px", backgroundColor: "#f7f8fa" }}>
              <Card.Text>
                This is a dummy text for the third card. Showcase some more
                relevant details here.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="gy-4">
        <Col md={8} className="gx-2 gy-4">
          <Card
            style={{
              minHeight: "610px",
              marginTop: "10px",
              flexDirection: "column",
            }}
          >
            <Card.Header
              className="d-flex justify-content-between align-items-center"
              style={{ fontWeight: 600, fontSize: "13px" }}
            >
              <span>User Summary</span>
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
              </div>
            </Card.Header>
            <Card.Body style={{ padding: "0px", backgroundColor: "#f7f8fa" }}>
              <Row>
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
                        {/* Statistics */}
                        <Row style={{ margin: "0 -30px" }}>
                          <Col
                            md={2}
                            style={{ textAlign: "center", padding: "0 5px" }}
                          >
                            <div style={{ fontWeight: 600, fontSize: "13px" }}>
                              Client
                            </div>
                            <div
                              style={{ fontSize: "13px", marginTop: "10px" }}
                            >
                              05
                            </div>
                          </Col>
                          <Col
                            md={2}
                            style={{ textAlign: "center", padding: "0 5px" }}
                          >
                            <div style={{ fontWeight: 600, fontSize: "13px" }}>
                              Organization
                            </div>
                            <div
                              style={{ fontSize: "13px", marginTop: "10px" }}
                            >
                              10
                            </div>
                          </Col>
                          <Col
                            md={2}
                            style={{ textAlign: "center", padding: "0 5px" }}
                          >
                            <div style={{ fontWeight: 600, fontSize: "13px" }}>
                              Site
                            </div>
                            <div
                              style={{ fontSize: "13px", marginTop: "10px" }}
                            >
                              03
                            </div>
                          </Col>
                          {/* Dropdowns aligned to the right */}
                          <Col
                            md={5}
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
                                    id="dropdown2"
                                    style={{ fontSize: "13px" }}
                                  >
                                    All Client
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu style={{ fontSize: "12px" }}>
                                    <Dropdown.Item href="#/action-1">
                                      Client 1
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">
                                      Client 2
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                      Client 3
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                              <div className="mx-2">
                                <Dropdown className="me-2">
                                  <Dropdown.Toggle
                                    variant="secondary"
                                    id="dropdown2"
                                    style={{ fontSize: "13px" }}
                                  >
                                    All Organization
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu style={{ fontSize: "12px" }}>
                                    <Dropdown.Item href="#/action-1">
                                      Organization 1
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">
                                      Organization 2
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                      Organization 3
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                              <div className="mx-2">
                                <Dropdown>
                                  <Dropdown.Toggle
                                    variant="secondary"
                                    id="dropdown3"
                                    style={{ fontSize: "13px" }}
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
                            </div>
                          </Col>
                        </Row>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              {/* Nested Column 1 */}
              <Row className="fs-6 g-0">
                <Col md={7} style={{ height: "610px" }}>
                  {" "}
                  {/* Set fixed height for the column */}
                  <Card
                    style={{
                      height: "100%", // Make the card take the full height of the column
                      marginTop: "0px",
                      display: "flex", // Make card a flex container
                      flexDirection: "column", // Stack content vertically
                    }}
                  >
                    <Card.Body
                      style={{
                        flex: 1, // Allow body to take remaining space
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start", // Align items at the top
                        padding: "20px",
                        fontSize: "13px",
                        overflowY: "auto", // Make content scrollable if it exceeds the height
                      }}
                    >
                      <Row className="mb-3 g-1">
                        <Col style={{ marginLeft: "-10px" }}>
                          <Card
                            style={{
                              padding: "10px",
                              textAlign: "left",
                              width: "230px", // Set the width of the Card
                              height: "90px", // Set the height of the Card
                              borderRadius: "10px", // Adjust border radius for rounded corners
                              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Add shadow for depth
                            }}
                          >
                            <div style={{ fontWeight: 600 }}>
                              SiFe Engineering
                            </div>
                            <div>client Name</div>
                            <Row>
                              <Col style={{ textAlign: "left" }}>100</Col>
                              {/* Total Device Count */}
                              <Col style={{ textAlign: "right" }}>
                                {" "}
                                01-01-2024
                              </Col>{" "}
                              {/* client join date */}
                            </Row>
                          </Card>
                        </Col>

                        <Col style={{ marginRight: "-15px" }}>
                          <Card
                            style={{
                              padding: "10px",
                              textAlign: "left",
                              width: "230px", // Set the width of the Card
                              height: "90px", // Set the height of the Card
                              borderRadius: "10px", // Adjust border radius for rounded corners
                              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Add shadow for depth
                            }}
                          >
                            <div style={{ fontWeight: 600 }}>
                              BASICE ELEMENT
                            </div>
                            <div>ignicop</div>
                            <Row>
                              <Col style={{ textAlign: "left" }}>95</Col>
                              {/* Total Device Count */}
                              <Col style={{ textAlign: "right" }}>
                                {" "}
                                08-05-2024
                              </Col>{" "}
                              {/* client join date */}
                            </Row>
                          </Card>
                        </Col>
                      </Row>
                      <Row className="mb-3 g-1">
                        <Col style={{ marginLeft: "-10px" }}>
                          <Card
                            style={{
                              padding: "10px",
                              textAlign: "left",
                              width: "230px", // Set the width of the Card
                              height: "90px", // Set the height of the Card
                              borderRadius: "10px", // Adjust border radius for rounded corners
                              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Add shadow for depth
                            }}
                          >
                            <div style={{ fontWeight: 600 }}>
                              SiFe Engineering
                            </div>
                            <div>client Name</div>
                            <Row>
                              <Col style={{ textAlign: "left" }}>100</Col>
                              {/* Total Device Count */}
                              <Col style={{ textAlign: "right" }}>
                                {" "}
                                01-01-2024
                              </Col>{" "}
                              {/* client join date */}
                            </Row>
                          </Card>
                        </Col>

                        <Col style={{ marginRight: "-15px" }}>
                          <Card
                            style={{
                              padding: "10px",
                              textAlign: "left",
                              width: "230px", // Set the width of the Card
                              height: "90px", // Set the height of the Card
                              borderRadius: "10px", // Adjust border radius for rounded corners
                              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Add shadow for depth
                            }}
                          >
                            <div style={{ fontWeight: 600 }}>
                              BASICE ELEMENT
                            </div>
                            <div>ignicop</div>
                            <Row>
                              <Col style={{ textAlign: "left" }}>95</Col>
                              {/* Total Device Count */}
                              <Col style={{ textAlign: "right" }}>
                                {" "}
                                08-05-2024
                              </Col>{" "}
                              {/* client join date */}
                            </Row>
                          </Card>
                        </Col>
                      </Row>
                      <Row className="mb-3 g-1">
                        <Col style={{ marginLeft: "-10px" }}>
                          <Card
                            style={{
                              padding: "10px",
                              textAlign: "left",
                              width: "230px", // Set the width of the Card
                              height: "90px", // Set the height of the Card
                              borderRadius: "10px", // Adjust border radius for rounded corners
                              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Add shadow for depth
                            }}
                          >
                            <div style={{ fontWeight: 600 }}>
                              SiFe Engineering
                            </div>
                            <div>client Name</div>
                            <Row>
                              <Col style={{ textAlign: "left" }}>100</Col>
                              {/* Total Device Count */}
                              <Col style={{ textAlign: "right" }}>
                                {" "}
                                01-01-2024
                              </Col>{" "}
                              {/* client join date */}
                            </Row>
                          </Card>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>

                {/* Nested Column 2 */}
                <Col md={5} style={{ height: "610px" }}>
                  {" "}
                  {/* Set fixed height for the column */}
                  <Card
                    style={{
                      height: "100%", // Make the card take the full height of the column
                      marginTop: "0px",
                      display: "flex", // Make card a flex container
                      flexDirection: "column", // Stack content vertically
                    }}
                  >
                    <Card.Body
                      style={{
                        flex: 1, // Allow body to take remaining space
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start", // Align items at the top
                        padding: "20px",
                        overflowY: "auto", // Make content scrollable if it exceeds the height
                      }}
                    >
                      <div
                        style={{
                          display: "flex", // Enables flexbox
                          justifyContent: "space-between", // Positions items at opposite ends
                          alignItems: "center", // Aligns items vertically
                          fontWeight: 600,
                          fontSize: "15px",
                        }}
                      >
                        <span>SiFe Engineering</span>
                        <FaTachometerAlt
                          style={{ fontSize: "20px", cursor: "pointer" }}
                          title="Dashboard" // This adds a browser-native tooltip
                        />
                      </div>

                      <div
                        style={{
                          marginTop: "-8px",
                          padding: "0px",
                        }}
                      >
                        <div style={{ fontSize: "13px", marginTop: "10px" }}>
                          Client Name
                        </div>
                        <div style={{ fontSize: "13px" }}>+91 9976006560</div>
                        <div style={{ fontSize: "13px" }}>support@sife.in</div>
                        <div style={{ fontSize: "13px" }}>Balance: 1500</div>
                        <div style={{ fontSize: "13px" }}>
                          Expire on: 31-12-2024{" "}
                        </div>
                      </div>
                      {/* Different section for additional details */}
                      <div>
                        <div
                          style={{
                            width: "300px",
                            height: "300px",
                            marginTop: "10px",
                          }}
                        >
                          <Pie data={pieData} options={pieOptions} />
                        </div>

                        <div
                          style={{
                            display: "flex", // Use Flexbox for layout
                            flexWrap: "wrap", // Allow content to wrap to the next line
                            gap: "10px", // Space between the columns
                            marginTop: "10px",
                          }}
                        >
                          <Row className="gy-3">
                            {/* First Row, Column 1 */}
                            <Col md={4} style={{ textAlign: "center" }}>
                              <div
                                style={{ fontWeight: 600, fontSize: "13px" }}
                              >
                                Device
                              </div>
                              <div
                                style={{ fontWeight: 600, fontSize: "13px" }}
                              >
                                100
                              </div>
                            </Col>
                            {/* First Row, Column 2 */}
                            <Col md={4} style={{ textAlign: "center" }}>
                              <div
                                style={{ fontWeight: 600, fontSize: "13px" }}
                              >
                                Organization
                              </div>
                              <div
                                style={{ fontWeight: 600, fontSize: "13px" }}
                              >
                                10
                              </div>
                            </Col>
                            {/* First Row, Column 3 */}
                            <Col md={4} style={{ textAlign: "center" }}>
                              <div
                                style={{ fontWeight: 600, fontSize: "13px" }}
                              >
                                Sites
                              </div>
                              <div
                                style={{ fontWeight: 600, fontSize: "13px" }}
                              >
                                30
                              </div>
                            </Col>
                            {/* Second Row, Column 1 */}
                            <Col md={4} style={{ textAlign: "center" }}>
                              <div
                                style={{ fontWeight: 600, fontSize: "13px" }}
                              >
                                Alerts
                              </div>
                              <div
                                style={{ fontWeight: 600, fontSize: "13px" }}
                              >
                                80
                              </div>
                            </Col>
                            {/* Second Row, Column 2 */}
                            <Col md={4} style={{ textAlign: "center" }}>
                              <div
                                style={{ fontWeight: 600, fontSize: "13px" }}
                              >
                                Calls
                              </div>
                              <div
                                style={{ fontWeight: 600, fontSize: "13px" }}
                              >
                                350
                              </div>
                            </Col>
                            {/* Second Row, Column 3 */}
                            <Col md={4} style={{ textAlign: "center" }}>
                              <div
                                style={{ fontWeight: 600, fontSize: "13px" }}
                              >
                                SMS
                              </div>
                              <div
                                style={{ fontWeight: 600, fontSize: "13px" }}
                              >
                                300
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="gx-2 gy-4">
          <Card
            style={{
              minHeight: "600px",
              marginTop: "10px",
              flexDirection: "column",
            }}
          >
            <Card.Header
              className="d-flex justify-content-between align-items-center"
              style={{ fontWeight: 600, fontSize: "13px" }}
            >
              <span>Alert</span>
              <div className="d-flex justify-content-end align-items-center">
                <div
                  className="col-4"
                  style={{
                    marginRight: "13px",
                  }}
                >
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="dd-MM-yyyy"
                    className="form-control"
                    placeholderText="From"
                    style={{
                      width: "100px",
                      padding: "5px",
                    }}
                  />
                </div>
                <div className="col-4">
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    dateFormat="dd-MM-yyyy"
                    className="form-control"
                    placeholderText="To"
                    minDate={startDate}
                    style={{
                      width: "100px",
                      padding: "5px",
                    }}
                  />
                </div>
                <FaSyncAlt
                  style={{
                    cursor: "pointer",
                    fontSize: "13px",
                    marginLeft: "10px",
                  }}
                  onClick={() => {
                    setStartDate(null);
                    setEndDate(null);
                  }}
                />
              </div>
            </Card.Header>
            <Card.Body
              style={{
                padding: "10px",
                maxHeight: "685px", // Set a maximum height
                overflowY: "auto", // Enable vertical scrolling for overflowing content
              }}
            >
              <Card.Title style={{ fontWeight: 600, fontSize: "13px" }}>
                Alert
              </Card.Title>
              <Bar data={alert} options={alertoptions} />

              <Card.Title
                className="mt-4"
                style={{ fontWeight: 600, fontSize: "13px" }}
              >
                SMS
              </Card.Title>
              <Bar data={SMS} options={callSMSoptions} />

              <Card.Title
                className="mt-4"
                style={{ fontWeight: 600, fontSize: "13px" }}
              >
                Call
              </Card.Title>
              <Bar data={call} options={callSMSoptions} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={4}>
          <h3>Recent User</h3>
          <ul>
            <li>User Activity 1</li>
            <li>User Activity 2</li>
            <li>User Activity 3</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
