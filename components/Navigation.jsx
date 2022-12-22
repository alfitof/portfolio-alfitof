import React, { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";

import { greetings, socialLinks } from '../portfolio';
import Headroom from 'headroom.js';
import Link from 'next/link';
import { UncontrolledCollapse, NavbarBrand, Navbar, NavItem, NavLink, Nav, Container, Row, Col } from 'reactstrap';

const Navigation = () => {
  const [collapseClasses, setCollapseClasses] = useState('');
  const onExiting = () => setCollapseClasses('collapsing-out');

  const onExited = () => setCollapseClasses('');

  const handleStyle = () => {
    setCollapseClasses(!collapseClasses);
  };

  useEffect(() => {
    let headroom = new Headroom(document.getElementById('navbar-main'));
    // initialise
    headroom.init();
  });

  return (
    <>
      <header className="header-global">
        <Navbar className="navbar-main navbar-transparent navbar-dark headroom" expand="lg" id="navbar-main">
          <NavbarBrand href="/" className="mr-lg-5">
            <h2 className="text-white" id="nav-title">
              My Portfolio
            </h2>
          </NavbarBrand>
          <button className="navbar-toggler" onClick={handleStyle} aria-label="navbar_toggle" id="navbar_global">
            <span className="navbar-toggler-icon" />
          </button>
          <UncontrolledCollapse toggler="#navbar_global" navbar className={collapseClasses} onExiting={onExiting} onExited={onExited}>
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <h3 className="text-black" id="nav-title">
                    My Portfolio
                  </h3>
                </Col>
                <Col className="collapse-close" xs="6">
                  <button className="navbar-toggler text-black" id="navbar_global">
                    <span />
                    <span />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav className="align-items-lg-center ml-lg-auto" navbar>
              {socialLinks.facebook && (
                <NavItem>
                  <NavLink rel="noopener" aria-label="Facebook" className="nav-link-icon" href={socialLinks.facebook} target="_blank">
                    <i className="fa fa-facebook-square" style={collapseClasses ? { color: 'black' } : { color: 'white' }} />
                    <span className="nav-link-inner--text d-lg-none ml-2" style={collapseClasses ? { color: 'black' } : { color: 'white' }}>
                      Facebook
                    </span>
                  </NavLink>
                </NavItem>
              )}
              {socialLinks.instagram && (
                <NavItem>
                  <NavLink rel="noopener" aria-label="Instagram" className="nav-link-icon" href={socialLinks.instagram} target="_blank">
                    <i className="fa fa-instagram" style={collapseClasses ? { color: 'black' } : { color: 'white' }} />
                    <span className="nav-link-inner--text d-lg-none ml-2" style={collapseClasses ? { color: 'black' } : { color: 'white' }}>
                      Instagram
                    </span>
                  </NavLink>
                </NavItem>
              )}
              {socialLinks.github && (
                <NavItem>
                  <NavLink rel="noopener" aria-label="Github" className="nav-link-icon" href={socialLinks.github} target="_blank">
                    <i className="fa fa-github" style={collapseClasses ? { color: 'black' } : { color: 'white' }} />
                    <span className="nav-link-inner--text d-lg-none ml-2" style={collapseClasses ? { color: 'black' } : { color: 'white' }}>
                      Github
                    </span>
                  </NavLink>
                </NavItem>
              )}
              {socialLinks.linkedin && (
                <NavItem>
                  <NavLink rel="noopener" aria-label="Linkedin" className="nav-link-icon" href={socialLinks.linkedin} target="_blank">
                    <i className="fa fa-linkedin" style={collapseClasses ? { color: 'black' } : { color: 'white' }} />
                    <span className="nav-link-inner--text d-lg-none ml-2" style={collapseClasses ? { color: 'black' } : { color: 'white' }}>
                      Linkedin
                    </span>
                  </NavLink>
                </NavItem>
              )}
              {socialLinks.twitter && (
                <NavItem>
                  <NavLink rel="noopener" aria-label="Twitter" className="nav-link-icon" href={socialLinks.twitter} target="_blank">
                    <i className="fa fa-twitter-square" style={collapseClasses ? { color: 'black' } : { color: 'white' }} />
                    <span className="nav-link-inner--text d-lg-none ml-2" style={collapseClasses ? { color: 'black' } : { color: 'white' }}>
                      Twitter
                    </span>
                  </NavLink>
                </NavItem>
              )}
            </Nav>
          </UncontrolledCollapse>
        </Navbar>
      </header>
    </>
  );
};

export default Navigation;
