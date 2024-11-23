import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import Sitetable from "../pages/Sitetable";
import Siteheatmap from "../pages/Siteheatmap";
import Sitemap from "../pages/Sitemap";

const Device = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [view, setView] = useState("table"); // Default view is table

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
        <Col md={7}>
          <Card style={{ minHeight: "650px", marginTop: "10px" }}>
            <Card.Header
              className="d-flex justify-content-between align-items-center"
              style={{ fontWeight: 600, fontSize: "13px" }}
            >
              <span>Organization Summary</span>
              <div className="d-flex align-items-center">
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
                <button
                  className="btn btn-primary me-2"
                  style={{
                    fontSize: "12px",
                    padding: "5px 10px",
                    whiteSpace: "nowrap",
                  }}
                >
                  Create New User
                </button>
                <div style={{ position: "relative" }}>
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
                      <Card.Text>{/* Statistics */}</Card.Text>
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
      </Row>
    </Container>
  );
};

export default Device;
