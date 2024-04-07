// Chatbot.js
import React, { useState, useEffect } from "react";

import BotMessage from "./BotMessage.jsx";
import UserMessage from "./UserMessage";
import Messages from "./Messages";
import Input from "./Input";
import API from "./ChatbotAPI.js";

import "./styles.css";
import { useParams } from "react-router-dom";

function Chatbot() {
  const { pdfid } = useParams();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function loadWelcomeMessage() {
      setMessages([
        <BotMessage key="0" fetchMessage={"Hello I am PDF Buddy"} />,
      ]);
    }
    loadWelcomeMessage();
  }, []);

  const send = async (text) => {
    const newMessages = messages.concat(
      <UserMessage key={messages.length + 1} text={text} />,
      <BotMessage
        key={messages.length + 2}
        fetchMessage={async () => await API.GetChatbotResponse(pdfid, text)}
      />
    );
    setMessages(newMessages);
  };

  return (
    <div className="chatbot">
      <Messages messages={messages} />
      <Input onSend={send} />
    </div>
  );
}

export default Chatbot;
