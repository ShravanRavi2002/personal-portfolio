import React from "react";
import "./BlogCard.scss";
import {blogSection} from "../../portfolio";
import GreetingLottie from "../../components/DisplayLottie";
import construction from "../../assets/lottie/construction.json"
import {Fade} from "react-reveal";

function BoldedText( text, shouldBeBold, isDark ) {
  const textArray = text.split(shouldBeBold);
  console.log(isDark)
  return (
    <h3 className={"blog-description"}>
      {textArray.map((item, index) => (
        <>
          {item}
          {index !== textArray.length - 1 && (
            <b>{shouldBeBold}</b>
          )}
        </>
      ))}
    </h3>
);
}

function whiteout( text, shouldBeBlack, isDark ) {
  const textArray = text.split(shouldBeBold);
  console.log(isDark)
  return (
    <h3 className={"blog-description"}>
      {textArray.map((item, index) => (
        <>
          {item}
          {index !== textArray.length - 1 && (
            <b>{shouldBeBold}</b>
          )}
        </>
      ))}
    </h3>
);
}

export default function BlogCard({blog, isDark}) {
  isDark=false;
  function openUrlInNewTab(url) {
    if (url !== undefined && url !== null ) {
      var win = window.open(url, "_blank");
      win.focus();
    }
  }

  return (
    <Fade left duration={1000} distance="40px">
              <div onClick={() => openUrlInNewTab(blog.url)}>
          <div className={isDark ? "blog-container dark-mode" : "blog-container"}>
            <a
              className={
                isDark ? "dark-mode blog-card blog-card-shadow" : "blog-card"
              }
            >
                <h3 className={blog.finished ? "blog-title" : "blog-upcoming-title"}>
                  {blog.title}
                </h3>
              {console.log(isDark)}
              {BoldedText(blog.description, blogSection.name, isDark)}
              {blog.finished ? null :  
              <div className="blog-construction">
                  <GreetingLottie animationData={construction} />
              </div>
              
              }
              <h3 className="blog-conference">{blog.conference}</h3>
              {
                blog.finished ? <h3 className="blog-submission">{`Submitted on: ${blog.submission}`}</h3> : <h3 className="blog-submission">{`Submitting on: ${blog.submission}`}</h3>    
              }          
              
              
              <div className="go-corner">
                {/* <div className="go-arrow"><i className="ni ni-archive-2 text-info" /></div> */}
                <div className="go-arrow">
                    <i className="fa fa-book" />
                </div>
                
              </div>
            </a>
          </div>
        </div>
    </Fade>
    
  );
}
