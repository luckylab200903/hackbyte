import React from "react";
import "./ChatR.css";
import Chatbox from "../chatBox/ChatBot";
import ReactPdf from "../ReactPDFReader/ReactPdf";

const ChatR = () => {
  return (
    <div className="ChatR">
      <div className="ReactPdf">
        <ReactPdf />
      </div>
    </div>
  );
};

export default ChatR;
