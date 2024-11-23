// src/pages/Sitetable.js
import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import SiteCard from "./SiteCard"; // Import the extracted component
import { clients } from "../data/clients"; // Import clients data

const Sitetable = () => {
  const groupedClients = [];
  for (let i = 0; i < clients.length; i += 3) {
    groupedClients.push(clients.slice(i, i + 3));
  }

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
            {groupedClients.map((row, rowIndex) => (
              <Row className="mb-3 g-0" key={rowIndex}>
                {row.map((client, colIndex) => (
                  <Col md={4} key={colIndex}>
                    <SiteCard {...client} />
                  </Col>
                ))}
              </Row>
            ))}
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Sitetable;
