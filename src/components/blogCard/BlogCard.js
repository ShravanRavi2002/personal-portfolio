import React from "react";
import "./BlogCard.scss";
import {blogSection} from "../../portfolio";

function BoldedText( text, shouldBeBold, isDark ) {
  const textArray = text.split(shouldBeBold);
  return (
    <span className={isDark ? "small-dark" : "small"}>
      {textArray.map((item, index) => (
        <>
          {item}
          {index !== textArray.length - 1 && (
            <b>{shouldBeBold}</b>
          )}
        </>
      ))}
    </span>
);
}

export default function BlogCard({blog, isDark}) {
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
          href="#blog"
        >
            <h3 className={isDark ? "small-dark blog-title" : "blog-title"}>
              {blog.title}
            </h3>
          
          <p className={isDark ? "small-dark" : "small"}>
            {BoldedText(blog.description, blogSection.name, isDark)}
          </p>
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
        </a>
      </div>
    </div>
  );
}
