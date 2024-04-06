import React from "react";
import "./page.css";
import Navbar from "../Navbar/Navbar";
import Body from "../pdfRead/body";

const Page = () => {
  return (
    <div className="page">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="body">
        <Body />
      </div>
    </div>
  );
};

export default Page;
