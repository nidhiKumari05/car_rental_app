import React from "react";
import { Navbar, Nav, Container, Button, Dropdown } from "react-bootstrap";
import GetAppIcon from "@mui/icons-material/GetApp";
import LanguageIcon from "@mui/icons-material/Language";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SailingIcon from "@mui/icons-material/Sailing";
import images from "./Image.png";

const AppNavbar = () => {
  return (
    <>
      {/* Top Banner */}
      <div
        style={{
          backgroundColor: "#4d5167",
          color: "white",
          padding: "1.5rem",
          textAlign: "left",
          fontSize: "1rem",
          width: "100%",
          lineHeight: "1.125rem",
        }}
      >
        Welcome to Expedia.com. Continue to the <strong>India site</strong> at{" "}
        <a href="#" style={{ color: "white", textDecoration: "underline" }}>
          Expedia.co.in
        </a>
        .
      </div>

      <Navbar
        
        expand="lg"
        className="py-2"
        style={{
          minHeight: "6rem",
          borderBottom: "1px solid lightgray",

          background: "#fff",
          boxShadow: "0 2px .75rem rgba(12, 14, 28, 0.08)", // This is fine, optional adjustment if needed
        }}
      >
        <Container>
          <Navbar.Brand href="#" className="d-flex align-items-center">
            {/* Logo with text */}
            {/* <SailingIcon style={{ fontSize: "2rem" }} /> */}
            <img src={images} alt = "nee image" className="me-1"/>
            <span className="" style={{ fontSize: "2rem" }}>
              Expedia
            </span>
            <span className=" ms-5">Shop travel</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center">
              {/* Shop travel */}
              <Dropdown className="me-3">
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Hotels</Dropdown.Item>
                  <Dropdown.Item href="#">Flights</Dropdown.Item>
                  <Dropdown.Item href="#">Cars</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              {/* Get the app button */}
              <Button
                variant="outline-secondary"
                className="me-3 d-flex align-items-center"
                style={{borderRadius:"2rem",color:"black" }}
              >
                <GetAppIcon style={{ marginRight: "5px",color:"blue"}} />
                Get the app
              </Button>

              {/* Language selection */}
              <Nav.Link
                href="#"
                className="d-flex align-items-center text-dark"
              >
                <LanguageIcon className="me-2" />
                English
              </Nav.Link>

              {/* List your property */}
              <Nav.Link href="#" className="text-dark">
                List your property
              </Nav.Link>

              {/* Support */}
              <Nav.Link href="#" className="text-dark">
                Support
              </Nav.Link>

              {/* Trips */}
              <Nav.Link href="#" className="text-dark">
                Trips
              </Nav.Link>

              {/* Sign In */}
              <Nav.Link
                href="#"
                className="d-flex align-items-center text-dark"
              >
                <MenuBookIcon className="me-2" />
                Sign in
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div
          style={{ borderBottom: "1px solid gray", marginTop: "1rem" }}
        ></div>
      </Navbar>
    </>
  );


};

export default AppNavbar;
