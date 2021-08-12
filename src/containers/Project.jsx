import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProjectCard from "./ProjectCard";
import axios from "axios";

const dummyProject = {
  name: null,
  description: null,
  svn_url: null,
  stargazers_count: null,
  languages_url: null,
  pushed_at: null,
};
const API = "https://api.github.com";
// const gitHubQuery = "/repos?sort=updated&direction=desc";
// const specficQuerry = "https://api.github.com/repos/hashirshoaeb/";

const Project = ({ heading, username, length, specfic }) => {
  const allReposAPI = `${API}/users/${username}/repos?sort=updated&direction=desc`;
  const specficReposAPI = `${API}/repos/${username}`;
  const dummyProjectsArr = new Array(length + specfic.length).fill(
    dummyProject
  );

  const [projectsArray, setProjectsArray] = useState([]);

  const fetchRepos = useCallback(async () => {
    let repoList = [];
    try {
      // getting all repos
      const response = await axios.get(allReposAPI);
      // slicing to the length
      repoList = [...response.data.slice(0, length)];
      // adding specified repos
      try {
        for (let repoName of specfic) {
          const response = await axios.get(`${specficReposAPI}/${repoName}`);
          repoList.push(response.data);
        }
      } catch (error) {
        console.error(error.message);
      }
      // setting projectArray
      // TODO: remove the duplication.
      setProjectsArray(repoList);
    } catch (error) {
      console.error(error.message);
    }
  }, [allReposAPI, length, specfic, specficReposAPI]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  var leftCol = [1, 2]
  var rightCol = [0]
  return (
      <Container className="">
        <div className="d-flex p-4">
                    <div>
                        <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                        <i className="ni ni-archive-2 text-info" />
                        </div>
                    </div>
                    <div className="pl-4">
                        <h4 className="display-3 text-info">Hackathon Projects</h4>
                    </div>
                </div>
            <div style={{display: "flex"}}>

            <Col lg={7}>
                    {projectsArray.length
                      ? projectsArray.map((project, index) => (
                        leftCol.includes(index) ?
                          <ProjectCard
                            key={`project-card-${index}`}
                            id={`project-card-${index}`}
                            value={project}
                          /> : null
                          )) 
                      : dummyProjectsArr.map((project, index) => (
                          <ProjectCard
                            key={`dummy-${index}`}
                            id={`dummy-${index}`}
                            value={project}
                          />
                        ))}
                  </Col>
                  <Col lg={7}>
                    {projectsArray.length
                      ? projectsArray.map((project, index) => (
                        rightCol.includes(index) ?
                          <ProjectCard
                            key={`project-card-${index}`}
                            id={`project-card-${index}`}
                            value={project}
                          /> : null
                          )) 
                      : dummyProjectsArr.map((project, index) => (
                          <ProjectCard
                            key={`dummy-${index}`}
                            id={`dummy-${index}`}
                            value={project}
                          />
                        ))}
                  </Col>
              </div>
        
      </Container>
  );
};

export default Project;