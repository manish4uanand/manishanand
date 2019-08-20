import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll';


const NavBar = () => {
  return (  
    <Navbar fixed="top" bg="dark" variant="dark" expand="lg" style={{opacity: '0.7'}}>
      <Navbar.Brand href="/" style={{ marginLeft: '10%', marginRight: '10%' }}>
        {/* <img alt="Manish Anand" width="100"/> */}Manish Anand
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse  className="justify-content-end" id="basic-navbar-nav" style={{ marginLeft: '10%', marginRight: '10%' }}>
        <Nav className="mr-right">
          <AnchorLink className="anchorLink" href="#home">Home</AnchorLink>
          <AnchorLink className="anchorLink" href='#about'>About</AnchorLink>
          <AnchorLink className="anchorLink" href='#project'>Portfolio</AnchorLink>
          <a className="anchorLink" href="Resume.pdf" target="_blank">Resume</a>
          <AnchorLink className="anchorLink" href="#contact">Contact</AnchorLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar;