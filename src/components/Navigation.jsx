// import React, {useState, useEffect} from 'react';
// // import { Link } from "react-router-dom";


// import { greetings, socialLinks } from "../portfolio";
// import Headroom from "headroom.js";
// import {
//   UncontrolledCollapse,
//   NavbarBrand,
//   Navbar,
//   NavItem,
//   NavLink,
//   Nav,
//   Container,
//   Row,
//   Col,
// } from "reactstrap";
// import { Link, scroller } from "react-scroll";

// import './Navigation.css'
// import './Header.scss'
// const Navigation = () => {
//     const [collapseClasses, setCollapseClasses] = useState("");
//     const onExiting = () => setCollapseClasses("collapsing-out");
    
//     const onExited = () => setCollapseClasses("");

//     useEffect(() => {
//       let headroom = new Headroom(document.getElementById("navbar-main"));
//       // initialise
//       headroom.init();
//     })

//     return ( 
//         <>
//         <header className="header-global">
//           <Navbar
//             className="navbar-main navbar-transparent navbar-light headroom"
//             expand="lg"
//             id="navbar-main"
//           >
//             <Container>
//               {/* <NavbarBrand className="mr-lg-5">
          
//               </NavbarBrand> */}
              // <Nav className="align-items-lg-center ml-lg-auto" navbar>
              //   <li className="nav-item" >
              //       <Link
              //             href="#home"
              //             to="home"
              //             activeClass="active"
              //             className="nav-link"
              //             spy={true}
              //             smooth={true}
              //             duration={1000}
              //             >
              //             <i className="fa fa-home" />
              //             Home
              //         </Link>
              //   </li>
              //   <li className="nav-item" >
              //       <Link
              //           href="#about"
              //           to="about"
              //           activeClass="active"
              //           className="nav-link"
              //           spy={true}
              //           smooth={true}
              //           duration={1000}
              //         >
              //             <i className="fa fa-user" />
              //             About Me
              //         </Link>
              //   </li>  
              //   <li className="nav-item" >
              //       <Link
              //             href="#skills"
              //             to="skills"
              //             activeClass="active"
              //             className="nav-link"
              //             spy={true}
              //             smooth={true}
              //             duration={1000}
              //             >
              //             <i className="fa fa-laptop" />
              //             Skills
              //         </Link>
              //   </li>  
              //   <li className="nav-item" >
              //       <Link
              //             href="#experience"
              //             to="experience"
              //             activeClass="active"
              //             className="nav-link"
              //             spy={true}
              //             smooth={true}
              //             duration={500}
              //             >
              //              <i className="fa fa-briefcase" />
              //             Experience
              //         </Link>
              //   </li>  
              //   <li className="nav-item" >
              //       <Link
              //             href="#publications"
              //             to="publications"
              //             activeClass="active"
              //             className="nav-link"
              //             spy={true}
              //             smooth={true}
              //             duration={500}
              //             >
              //             <i className="ni ni-books" />
              //             Publications
              //         </Link>
              //   </li>  
              //   <li className="nav-item" >
              //       <Link
              //             href="#projects"
              //             to="projects"
              //             activeClass="active"
              //             className="nav-link"
              //             spy={true}
              //             smooth={true}
              //             duration={500}
              //             >
              //             <i className="ni ni-archive-2" />
              //             Projects
              //         </Link>
              //   </li>  
              //   </Nav>
//               <UncontrolledCollapse
//                 toggler="#navbar_global"
//                 navbar
//                 className={collapseClasses}
//                 onExiting={onExiting}
//                 onExited={onExited}
//               >
//                 <div className="navbar-collapse-header">
//                   <Row>
//                     <Col className="collapse-brand" xs="6">
//                       <a to="/">
//                         <h3 className="text-black" id="nav-title">{greetings.name}</h3>
//                       </a>
//                     </Col>
//                     <Col className="collapse-close" xs="6">
//                       <button className="navbar-toggler" id="navbar_global">
//                         <span />
//                         <span />
//                       </button>
//                     </Col>
//                   </Row>
//                 </div>
//                 <Nav className="align-items-lg-center ml-lg-auto" navbar>
//                 <NavItem>
//                     <NavLink
//                       className="nav-link-icon"
//                       href={socialLinks.github}
//                       target="_blank"
//                     >
//                       <i className="fa fa-github" />
//                       <span className="nav-link-inner--text d-lg-none ml-2">
//                         Github
//                       </span>
//                     </NavLink>
//                   </NavItem>
//                   <NavItem>
//                     <NavLink
//                       className="nav-link-icon"
//                       href={socialLinks.linkedin}
//                       target="_blank"
//                     >
//                     <i className="fa fa-linkedin" />
//                       <span className="nav-link-inner--text d-lg-none ml-2">
//                         Linkedin
//                       </span>
//                     </NavLink>
//                   </NavItem>
//                   <NavItem>
//                     <NavLink
//                       className="nav-link-icon"
//                       href={socialLinks.twitter}
//                       target="_blank"
//                     >
//                       <i className="fa fa-twitter-square" />
//                       <span className="nav-link-inner--text d-lg-none ml-2">
//                         Twitter
//                       </span>
//                     </NavLink>
//                   </NavItem>
//                   <NavItem>
//                     <NavLink
//                       className="nav-link-icon"
//                       href={socialLinks.facebook}
//                       target="_blank"
//                     >
//                       <i className="fa fa-facebook-square" />
//                       <span className="nav-link-inner--text d-lg-none ml-2">
//                         Facebook
//                       </span>
//                     </NavLink>
//                   </NavItem>
//                   <NavItem>
//                     <NavLink
//                       className="nav-link-icon"
//                       href={socialLinks.instagram}
//                       target="_blank"
//                     >
//                       <i className="fa fa-instagram" />
//                       <span className="nav-link-inner--text d-lg-none ml-2">
//                         Instagram
//                       </span>
//                     </NavLink>
//                   </NavItem>
                  
                  
//                 </Nav>
              
//               </UncontrolledCollapse>
//             </Container>
//           </Navbar>
//         </header>
//       </>
//      );
// }
 
// export default Navigation;

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

              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={collapseClasses}
                onExiting={onExiting}
                onExited={onExited}
              >

                <div className="navbar-collapse-header">
                  <Row>
                    {/* <Col className="collapse-brand" xs="6">
                      <a to="/">
                        <h3 className="text-black" id="nav-title">{greetings.name}</h3>
                      </a>
                    </Col> */}
                    <div className="collapse-close" xs="6" style={{justifyContent: "left", marginLeft: "15px"}}>
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </div>
                  </Row>
                </div>
            <Nav className="align-items-lg-center ml-lg-auto" navbar style={{justifyContent: "center", margin: "auto"}}>
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
                          <i className="fa fa-home" style={{marginRight: "10px"}}/>
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
                          <i className="fa fa-user" style={{marginRight: "7px"}}/>
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
                          <i className="fa fa-laptop" style={{marginRight: "7px"}}/>
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
                          duration={1000}
                          >
                           <i className="fa fa-briefcase" style={{marginRight: "7px"}}/>
                          Experience
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
                          duration={1000}
                          >
                          <i className="ni ni-archive-2" style={{marginRight: "7px"}}/>
                          Projects
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
                          duration={1000}
                          >
                          <i className="ni ni-books" style={{marginRight: "7px"}}/>
                          Publications
                      </Link>
                </li> 

                </Nav>
                
                {/* <Nav className="align-items-lg-center ml-lg-auto" navbar>
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
                </Nav> */}
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
     );
}
 
export default Navigation;