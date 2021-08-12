import React, { useEffect } from "react";
import { greetings } from "../portfolio";
import code from '../assets/lottie/coding.json';
import { useTypewriter} from "react-simple-typewriter"
import "./Home.css"
import { ChakraProvider, Box, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools"
import Card from "../components/badge/card";
import greeting from '../assets/lottie/greeting.json';

import { Fade } from 'react-reveal';

import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

import GreetingLottie from "../components/DisplayLottie";
// import SocialLinks from "components/SocialLinks";

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        color: mode("gray.700", "whiteAlpha.900")(props),
        bg: mode("#f5f0ea", "gray.900")(props),
      }
    })
  }
});

const Greetings = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  })

  const text = useTypewriter({
    words: [''],
    loop: 1, // Infinit
    typeSpeed: 70,
    delaySpeed: 2000,
  })
  return ( 
    <Fade top duration={1000} distance="40px">
        <main ref="main"style={{height: "max-content", maxHeight: "1000px"}}>
          <div className="position-relative">
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 bg-gradient-info">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row lg="10">
                    <Col lg="6"  style={{marginRight: "40px"}}>
                      {/* <h1 className="display-3 text-white">
                        {greetings.title + " "}
                      </h1> */}

                        <h3 className="name_small">
                            Hello, my name is
                        </h3>
                        <h1 className="name">
                            Shravan Ravi
                        </h1>
                        {/* <hr  style={{borderTop: "1.75px solid #060b26", width: "max-content + 90px", paddingBottom: "25px", paddingLeft: "50px"}} align="center"/>  */}
                              {/* <h1 class="lead text-white" style={{   fontWeight: 'normal' }}> 
                                I'm a {" "}
                                    <span style={{ color: 'white',fontWeight: 'bold', margin: 0, padding: 0 }}>
                                        {text}
                                    </span>
                                </h1>  */}
                        
                      {/* <SocialLinks /> */}
                      <div className="disappearingAct" style={{paddingBottom: "20px"}}>
                          <GreetingLottie animationData={greeting} />
                      </div>
                      

                    </Col>
                    <Col lg="5">
                      <div style={{justifyContent: "center", margin: "center", width: "100%", padding: "auto"}}>
                          <ChakraProvider >
                              <Box w="max-content">
                                  <Card />
                              </Box>
                                
                            </ChakraProvider>
                      </div>


                        <div className="btn-wrapper my-4">
                        <Button
                          className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                          color="default"
                          href={greetings.resumeLink}
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-file" />
                          </span>
                          <span className="btn-inner--text">
                            See My Resume
                          </span>
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
        </main>
        </Fade>
   );
}
 
export default Greetings;
