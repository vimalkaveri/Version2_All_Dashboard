import React from "react";
import { Col, Card } from "react-bootstrap";
import MapComponent from "../data/MapComponent"; // Correct import for MapComponent

const Sitemap = () => {
  // Define the center and zoom level for the map
  const mapCenter = [20.5937, 78.9629]; // Example coordinates (lat, lng)
  const mapZoom = 4;

  // Define the markers for the map
  const markers = [
    { lat: 13.074169, lng: 80.2086704, name: "sife 1" },
    { lat: 12.9716, lng: 77.5946, name: "kalpataru" },
    { lat: 28.7041, lng: 777.1025, name: "Delhi" },
  ];

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
            <MapComponent center={mapCenter} zoom={mapZoom} markers={markers} />{" "}
            {/* Render MapComponent here */}
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Sitemap;
