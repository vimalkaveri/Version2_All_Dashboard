import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppLayout from "./containers/AppLayout";  // Correct path based on your structure

const App = () => {
  return (
    <Router>
      <AppLayout /> {/* Wrap everything in AppLayout */}
    </Router>
  );
};

export default App;
