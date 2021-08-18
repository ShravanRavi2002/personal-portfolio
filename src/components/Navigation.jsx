import React, {useState, useEffect} from 'react';
// import { Link } from "react-router-dom";


import { greetings, socialLinks } from "../portfolio";
import Headroom from "headroom.js";
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";
import { Link, scroller } from "react-scroll";

import './Navigation.css'
import './Header.scss'
const Navigation = () => {
    const [collapseClasses, setCollapseClasses] = useState("");
    const onExiting = () => setCollapseClasses("collapsing-out");
    
    const onExited = () => setCollapseClasses("");

    useEffect(() => {
      let headroom = new Headroom(document.getElementById("navbar-main"));
      // initialise
      headroom.init();
    })

    return ( 
        <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              {/* <NavbarBrand className="mr-lg-5">
          
              </NavbarBrand> */}
              <Nav className="align-items-lg-center ml-lg-auto" navbar>
                <li className="nav-item" >
                    <Link
                          href="#home"
                          to="home"
                          activeClass="active"
                          className="nav-link"
                          spy={true}
                          smooth={true}
                          duration={1000}
                          >
                          <i className="fa fa-home" />
                          Home
                      </Link>
                </li>
                <li className="nav-item" >
                    <Link
                        href="#about"
                        to="about"
                        activeClass="active"
                        className="nav-link"
                        spy={true}
                        smooth={true}
                        duration={1000}
                      >
                          <i className="fa fa-user" />
                          About Me
                      </Link>
                </li>  
                <li className="nav-item" >
                    <Link
                          href="#skills"
                          to="skills"
                          activeClass="active"
                          className="nav-link"
                          spy={true}
                          smooth={true}
                          duration={1000}
                          >
                          <i className="fa fa-laptop" />
                          Skills
                      </Link>
                </li>  
                <li className="nav-item" >
                    <Link
                          href="#experience"
                          to="experience"
                          activeClass="active"
                          className="nav-link"
                          spy={true}
                          smooth={true}
                          duration={500}
                          >
                           <i className="fa fa-briefcase" />
                          Experience
                      </Link>
                </li>  
                <li className="nav-item" >
                    <Link
                          href="#publications"
                          to="publications"
                          activeClass="active"
                          className="nav-link"
                          spy={true}
                          smooth={true}
                          duration={500}
                          >
                          <i className="ni ni-books" />
                          Publications
                      </Link>
                </li>  
                <li className="nav-item" >
                    <Link
                          href="#projects"
                          to="projects"
                          activeClass="active"
                          className="nav-link"
                          spy={true}
                          smooth={true}
                          duration={500}
                          >
                          <i className="ni ni-archive-2" />
                          Projects
                      </Link>
                </li>  
                </Nav>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={collapseClasses}
                onExiting={onExiting}
                onExited={onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <a to="/">
                        <h3 className="text-black" id="nav-title">{greetings.name}</h3>
                      </a>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href={socialLinks.github}
                      target="_blank"
                    >
                      <i className="fa fa-github" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Github
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href={socialLinks.linkedin}
                      target="_blank"
                    >
                    <i className="fa fa-linkedin" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Linkedin
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href={socialLinks.twitter}
                      target="_blank"
                    >
                      <i className="fa fa-twitter-square" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Twitter
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href={socialLinks.facebook}
                      target="_blank"
                    >
                      <i className="fa fa-facebook-square" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Facebook
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href={socialLinks.instagram}
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Instagram
                      </span>
                    </NavLink>
                  </NavItem>
                  
                  
                </Nav>
              
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
     );
}
 
export default Navigation;


// import { Navbar, Nav } from "react-bootstrap";
// import React from "react";
// // import { Link } from "react-scroll";
// import { NavHashLink as Link } from "react-router-hash-link";

// export default function NavbarDefault() {
//   const scrollWithOffset = (el, offset) => {
//     window.scroll({
//       top: el.offsetTop - offset,
//       left: 0,
//       behavior: "smooth"
//     });
//   };

//   return (
//     <div>
//       <Navbar
//         collapseOnSelect
//         expand="sm"
//         className="navbar"
//         bg="navbar"
//         variant="dark"
//       >
//         {/* <LinkContainer to="/"> */}
//         <Navbar.Brand id="brand">A P</Navbar.Brand>
//         {/* </LinkContainer> */}
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="ml-auto">
//             <Link
//               activeClass="active"
//               to="/#home"
//               spy={true}
//               smooth={true}
//               scroll={(el) => scrollWithOffset(el, 75)}
//               exact
//               className="nav-link"
//             >
//               Home
//             </Link>

//             <Link
//               activeClass="active"
//               to="/#experience"
//               spy={true}
//               smooth={true}
//               duration={500}
//               scroll={(el) => scrollWithOffset(el, 75)}
//               exact
//               className="nav-link"
//             >
//               Experience
//             </Link>
//             <Link
//               activeClass="active"
//               to="/#contact"
//               spy={true}
//               smooth={true}
//               duration={500}
//               exact
//               className="nav-link"
//             >
//               Contact
//             </Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//     </div>
//   );
// }


// import React from "react";
// import Headroom from "react-headroom";
// // import "./Header.scss";
// import {
//   // greeting,
//   skillsSection,
//   openSource,
//   // blogSection,
  
// } from "../portfolio";

// function Navigation() {
//   const {isDark} = false;
//   // const viewExperience = workExperiences.display;
//   const viewOpenSource = openSource.display;
//   const viewSkills = skillsSection.display;
//   // const viewBlog = blogSection.display;

//   return (
//     <Headroom>
//       <header className={isDark ? "dark-menu header" : "header"}>
//         <a href="/" className="logo">
//           <span className="grey-color"> &lt;</span>
//           {/* <span className="logo-name">{greeting.username}</span> */}
//           <span className="grey-color">/&gt;</span>
//         </a>
//         <input className="menu-btn" type="checkbox" id="menu-btn" />
//         <label
//           className="menu-icon"
//           htmlFor="menu-btn"
//           style={{color: "white"}}
//         >
//           <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
//         </label>
//         <ul className={isDark ? "dark-menu menu" : "menu"}>
//           {viewSkills && (
//             <li>
//               <a href="#skills">Skills</a>
//             </li>
//           )}
//           {/* {viewExperience && (
//             <li>
//               <a href="#experience">Work Experiences</a>
//             </li>
//           )} */}
//           {viewOpenSource && (
//             <li>
//               <a href="#opensource">Open Source</a>
//             </li>
//           )}
//           {/* {viewAchievement && (
//             <li>
//               <a href="#achievements">Achievements</a>
//             </li>
//           )} */}
//           {/* {viewBlog && (
//             <li>
//               <a href="#blogs">Blogs</a>
//             </li>
//           )} */}
//           <li>
//             <a href="#contact">Contact Me</a>
//           </li>

//         </ul>
//       </header>
//     </Headroom>
//   );
// }
// export default Navigation;