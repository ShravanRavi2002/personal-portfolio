import React from "react";
import ReactDOM from "react-dom";

import Navigation from "./components/Navigation";
import Greetings from "./containers/Greetings";
import Skills from "./containers/Skills";
import Proficiency from "./containers/Proficiency";
import Education from "./containers/Education";
import Experience from "./containers/Experience";
import Project from "./containers/Project";
import GithubProfile from "./containers/GithubProfile";
import Feedbacks from "./containers/Feedbacks";
import Publications from "./containers/blogs/Blogs.jsx";
import "./containers/Skills.scss"
import Bubbles from "./containers/bubbles/Bubble"
import { Fade } from 'react-reveal';
import IconBubbles from "./containers/IconBubbles"

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/css/argon-design-system-react.css";

ReactDOM.render(
	<>
		<Navigation />
		<Greetings />
		<Skills />
		{/* <Proficiency /> */}
		{/* <Education /> */}
		<IconBubbles/>
		<Experience />
		<Project
          heading={"Hackathon Projects"}
          username={"ShravanRavi2002"}
          length={13}
          specfic={[]}
        />
		{/* <Feedbacks /> */}
		
		<Publications />
		<GithubProfile />
	</>,
	document.getElementById("root")
);
