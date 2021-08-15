import React, {Fragment} from 'react';
import {Clickable} from 'react-clickable'
import { Fade } from 'react-reveal';
import DisplayLottie from '../components/DisplayLottie'
import GreetingLottie from "../components/DisplayLottie";
import { greetings } from "../portfolio";
import webdev from '../assets/lottie/webdev.json';
import code from '../assets/lottie/coding.json';
import "./Skills.scss"
import Bubbles from "./bubbles/Bubble"
import "./Education.scss"
import EducationCard from "../components/educationCard/EducationCard";
import {educationInfo} from "../portfolio";
import {
    Container,
    Row,
    Col,
    UncontrolledTooltip
} from "reactstrap";

import { skillsSection } from "../portfolio";



const Skills = () => {
    return ( 
                <Fade left duration={1000} distance="40px">
                
                <Container className="text-center my-5 section section-lg" style={{paddingBottom: 0, marginBottom: 0}}>
                <div className="d-flex p-4">
                        <div>
                            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                            <i className="ni ni-single-02 text-info" />
                            </div>
                        </div>
                        <div className="pl-4">
                            <h4 className="display-3 text-info">About Me</h4>
                        </div>
                    </div>
                {/* <p className="lead">{skillsSection.subTitle}</p> */}
                <Fade left duration={1000} distance="40px">
                    <Row>
                        <Col lg="6">
                            <GreetingLottie animationData={code} />
                        </Col>
                        <Col lg="6" style={{margin: "auto", width: "100%", padding: "10px", alignContent: "center"}}>
                            <p className="lead text-black" style={{textAlign: "center",  margin: "auto"}}>{greetings.description}</p>
                        </Col>
                    </Row>
                </Fade>
                <Row>
                <div className="education-section" id="education">
                        <div className="education-card-container">
                        {educationInfo.schools.map((school, index) => (
                            <div onClick = {() => window.open(school.transcript)}>
                                <EducationCard key={index} school={school} />
                            </div>
                        ))}
                    </div>
                </div>

                </Row>
                </Container>
            </Fade>
        
     );
}
 
export default Skills;