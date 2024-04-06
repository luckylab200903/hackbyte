// ChatbotAPI.js
import axios from "axios";

const API_BASE_URL = "https://8f5c-14-139-241-214.ngrok-free.app";
export const createChatSession = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/v1/chatsession`);
    return response.data;
  } catch (error) {
    console.error("Error creating chat session:", error);
    throw error;
  }
};

export const sendMessage = async (sessionId, message) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/v1/chat`, {
      message,
    });
    return response.data;
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
};

export const getMessages = async (sessionId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/v1/chatsession`);
    return response.data;
  } catch (error) {
    console.error("Error fetching messages:", error);
    throw error;
  }
};
