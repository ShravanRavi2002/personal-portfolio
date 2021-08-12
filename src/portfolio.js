import emoji from "react-easy-emoji";

import googlelogo from "./assets/img/icons/common/google.svg";
import github from "./assets/img/icons/common/github.svg";
import airbnb from "./assets/img/icons/common/airbnbLogo.png";
import fidelity from "./assets/img/icons/common/Fidelity.png";
import review from "./assets/img/icons/common/Review.png";
import alois from "./assets/img/icons/common/Alois.png";
import moody from "./assets/img/icons/common/Wang.png"
import larg from "./assets/img/icons/common/LARG.png"
import freetail from "./assets/img/icons/common/Freetail.png"
import chartfleau from "./assets/img/icons/common/chartfleau.png"
import GTP from "./assets/img/icons/common/GTP.png"
import openPHR from "./assets/img/icons/common/openphr.png"
export const greetings = {
	name: "Hanzla Tauqeer",
	title: "Hi all, I'm Hanzla",
	description:
		"A passionate Full Stack Web Developer and Mobile App Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Python / Django / Flask and some other cool libraries and frameworks and Cross Platform Mobile Apps With Flutter.",
	resumeLink: "",
};

export const openSource = {
	githubUserName: "ShravanRavi2002",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/1hanzla100",
	instagram: "https://www.instagram.com/1hanzla100",
	twitter: "https://twitter.com/1hanzla100",
	github: "https://github.com/1hanzla100",
	linkedin: "https://www.linkedin.com/in/hanzla-tauqeer-0869281ba/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	skills: [
		emoji(
			"⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
		),
		emoji(
			"⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"
		),
		emoji(
			"⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
		),
	],
}

export const educationInfo = {
	display: true, // Set false to hide this section, defaults to true
	schools: [

	  {
		schoolName: "University of Texas at Austin",
		logo: require("./assets/images/utLogo.png"),
		subHeader: "Bachelor of Science in Computer Science",
		duration: "August 2020 - May 2024",
		desc: "GPA: 4.00", 
		coursework: "Data Structures, Computer Architecture, Operating Systems, Linear Algebra, Probability and Statstics, Discrete Math, Multivariable Caculus"
	  }
	]
  };

export const blogSection = {
	title: "Publications",
	subtitle:
	  "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  
	blogs: [
	  {
		url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
		title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
		description:
		  "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
	  },
	  {
		url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
		title: "Why REACT is The Best?",
		description:
		  "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
	  },
	  {
		url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
		title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
		description:
		  "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
	  },
	  {
		url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
		title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
		description:
		  "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
	  },
	],
	display: true // Set false to hide this section, defaults to true
  };

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "70",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const experience = [
	{
		role: "Software Engineering Intern",
		company: "Fidelity",
		companylogo: fidelity,
		date: "June 2021 – August 2021",
		desc: "Developed machine learning algorithm to recommend a suite of Fidelity apps based on customer interaction data and augmented the Fidelity market quote UI/UX",
		descBullets: [
			"Trained K-means clustering algorithm using scikit learn, designed mySQL database, wrote bash script to upload CSV data to SQL server, built Flask API to access model from Fidelity website, and developed project homepage using HTML and Bootstrap  ",
			"Developed new short interest data components using Angular, Javascript, and CSS",
		],
		link: "https://www.fidelity.com/"
	},
	{
		role: "Technical Project Manager",
		company: "ReView",
		companylogo: review,
		date: "September 2020 – Present",
		desc: "Lead team of 4 engineers and 1 designer in Austin-based start-up focused on reducing the contamination of recyling through the application of computer vision in mobile apps",
		descBullets: [
			"Developed mobile app in Javascript/Typescript and Python using React-Native, Firebase, and Tensorflow (previously PyTorch, but modified for easier tech stack integration)",
			"Built Convolution Neural Network in PyTorch using Stanford’s Recyclable dataset which contains 1000 images (very clean and unbalanced) that reached 68% validation accuracy,then used transfer learning using MobileNet to reach 85% validation accuracy. Currently expanding model capabilities using Amazon Sagemaker",
		],
		link: "https://www.reviewtechnology.ai/"
	},
	{
		role: "Chief Technical Officer",
		company: "Alois Software",
		companylogo: alois,
		date: "March 2020 - Present",
		desc: "Launching start-up focused on building a social media platform to support Alzheimer's caregivers",
		descBullets: [
			"Designing and developing mobile app along with necessary deep learning model using Figma, React-Native, and Tensorflow",
			"Built and designed business website in Javascript using Next.js",
		],
		link: "https://aloissoftware.com/"
	},

	{
		role: "Engineering Fellow",
		company: "OpenPHR",
		companylogo: openPHR,
		date: "June 2021 – Present",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		link: "https://www.openphr.org/"
	},
	

	{
		role: "Undergraduate Researcher",
		company: "Speech Disorders & Technology Lab",
		companylogo: moody,
		color: "#BF5600",
		date: "December 2020 – Present",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},

	{
		role: "Undergraduate Researcher",
		company: "Learning Agents Research Group",
		color: "#454545",
		companylogo: larg,
		date: "January 2020 – Present",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
	{
		role: "Tech Team Member",
		company: "Freetail Hackers",
		color: "#511FAE",
		companylogo: freetail,
		date: "January 2020 – Present",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
	{
		role: "Full-Stack Developer",
		company: "Chartfleu",
		color: "#8319D3",
		companylogo: chartfleau,
		date: "November 2020 – February 2021",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},

	{
		role: "General Partner",
		company: "Genius Test Prep",
		companylogo: GTP,
		date: "May 2019 – Present",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
];

export const projects = [
	{
		name: "lorem ipsum",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		link: "https://example.com",
	},
	{
		name: "lorem ipsum",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		github: "https://github.com/1hanzla100",
	},
	{
		name: "lorem ipsum",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		github: "https://github.com/1hanzla100",
		link: "https://example.com",
	},
];

export const feedbacks = [
	{
		name: "Hassan Mehmood",
		feedback:
			"We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Hanzla tauqeer has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose hanzla web developer services for u.",
	},
	{
		name: "Maheen Altaf",
		feedback:
			"the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job",
	},
];
