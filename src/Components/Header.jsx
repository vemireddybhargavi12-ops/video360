import { faBell, faCirclePlus, faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row, Form, Button, Badge, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Styles/Header.css";
import React from "react";
import { Link } from "react-router-dom";

function Header({ toggleSidebar }) {
  return (
    <section
      style={{ backgroundColor: "#232323" }}
      className="py-2 position-sticky top-0 z-3"
    >
      <Container fluid>
        <Row className="align-items-center">
          {/* Left: Hamburger + Logo */}
          <Col
            lg={3}
            md={4}
            sm={12}
            className="text-lg-start text-center mb-2 mb-lg-0 d-flex align-items-center justify-content-lg-start justify-content-center"
          >
            <Button
              variant="outline-light"
              onClick={toggleSidebar}
              style={{
                border: "none",
                background: "none",
                color: "white",
                marginRight: "10px",
                padding: "0",
              }}
            >
              <FontAwesomeIcon icon={faBars} size="lg" />
            </Button>

            <Link to="/">
              <img src="/assets//logo.png" alt="logo" width="30%" />
            </Link>
          </Col>

          {/* Center: Search Bar */}
          <Col lg={6} md={4} sm={12} className="mb-2 mb-lg-0 d-none d-sm-block">
            <Form className="d-flex justify-content-center">
              <Form.Control
                type="search"
                placeholder="Search for....."
                className=" text-white p-1"
                style={{
                  backgroundColor: "#121212",
                  border: "1px solid black",
                  borderRadius: "0",
                  width: "90%",
                }}
              />
              <FontAwesomeIcon
                icon={faSearch}
                className=" text-white p-2 searchicon"
                style={{
                  backgroundColor: "#323232ff",
                }}
              />
            </Form>
          </Col>

          {/* Right: Upload + Bell + Profile */}
          <Col
            lg={3}
            md={4}
            sm={12}
            className="text-lg-end text-center Headercss position-relative"
          >
            <Link to="/Uploadvideo">
              <FontAwesomeIcon icon={faCirclePlus} className="fs-6" />{" "}
              <span className="p-0">Upload Video</span>
            </Link>

            <a href="#notifications" className="position-relative">
              <FontAwesomeIcon icon={faBell} className="fs-6 ps-2 pe-4" />
              <Badge
                bg="danger"
                pill
                className="position-absolute top-0 start-50 translate-middle me-1 pb-2"
              >
                3+
                <span className="visually-hidden ">New notifications</span>
              </Badge>
            </a>

            {/* ✅ FIXED: Removed drop="up-centered" to stop multiple dropdowns */}
            <Dropdown
              align="end"
              className="d-inline"
              autoClose="outside"
            >
              <Dropdown.Toggle
                variant="outline-none"
                id="dropdown-basic"
                style={{
                  border: "none",
                  background: "none",
                  color: "white",
                  padding: "0",
                }}
              >
                <img
                  src="/assets//Digit_icon.png"
                  alt="Digitit"
                  className="mx-2"
                  width="25px"
                />
                <span className="p-0">DIGITIT</span>
              </Dropdown.Toggle>

              <Dropdown.Menu
                className="dropdown-fix"
                style={{ backgroundColor: "#232323" }}
                popperConfig={{ strategy: "fixed" }}
              >
                <Dropdown.Item as={Link} to="/Myaccount">
                  My Account
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/Settings">
                  Settings
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/Help">
                  Help
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item as={Link} to="/">
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Header;
