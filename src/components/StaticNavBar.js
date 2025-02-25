import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./App.css";
export default function StaticNavBar() {
  return (
    <>
      <Navbar
        sticky="top"
        expand="lg"
        style={{ backgroundColor: "#0cb097" }}
      >
        <Navbar.Brand>
          <Link to="/" className="mr-lg-4" style={{ color: "white" }}>
            PharmaGuard
          </Link>
        </Navbar.Brand>
      </Navbar>
    </>
  );
}
