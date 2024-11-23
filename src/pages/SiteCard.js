import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const SiteCard = ({ name, clientName, totalDevices, joinDate }) => (
  <Card
    style={{
      padding: "15px",
      textAlign: "left",
      width: "190px",
      height: "90px",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      fontSize: "13px",
    }}
  >
    <div style={{ fontWeight: 600 }}>{name}</div>
    <div>{clientName}</div>
    <Row>
      <Col style={{ textAlign: "left" }}>{totalDevices}</Col>
      <Col style={{ textAlign: "right" }}>{joinDate}</Col>
    </Row>
  </Card>
);

export default SiteCard;
