import React, { useState, useRef, useLayoutEffect } from "react";
import { CopyBlock, hybrid } from "react-code-blocks";
import BubbleUI, { defaultOptions } from "react-bubble-ui";
import "react-bubble-ui/dist/index.css";
import companyData from "./companies";
import CompanyBubble from "./CompanyBubble";
import DummyBubble from "./DummyBubble";
import "./Bubbles.css"


export default function App(props) {

  const getStockBubbles = () => {
    return companyData.slice(0, 20).map((company, i) => {
      return <CompanyBubble {...company} key={i} />;
    });
  };
  const stockBubbles = getStockBubbles();

  const [options, setOptions] = useState({
    size: 170,
    minSize: 20,
    gutter: 16,
    provideProps: true,
    numCols: 5,
    fringeWidth: 220,
    yRadius: 130,
    xRadius: 300,
    cornerRadius: 100,
    showGuides: false,
    compact: false,
    gravitation: 5
  });



  return (
      <div className="bubbleContainer"> 
          <BubbleUI  options={options} className="bubbleUI">
            {stockBubbles}
          </BubbleUI>
      </div>

      
  );
}

/*
size: 200,
    minSize: 20,
    gutter: 16.5,
    provideProps: false,
    numCols: 6,
    fringeWidth: 100,
    yRadius: 200,
    xRadius: 200,
    cornerRadius: 100,
    showGuides: false,
    compact: false,
    gravitation: 0,
*/