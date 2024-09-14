import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import Layout from "./Layout";
import Jobs from "./Jobs";
import ContactForm from "./Contact";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="home" element={<Jobs />} />
          <Route path="contact" element={<ContactForm />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default Routing;
