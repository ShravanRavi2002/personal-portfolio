import React, {createRef, useContext} from "react";
import {Fade, Slide} from "react-reveal";
import "./EducationCard.scss";
// import StyleContext from "../../contexts/StyleContext";
import UT from "../../assets/images/utLogo.png"

export default function EducationCard({school}) {
  
  const imgRef = createRef();

  const GetDescBullets = ({descBullets}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li key={i} className="subTitle">
            {item}
          </li>
        ))
      : null;
  };
  const {isDark} = false;
  return (
    
    <div>
      <Fade left duration={1000}>
        <div className="education-card">
          <div className="education-card-left">
            <img
              crossOrigin={"anonymous"}
              ref={imgRef}
              className="education-roundedimg"
              src={UT}
              alt={school.schoolName}
            />
          </div>
          <div className="education-card-right">
            <h5 className="education-text-school">{school.schoolName}</h5>

            <div className="education-text-details">
              <h5
                className={
                  isDark
                    ? "dark-mode education-text-subHeader"
                    : "education-text-subHeader"
                }
              >
                {school.subHeader}
              </h5>
              <div className="education-info">
              <p
                    className={`${
                      isDark ? "dark-mode" : ""
                    } education-text-duration`}
                  >
                    {school.duration}
                  </p>
                  <p className="education-text-desc-right">{school.desc}</p>
              </div>
              <div style={{display: "flex", paddingBottom: "1rem"}}>
                    <p className="education-text-coursework-left">{"Relevant Coursework:"}</p>
                    <p className="education-text-coursework-right">{school.coursework}</p>
              </div>
                  
              
            </div>
          </div>

        </div>
      </Fade>
      <Slide left duration={2000}>
        <div className="education-card-border"></div>
      </Slide>
    </div>
  );
}
