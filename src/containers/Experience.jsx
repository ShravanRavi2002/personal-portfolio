import React from 'react';
import { experience } from "../portfolio";
import {
    Container,
    Row,
} from "reactstrap";

import { Fade } from 'react-reveal';

import ExperienceCard from "../components/ExperienceCard";
import "./Education.scss"
const Experience = () => {
    return ( 
        <section className="section section-lg" style={{paddingTop: 0, paddingBottom: 0, backgroundColor: "#11CDEF", marginBottom: 0, marginTop: -50}} id="experience">
            <Container>
            <div className="d-flex p-4">
                    <div>
                        <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                        <i className="fa fa-briefcase text-info" />
                        </div>
                    </div>
                    <div className="pl-4">
                        <h4 className="display-3 text-white">Experience</h4>
                    </div>
                </div>
                <Row className="row-grid align-items-center" style={{marginBottom: "7em"}}>
                    <div className="experience-block">
                        {
                            experience.map((data, i) => {
                                return <ExperienceCard key={i} data={data} />
                            })
                        }
                    </div>
                </Row>
            </Container>
          </section>
     );
}
 
export default Experience;