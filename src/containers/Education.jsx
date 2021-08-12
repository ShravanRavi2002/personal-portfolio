// import React from 'react';
// // import EducationCard from "../components/EducationCard";
// import { educationInfo } from "../portfolio";
// import {
//     Container,
//     Row,
//     Col
// } from "reactstrap";

// import Education from "../components/educationCard/EducationCard"

// const Edution = () => {
//     // return ( 
//     //     // <section className="section pb-0 bg-gradient-info my-5">
//     //     //     <Container>
//     //     //         <div className="d-flex px-3">
//     //     //             <div>
//     //     //                 <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
//     //     //                 <i className="ni ni-books text-info" />
//     //     //                 </div>
//     //     //             </div>
//     //     //             <div className="pl-4">
//     //     //                 <h4 className="display-3 text-white">Education</h4>
//     //     //             </div>
//     //     //         </div>
//     //     //         <Row className="row-grid align-items-center">
//     //     //             {
//     //     //                 educationInfo.map(info => {
//     //     //                     return  <Col className="order-lg-1" lg="6"  key={info.schoolName}><EdutionCard education={info} /></Col>
//     //     //                 })
//     //     //             }
//     //     //         </Row>
//     //     //     </Container>
//     //     //     <div className="separator separator-bottom separator-skew zindex-100">
//     //     //       <svg
//     //     //         xmlns="http://www.w3.org/2000/svg"
//     //     //         preserveAspectRatio="none"
//     //     //         version="1.1"
//     //     //         viewBox="0 0 2560 100"
//     //     //         x="0"
//     //     //         y="0"
//     //     //       >
//     //     //         <polygon
//     //     //           className="fill-white"
//     //     //           points="2560 0 2560 100 0 100"
//     //     //         />
//     //     //       </svg>
//     //     //     </div>
//     //     //   </section>
//     //     <Education/>
//     //  );
//      return (
//         <div className="education-section" id="education">
//           <h1 className="education-heading">Education</h1>
//           <div className="education-card-container">
//             {educationInfo.schools.map((school, index) => (
//                 // console.log(school.schoolName)
//               <Education key={index} school={school} />
//             ))}
//           </div>
//         </div>
//       );
// }
 
// export default Edution;

import React from "react";
import "./Education.scss";
import EducationCard from "../components/educationCard/EducationCard";
import {educationInfo} from "../portfolio";
import {
  Container,
  Row,
  Col
} from "reactstrap";

export default function Education() {
    return (
      <Container>
                <div className="d-flex px-3">
                    <div>
                        <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                        <i className="ni ni-books text-info" />
                        </div>
                    </div>
                    <div className="pl-4">
                        <h4 className="display-3 text-white">Education</h4>
                    </div>
                </div>
                <Row className="row-grid align-items-center">
                    <div className="education-section" id="education">
                        <div className="education-card-container">
                          {educationInfo.schools.map((school, index) => (
                            <EducationCard key={index} school={school} />
                          ))}
                        </div>
                      </div>
                </Row>
        </Container>
    );
}
