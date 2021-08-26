import React, { useState, useEffect, useCallback } from "react";
import {Col} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";
import axios from "axios";
import colors from "./Colors.json"
import MultiColorProgressBar from "./LanguageBar/MultiColorProgressBar";
import { projects } from "../portfolio";
import {Fade} from "react-reveal"
const ProjectCard = ({ value }) => {
  const {
    name,
    description,
    svn_url,
    stargazers_count,
    languages_url,
    pushed_at,
  } = value;
  var demo_url = null
  projects.map((project) => {
    if(name === project.name) {
      demo_url = project.demo
    }
  })
  console.log(demo_url)
  return (
    <Fade>

    
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          <Card.Title as="h5">{name || <Skeleton />} </Card.Title>
          <Card.Text>{(!description)?"":description || <Skeleton count={3} />} </Card.Text>
          {svn_url ? <CardButtons svn_url={svn_url} demo_url={demo_url}/> : <Skeleton count={2} />}
          <hr style={{paddingBottom: "15px"}}/>
          {languages_url ? (
            <Language languages_url={languages_url} repo_url={svn_url} />
          ) : (
            <Skeleton count={3} />
          )}
          {value ? (
            <CardFooter star_count={stargazers_count} repo_url={svn_url} pushed_at={pushed_at} />
          ) : (
            <Skeleton />
          )}
        </Card.Body>
      </Card>
      </Fade>
  );
};



const CardButtons = ({ svn_url, demo_url }) => {
  return (
    <>
      <div style={{display: "flex", justifyContent: "center", margin: "auto",}}> 
          <a
            href={svn_url}
            className="btn btn-outline-secondary mr-3"
            style={{ margin: "15px"}}
            target="_blank"
          >
            <i className="fa fa-github" style={{paddingRight: "5px"}}/> Repo
          </a>
          {demo_url != null ? 
          
          <a
          href={demo_url}
          className="btn btn-outline-secondary mr-3"
          style={{ margin: "15px"}}
          target="_blank"
        >
          <i className="fa fa-laptop" style={{paddingRight: "5px"}}/> Demo
        </a> : null
        
        } 


      </div>

    </>
  );
};



const Language = ({ languages_url, repo_url }) => {
  const [data, setData] = useState([]);
  const [readings, setReading] = useState([
  ])

  const handleRequest = useCallback(async () => {
    try {
      const response = await axios.get(languages_url);
      return setData(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }, [languages_url]);

  useEffect(() => {
    handleRequest();
  }, [handleRequest]);

  const array = [];
  let total_count = 0;
  for (let index in data) {
    array.push(index);
    total_count += data[index];
  }

  return (
    <div className="pb-3" style={{display: "flex", justifyContent: "center", alignContent: "center", flexWrap: "wrap"}}>
      {array.length
        ? array.map((language) => (
            
            <a
              key={language} 
              className="badge badge-light card-link"
              style={{backgroundColor: colors[language], margin: "5px"}}
              href={repo_url + `/search?l=${language}`}
              target=" _blank"
              {... readings.push({"name": language, "value": Math.trunc((data[language] / total_count) * 1000) / 10, "color": colors[language]})}
            >
              {language}:{" "}
              {Math.trunc((data[language] / total_count) * 1000) / 10} %
            </a>
          ))
        : "code yet to be deployed."}
        <MultiColorProgressBar readings={readings}/>
    </div>
  );
};

const CardFooter = ({ star_count, repo_url, pushed_at }) => {
  const [updated_at, setUpdated_at] = useState("0 mints");

  const handleUpdatetime = useCallback(() => {
    const date = new Date(pushed_at);
    const nowdate = new Date();
    const diff = nowdate.getTime() - date.getTime();
    const hours = Math.trunc(diff / 1000 / 60 / 60);

    if (hours < 24) {
      if (hours < 1) return setUpdated_at("just now");
      let measurement = hours === 1 ? "hour" : "hours";
      return setUpdated_at(`${hours.toString()} ${measurement} ago`);
    } else {
      const options = { day: "numeric", month: "long", year: "numeric" };
      const time = new Intl.DateTimeFormat("en-US", options).format(date);
      return setUpdated_at(`on ${time}`);
    }
  }, [pushed_at]);

  useEffect(() => {
    handleUpdatetime();
  }, [handleUpdatetime]);

  return (
    <p className="card-text" style={{textAlign: "right"}}>
      {/* <a
        href={repo_url + "/stargazers"}
        target=" _blank"
        className="text-dark text-decoration-none"
      >
        <span className="text-dark card-link mr-4">
          <i className="fa fa-star" style={{padding: "10px"}} /> Stars{" "}
          <span className="badge badge-dark">{star_count}</span>
        </span>
      </a> */}
      <small className="text-muted">Updated {updated_at}</small>
    </p>
  );
};

export default ProjectCard;