import React from "react";
import {
  FaGithub,
  FaDev,
  FaLinkedin,
  FaQuora,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaEnvelope
} from "react-icons/fa";
const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Muhammad Ahmad. All Rights Reserved.`,
  author: {
    name: "Muhammad Ahmad",
    accounts: [
      {
        url: "https://github.com/ShravanRavi2002",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />,
        base: "black"
      },
      {
        url: "https://linkedin.com/in/shravan-ravi",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />,
        base: "#0e76a8;"
      },
      {
        url: "mailto:ravi.shravan@gmail.com",
        label: "Email Account",
        type: "green",
        icon: <FaEnvelope />,
        base: "green"
      },


      {
        url: "https://www.facebook.com/shravan.ravi.16547/",
        label: "Facebook Account",
        type: "blue",
        icon: <FaFacebook />,
        base: "#3b5998"
      },
      {
        url: "https://www.instagram.com/shravan_ravi2002/",
        label: "Instagram Account",
        type: "red",
        icon: <FaInstagram />,
        base: "red"
      },
    ]
  }
};

export default siteConfig;