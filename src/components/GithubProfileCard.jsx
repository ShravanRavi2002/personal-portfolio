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
                  <Row className="">
                  <Col className="order-lg-2"  style={{alignContent: "center", display: "flex", height: "100%", verticalAlign: "middle"}}>
                    <div style={{alignContent: "center", margin: "auto"}}>
                            <img src={prof.avatar_url} style={{width: "150px"}} alt="" className="rounded-circle img-center img-fluid shadow shadow-lg--hover "/>
                    </div>
                      
                    </Col>
                    <Col lg="8" className="order-lg-1" style={{alignContent: "center", margin: "auto"}}>
                      <div style={{alignContent: "center", margin: "auto"}}> 
                          <div className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
                          <i className="ni ni-pin-3 text-info mr-2" />
                          {prof.location}
                          </div>
                          <SocialLinks />
                      </div>

                    </Col>                    
                  </Row>
                </div>
                </Container>
              </Card>
     );
}
 
export default GithubProfileCard;