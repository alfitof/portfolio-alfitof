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

  useEffect(() => {
    let headroom = new Headroom(document.getElementById('navbar-main'));
    // initialise
    headroom.init();
  });

  return (
    <>
      <header className="header-global">
        <Navbar className="navbar-main navbar-transparent navbar-light headroom" expand="lg" id="navbar-main">
          <Container>
            <NavbarBrand href="/" className="mr-lg-5">
              <h2 className="text-white" id="nav-title">
                My Portfolio
              </h2>
            </NavbarBrand>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Navigation;
