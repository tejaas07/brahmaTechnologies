import React, { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import {
  Collapse,
  // Navbar,
  NavbarToggler,
  NavbarBrand,
  // Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { FcElectronics, FcHome, FcPhone } from "react-icons/fc";
import { FaHome, FaInfo, FaPhoneAlt, FaTablet } from "react-icons/fa";
import "./Navbar.css";

import Logo from "../../Assets/Images/brahma log.png";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [linkLocation, setLinkLocation] = useState();
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* <Navbar
        className="Navbar"
        expand={"sm"}
        collapseOnSelect
        // fixed={"top"}
        style={
          isOpen
            ? {
                // marginBottom: "140px",
                zIndex: 2,
              }
            : {}
        }
      >
        <NavbarBrand
          className="NavbarBrand"
          href="/"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {" "}
          <img
            // alt="logo"
            src={Logo}
            className="logoImg"
            style={{}}
          />
          <span className="logoName">Brahma Technologies</span>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav
            className="justify-content-end ml-auto"
            style={
              isOpen
                ? {
                    backgroundColor: "#fff",
                    zIndex: 0,
                  }
                : {
                    width: "100%",
                  }
            }
            navbar
          > */}
      {/* <div> */}
      {/* <NavItem
              style={{
                textAlign: "center",
                marginRight: "10px",
              }}
            >
              <NavLink
                href="#home"
                style={{ color: "#000", textDecoration: "none" }}
              >
                <div
                  style={
                    isOpen
                      ? {
                          display: "inline",
                        }
                      : {
                          display: "block",
                          textAlign: "center",
                        }
                  }
                >
                  {isOpen ? (
                    ""
                  ) : (
                    <FaHome size="21" className="navIcon" color={"black"} />
                  )}
                </div>
                <span className="links">Home</span>
              </NavLink>
            </NavItem>
            <NavItem
              style={{
                textAlign: "center",
                marginRight: "10px",
              }}
            >
              <NavLink
                to="/products"
                style={{ color: "#000", textDecoration: "none" }}
              >
                <div
                  style={
                    isOpen
                      ? {
                          display: "inline",
                        }
                      : {
                          display: "block",
                          textAlign: "center",
                        }
                  }
                >
                  {isOpen ? "" : <FaTablet color={"black"} />}
                </div>
                <span className="links"> Our Products</span>
              </NavLink>
            </NavItem>
            <NavItem
              style={{
                marginRight: "10px",
                textAlign: "center",
              }}
            >
              <NavLink
                to="/aboutUs"
                style={{ color: "#000", textDecoration: "none" }}
              >
                <div
                  style={
                    isOpen
                      ? {
                          display: "inline",
                        }
                      : {
                          display: "block",
                          textAlign: "center",
                        }
                  }
                >
                  {isOpen ? "" : <FaInfo size={14} color={"black"} />}
                </div>
                <span className="links">About Us</span>
              </NavLink>
            </NavItem>
            <NavItem
              className="NavItem"
              style={{
                textAlign: "center",
                marginRight: "10px",
              }}
            >
              <NavLink
                to="/contactUs"
                style={{ color: "#000", textDecoration: "none" }}
              >
                <div
                  style={
                    isOpen
                      ? {
                          display: "inline",
                        }
                      : {
                          display: "block",
                          textAlign: "center",
                        }
                  }
                >
                  {isOpen ? "" : <FaPhoneAlt color={"black"} />}
                </div>
                <span className="links">Contact Us</span>
              </NavLink>
            </NavItem> */}
      {/* </div> */}
      {/* <NavItem
              style={{
                textAlign: "center",
              }}
            >
              <NavLink
                // href="/brahmaTechnologies"
                to="/"
                className="NavLink"
                // style={
                //   linkLocation == "/"
                //     ? {
                //         color: "#000",
                //         fontWeight: "600",
                //         textDecoration: "underline",
                //         textUnderlineOffset: "7px",
                //       }
                //     : { color: "#000" }
                // }
              >
                <div
                  style={
                    isOpen
                      ? {
                          display: "inline",
                        }
                      : {
                          display: "block",
                          textAlign: "center",
                        }
                  }
                >
                  {isOpen ? (
                    ""
                  ) : (
                    <FaHome size="21" className="navIcon" color={"black"} />
                  )}
                </div>
                <span className="links">Home</span>
              </NavLink>
            </NavItem>
            <NavItem
              style={{
                textAlign: "center",
              }}
            >
              <NavLink
                to="/brahmaTechnologies/products"
                style={
                  linkLocation == "/products"
                    ? {
                        marginRight: 5,
                        color: "#000",
                        fontWeight: "600",

                        textDecoration: "underline",
                        textUnderlineOffset: "7px",
                      }
                    : {
                        color: "#000",
                      }
                }
              >
                <div
                  style={
                    isOpen
                      ? {
                          display: "inline",
                        }
                      : {
                          display: "block",
                          textAlign: "center",
                        }
                  }
                >
                  {isOpen ? "" : <FaTablet color={"black"} />}
                </div>
                <span className="links"> Our Products</span>
              </NavLink>
            </NavItem>
            <NavItem
              style={{
                textAlign: "center",
              }}
            >
              <NavLink
                href="/brahmaTechnologies/aboutUs"
                style={
                  linkLocation == "/aboutUs"
                    ? {
                        color: "#000",
                        fontWeight: "600",

                        marginRight: 5,
                        textDecoration: "underline",
                        textUnderlineOffset: "7px",
                      }
                    : {
                        color: "#000",
                      }
                }
              >
                <div
                  style={
                    isOpen
                      ? {
                          display: "inline",
                        }
                      : {
                          display: "block",
                          textAlign: "center",
                        }
                  }
                >
                  {isOpen ? "" : <FaInfo size={14} color={"black"} />}
                </div>
                <span className="links">About Us</span>
              </NavLink>
            </NavItem>
            <NavItem
              className="NavItem"
              style={{
                textAlign: "center",
                marginRight: "3px",
              }}
            >
              <NavLink
                className="loks"
                href="/brahmaTechnologies/contactUs"
                style={
                  linkLocation == "/contactUs"
                    ? {
                        marginRight: 5,
                        color: "#000",
                        fontWeight: "600",

                        textDecoration: "underline",
                        textUnderlineOffset: "7px",
                      }
                    : {
                        color: "#000",
                      }
                }
              >
                <div
                  style={
                    isOpen
                      ? {
                          display: "inline",
                        }
                      : {
                          display: "block",
                          textAlign: "center",
                        }
                  }
                >
                  {isOpen ? "" : <FaPhoneAlt color={"black"} />}
                </div>
                <span className="links">Contact Us</span>
              </NavLink>
            </NavItem> */}
      {/* </Nav> */}
      {/* <NavbarText>Simple Text</NavbarText> */}
      {/* </Collapse> */}
      {/* </Navbar> */}

      <Navbar bg="light" collapseOnSelect fixed="top" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              // alt="logo"
              src={Logo}
              className="logoImg"
              style={{}}
            />
            <span className="logoName">Brahma Technologies</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Nav
              // className=""
              style={{ maxHeight: "100px" }}
              className="justify-content-en"
              navbarScroll
            >
              <Nav.Link href="#home">
                <div
                  style={{
                    textAlign: "center",
                    fontWeight: "700",
                    color: "#000",
                  }}
                >
                  Home
                </div>
              </Nav.Link>{" "}
              <Nav.Link href="#products">
                <div
                  style={{
                    textAlign: "center",
                    fontWeight: "700",
                    color: "#000",
                  }}
                >
                  Our Products
                </div>
              </Nav.Link>{" "}
              <Nav.Link href="#AboutUs">
                <div
                  style={{
                    textAlign: "center",
                    fontWeight: "700",
                    color: "#000",
                  }}
                >
                  About Us
                </div>
              </Nav.Link>
              <Nav.Link href="#contactUs">
                <div
                  style={{
                    textAlign: "center",
                    fontWeight: "700",
                    color: "#000",
                  }}
                >
                  Contact Us
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
