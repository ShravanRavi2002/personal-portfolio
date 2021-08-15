		
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
   
   
   
   const IconBubbles = () => {
       return ( 
        <div className="bubbleContainer">
            <Container>
            <div className="d-flex p-4">
                        <div>
                            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                            <i className="ni ni-single-02 text-info" />
                            </div>
                        </div>
                        <div className="pl-4">
                            <h4 className="display-3 " style={{color: "white"}}>Skills</h4>
                        </div>
                    </div>
                <Fade duration={1000} ><Bubbles/></Fade>
            </Container>
        </div>
           
        );
   }
    
   export default IconBubbles;     
        
