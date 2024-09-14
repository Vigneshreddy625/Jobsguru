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
import ProtectedRoute from "../ProtectedRoute";
import Admin from "./Admin";
import Login from "../Authentication/Login";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="home" element={<Jobs />} />
          <Route path="contact" element={<ContactForm />} />
          <Route path="login" element={<Login/>}/>
          <Route
            path="admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default Routing;
