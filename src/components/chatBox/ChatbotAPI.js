import axios from "axios";

const API = {
  GetChatbotResponse: async (pdfid, message) => {
    const apiUrl = "https://8f5c-14-139-241-214.ngrok-free.app/api/v1/chat";
    const token = localStorage.getItem("token");

    try {
      // Making a POST request to the API with the user's message
      const response = await axios.post(
        apiUrl,
        { pdf_id: pdfid, message: message },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      return response.data.response;
    } catch (error) {
      console.error("There was a problem with the Axios operation:", error);

      return "Sorry, there was an error processing your request.";
    }
  },
};

export default API;
