import React from "react";
import "./body.css";
import Sidebar from "../Sidebar/Sidebar";

import ChatR from "../ChatAndRead/ChatR";
import Chatbox from "../chatBox/ChatBot";

const Body = () => {
  return (
    <div className="bodyname">
      <div className="sidethumbnails">
        <Sidebar />
      </div>
      <div className="pageContent">
        <ChatR />
      </div>
    </div>
  );
};

export default Body;
