import React from 'react';

import {
    Card,
    Col,
    Row,
    Container,
} from "reactstrap";

import SocialLinks from "../components/SocialLinks";

const GithubProfileCard = ({prof}) => {
    return ( 
            <Card className="section-md bg-gradient-info shadow-lg border-0">
                <Container className="">
                <div className="p-2">
                  <Row className="" style={{paddingTop: 25, paddingBottom: 25}}>
                  <Col className="order-lg-2" lg="4" style={{alignContent: "center", display: "inline-block", height: "100%", verticalAlign: "middle"}}>
                    <div style={{marginTop: "10%"}}>
                            <img src={prof.avatar_url} style={{width: "150px"}} alt="" className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"/>
                    </div>
                      
                    </Col>
                    <Col lg="8" className="order-lg-1">
                      <p className="lead text-white mt-3">
                        Want to discuss a project, internship, startup idea, or just say hi? My inbox is open for all!
                      </p>
                      <div className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
                        <i className="ni ni-pin-3 text-info mr-2" />
                        {prof.location}
                        </div>
                        <SocialLinks />
                    </Col>                    
                  </Row>
                </div>
                </Container>
              </Card>
     );
}
 
export default GithubProfileCard;