import React from 'react'
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import Config from "./Config";
import "./pages.css";

const FeedBack = () => {
  return (
    <Chatbot
      className="chatbot"
      config={Config}
      messageParser={MessageParser}
      actionProvider={ActionProvider}
    />
  )
}

export default FeedBack