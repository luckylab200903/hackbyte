import React, { useEffect, useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "./PdfViewer.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const PdfViewer = () => {
  const [pdfUrl, setPdfUrl] = useState(null);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const { pdfid } = useParams();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found in localStorage.");
      return;
    }
    console.log(token);

    const fetchPdf = async (pdfid) => {
      try {
        const response = await axios.post(
          "https://bb7c-14-139-241-214.ngrok-free.app/api/v1/pdf",
          { pdf_id: pdfid }, // Ensure this matches the server's expected parameter name
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );
        const pdfUrl = response.data.file_url;
        console.log("====================================");
        console.log(pdfUrl);
        console.log("====================================");
        console.log(response);
        setPdfUrl(pdfUrl);
      } catch (error) {
        console.error("Error fetching PDF URL:", error);
      }
    };

    fetchPdf(pdfid);

    // if (pdfid) {
    //   fetchPdf();
    // }
  }, [pdfid]);

  return (
    <div className="pdf-viewer-container">
      <Worker
        workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}
      >
        {pdfUrl ? (
          <Viewer fileUrl={pdfUrl} plugins={[defaultLayoutPluginInstance]} />
        ) : (
          <div>Loading PDF...</div>
        )}
      </Worker>
    </div>
  );
};

export default PdfViewer;
