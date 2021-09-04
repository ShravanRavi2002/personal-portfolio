import emoji from "react-easy-emoji";


import fidelity from "./assets/img/icons/common/Fidelity.jpg";
import review from "./assets/img/icons/common/Review.jpg";
import alois from "./assets/img/icons/common/Alois.jpg";
import moody from "./assets/img/icons/common/Wang.jpg"
import larg from "./assets/img/icons/common/LARG.jpg"
import freetail from "./assets/img/icons/common/Freetail.jpg"
import chartfleau from "./assets/img/icons/common/chartfleau.jpg"
import GTP from "./assets/img/icons/common/GTP.jpg"
import openPHR from "./assets/img/icons/common/openphr.jpg"
import CHASE from "./assets/papers/IEEE_CHASE.pdf"
import MOTOR from "./assets/papers/Motor_Speech.pdf"
import RESUME from "./assets/Shravan_Ravi_Resume.pdf"
import transcript from "./assets/Unoffical Transcript.pdf"
export const greetings = {
	name: "Hanzla Tauqeer",
	title: "Hi all, I'm Hanzla",
	description:
		"I'm a student, researcher, and entreprener at UT Austin, studying computer science. My interests lie in full-stack development, machine learning, and robotics. I am entering my sophmore year and am excited for the opprtunities to come! ",
	resumeLink: RESUME,
};

export const openSource = {
	githubUserName: "ShravanRavi2002",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/shravan.ravi.16547/",
	instagram: "https://www.instagram.com/shravan_ravi2002/",
	email: "mailto:shravan.ravi@utexas.edu",
	github: "https://github.com/ShravanRavi2002",
	linkedin: "https://linkedin.com/in/shravan-ravi",
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
		coursework: "Operating Systems, Computer Architecture, Data Structures, Linear Algebra, Intro to Probability and Statistics, Discrete Mathematics, Multivariable Calculus",
		transcript: transcript,
	  }
	]
  };

export const blogSection = {
	title: "Publications",
	name: "Shravan Ravi",
	subtitle:
	  "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  
	blogs: [
	  {
		url: CHASE,
		title: "Crowdsourcing Personalized Medicine: Applying Machine Learning to Unstructured Social Media Data to Improve Breast Cancer Patient Outcomes",
		description: "Gregory Falco, Shravan Ravi, Modadeoluwa Ogunmuyiwa, and Caleb Li",
		conference: "IEEE/ACM Conference on Connected Health Applications, Systems, and Engineering Technologies",
		submission: "July 16, 2021",
	  },
	  {
		url: MOTOR,
		title: "A Wearable Electromagnetic Articulograph (EMA) for Silent Speech Interface",
		description: "Shravan Ravi, Beiming Cao, Nordine Sebkhi, Arpan Bhavsar, Omer T. Inan, and Jun Wang", 
		conference: "Madonna Motor Speech Conference ",
		submission: "August 31, 2021",
	  },
	  {
		url: null,
		title: "CV-APPLD: Computer Vision based Adaptive Planner Parameter Learning from Demonstration",
		description: "Shravan Ravi, Shreyas Satewar, Gary Wang, Xuesu Xiao, and Peter Stone",
		conference: "IEEE International Conference on Robotics and Automation",
		submission: "September 14, 2021",
	  },
	  {
		url: null,
		title: "Near Real Time Involuntary Human Behavior Decoding for Robot Hallway Navigation",
		description: "Shreyas Satewar, Shravan Ravi, Alekhya Kuchimanchi, Justin Hart, and Peter Stone",
		conference: "ACM/IEEE International Conference on Human-Robot Interaction",
		submission: "October 1, 2021",
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
		company: "Fidelity Investments",
		companylogo: fidelity,
		color: "#76A923 ",
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
		desc: "Led team of 4 engineers and 1 designer in Austin-based start-up focused on reducing the contamination of recyling through the application of computer vision in mobile apps",
		descBullets: [
			"Developed mobile app in Javascript/Typescript and Python using React-Native, Firebase, and Tensorflow (previously PyTorch, but modified for easier tech stack integration)",
			"Built convolution neural network (CNN) in PyTorch using Stanford’s Recyclable dataset which contains 1000 images (very clean and unbalanced) that reached 68% validation accuracy,then used transfer learning using MobileNet to reach 85% validation accuracy. Currently expanding model capabilities using Amazon Sagemaker",
		],
		link: "https://www.reviewtechnology.ai/"
	},
	{
		role: "Co-Founder & Lead Developer",
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
		desc: "Researched and developed deep learning algorithms to empower patients to be well-informed of potential treatment options for non-profit under the mentorship of Johns Hopkins professor and Facebook strategic investment analyst",
		descBullets: [
			"Developed proprietary sentiment analysis algorithm and k-means clustering models to cohort breast cancer patient social media data",
			"Co-authored paper outlining preliminary algorithm efficacy - Submitted to IEEE/ACM Conference on Connected Health Applications, Systems, and Engineering Technologies (CHASE) 2021 - and co-authoring Emerson Health Collective research grant proposal",
		],
		link: "https://www.openphr.org/"
	},
	

	{
		role: "Undergraduate Researcher",
		company: "Speech Disorders & Technology Lab",
		companylogo: moody,
		color: "#BF5600",
		date: "December 2020 – Present",
		desc: "Researching deep learning applications for articulation-to-speech synthesis and neural activity decoding to develop more advanced silent speech interfaces under the supervision of Professor Jun Wang at UT Austin",
		descBullets: [
			"Trained support vector machine (SVM), deep neural network (DNN), and convolutional neural network (CNN) for near real time decoding of articulatory data to demonstrate the efficacy of new wearable electromagnetic articulograph (EMA) system",
			"Authored paper regarding promising model results (SVM: 90.85%, DNN: 88.00%, and CNN: 90.13% cross validation accuracies) and submitted to Madonna Rehabilitation Hospitals 2022 Motor Speech Conference",
		],
		link: "https://slhs.utexas.edu/research/wang-lab/home"
	},

	{
		role: "Undergraduate Researcher",
		company: "Learning Agents Research Group",
		color: "#454545",
		companylogo: larg,
		date: "January 2021 – Present",
		desc: "Researching dynamic robot navigation parameter configuration under Dr. Xuesu Xiao and human behavior decoding for robot navigation to better human-robot interaction under Professor Justin Hart at UT Austin",
		descBullets: [
			"Developed convolutional neural network - deep neural network (CNN-DNN) model to decode RGB camera and lidar data for adaptive planner parameter learning (APPL). Co-authoring paper for submission to IEEE International Conference on Robotics and Automation (ICRA)",
			"Configuring system of Azure Kinect cameras to extract person joint movement in hallway and developing auto-encoder to extract and interpret implicit human actions. Co-authoring paper for submission to ACM/IEEE International Conference on Human-Robot Interaction (HRI)",
		],
		link: "https://www.cs.utexas.edu/~larg/index.php/Learning_Agents_Research_Group"
	}, 
	{
		role: "Tech Team Member",
		company: "Freetail Hackers",
		color: "#511FAE",
		companylogo: freetail,
		date: "January 2021 – Present",
		desc: "Member of UT Austin hackathon organizer team, responsible for development",
		descBullets: [
			"Built hackathon guide for beginner coders with boilerplate projects for a variety of languages and frameworks",
			"Developed chat application for HackTX hackathon website with Javascript, HTML, and CSS using React, MongoDB and socket.io",
		],
		link: "https://freetailhackers.com/"
	},
	{
		role: "Full-Stack Developer",
		company: "Chartfleau",
		color: "#8319D3",
		companylogo: chartfleau,
		date: "November 2020 – February 2021",
		desc: "Contributed to website with graphics depicting a variety of fincancial market information",
		descBullets: [
			"Researched stock and cryptocurrency market trends under the mentorship of graduates supervisor from RBC Capital Markets",
			"Created visuals to support findings Nivo using Javascript and React",
		],
		link: "https://www.chartfleau.com/"
	},

	{
		role: "General Partner",
		company: "Genius Test Prep",
		companylogo: GTP,
		date: "May 2019 – Present",
		desc: "Co-founded test prep service, created market strategy, designed and built website, managed financials, and developed curriculum",
		descBullets: [
			"Expanded business to incorporate college admissions and emphasize mission of supporting underprivileged students in the greater Austin area",
			"Employed and managed 2 tutors. Aproximately $10,000 in annual recurring revenue  ",
		],
		link: "https://www.geniustestprepatx.com/"
	},
];

export const projects = [
	{
		name: "unmasking-congress",
		demo: null
	},
	{
		name: "personal-portfolio",
		demo: null
	},
	{
		name: "food-scrapes",
		demo: "https://www.youtube.com/watch?v=qVqoN-nQntw"
	},
	{
		name: "planedemic",
		demo: "https://www.youtube.com/watch?v=d-fTVRaD4ns"
	}
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
