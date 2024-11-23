import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { Gateway } from "../data/gateway";

// Color scale function to create a heatmap effect
const getColor = (value) => {
  const intensity = Math.min(value * 50, 255); // Adjust the multiplier for desired color intensity
  return `rgb(${255 - intensity}, ${intensity}, 0)`; // Transition from Red to Green
};

const Siteheatmap = () => {
  return (
    <div className="orgtable-container" style={{ overflowX: "hidden" }}>
      <Col md={12} style={{ height: "518px" }}>
        <Card
          style={{
            height: "100%",
            marginTop: "0px",
            marginBottom: "0px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Card.Body
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              padding: "5px",
              overflowY: "auto",
              overflowX: "hidden", // Prevent horizontal scrolling
              maxWidth: "100%", // Ensure the content doesn't overflow
            }}
          >
            {Gateway.map((site, index) => (
              <React.Fragment key={index}>
                {/* Site Name */}
                <Row>
                  <Col className="font-weight-bold bg-light p-2">
                    {site.sitename}
                  </Col>
                </Row>

                {/* Devices */}
                <Row className="mb-2">
                  <Col>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "1px", // Uniform gap between boxes
                      }}
                    >
                      {site.totalDevices.map((device, i) => (
                        <OverlayTrigger
                          key={i}
                          placement="top"
                          overlay={
                            <Tooltip id={`tooltip-${index}-${i}`}>
                              Device Number: {device}
                            </Tooltip>
                          }
                        >
                          <span
                            style={{
                              display: "inline-block",
                              width: "15px", // Box width
                              height: "15px", // Box height
                              backgroundColor: getColor(device),
                              textAlign: "center",
                              borderRadius: "0px", // No rounded corners
                              cursor: "pointer", // Pointer for hover effect
                            }}
                          />
                        </OverlayTrigger>
                      ))}
                    </div>
                  </Col>
                </Row>
              </React.Fragment>
            ))}
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Siteheatmap;
