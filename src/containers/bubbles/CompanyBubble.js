import React from "react";
import "./Bubbles.css"
export default function CompanyBubble(props) {
  // console.log(props);
  return (
    <div onClick={() => window.open(props.docs)}
      style={{
        backgroundColor: props.backgroundColor + "d0",
      }}
      className={"companyBubble"}
    >
      {true ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            transition: "opacity 0.1s ease",
            opacity: props.bubbleSize > 50 ? 1 : 0,
            pointerEvents: "none",
          }}
        >
          <img
            src={props.image}
            alt=""
            style={{
              // maxWidth: 50,
              maxHeight: 50,
              marginBottom: 10,
              display: "block"
            }}
          ></img>
          <p
            style={{
              color: props.textColor,
              fontSize: 16,
              marginBottom: 6,
              fontWeight: "bold",
              maxWidth: 150,
              textAlign: "center",
            }}
          >
            {props.name}
          </p>
          {/* <p
            style={{
              color: props.textColor,
              fontSize: 14,
              marginBottom: 5,
              maxWidth: 100,
              opacity: 0.5,
            }}
          >
            {props.symbol}
          </p> */}
        </div>
      ) : null}
    </div>
  );
}