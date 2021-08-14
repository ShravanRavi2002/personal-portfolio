import React from "react";
import "./BlogCard.scss";
import {blogSection} from "../../portfolio";
import GreetingLottie from "../../components/DisplayLottie";
import construction from "../../assets/lottie/construction.json"

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

export default function BlogCard({blog, isDark}) {
  isDark=false;
  function openUrlInNewTab(url) {
    if (url !== undefined) {
      var win = window.open(url, "_blank");
      win.focus();
    }
  }

  return (
    <div onClick={() => openUrlInNewTab(blog.url)}>
      <div className={isDark ? "blog-container dark-mode" : "blog-container"}>
        <a
          className={
            isDark ? "dark-mode blog-card blog-card-shadow" : "blog-card"
          }
        >
            <h3 className={isDark ? "small-dark blog-title" : "blog-title"}>
              {blog.title}
            </h3>
          {console.log(isDark)}
          {BoldedText(blog.description, blogSection.name, isDark)}
          {blog.finished ? null :  
          <div className="blog-construction">
              <GreetingLottie animationData={construction}  style={{maxWidth: "100%", maxHeight: "100%"}}/>
          </div>
          
          }
          <hr style={{width: "90%", justifyContent: "center", margin: "auto"}}></hr>
          <h3 className="blog-conference">{blog.conference}</h3>
          {
            blog.finished ? <h3 className="blog-submission">{`Submitted on: ${blog.submission}`}</h3> : <h3 className="blog-submission">{`Submitting on: ${blog.submission}`}</h3>    
          }          
          
          
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
        </a>
      </div>
    </div>
  );
}
