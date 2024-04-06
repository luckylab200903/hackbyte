// Chatbot.js
import React, { useState, useEffect } from "react";
import BotMessage from "./BotMessage.jsx";
import UserMessage from "./UserMessage";
import Messages from "./Messages";
import Input from "./Input";
import API from "./ChatbotAPI.js";

import "./styles.css";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [sessionId, setSessionId] = useState(null);

  useEffect(() => {
    async function loadWelcomeMessage() {
      const session = await API.createChatSession();
      setSessionId(session.id);

      const welcomeMessage = await API.sendMessage(session.id, "hi");
      setMessages([<BotMessage key="0" text={welcomeMessage.message} />]);
    }
    loadWelcomeMessage();
  }, []);

  const send = async (text) => {
    const newMessages = messages.concat(
      <UserMessage key={messages.length + 1} text={text} />
    );
    setMessages(newMessages);

    
    const botResponse = await API.sendMessage(sessionId, text);
    const updatedMessages = newMessages.concat(
      <BotMessage key={messages.length + 2} text={botResponse.message} />
    );
    setMessages(updatedMessages);
  };

  return (
    <div className="chatbot">
      <Messages messages={messages} />
      <Input onSend={send} />
    </div>
  );
}

export default Chatbot;
