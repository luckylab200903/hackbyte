import React, { useEffect, useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "./PdfViewer.css";

const PdfViewer = () => {
  const [pdfUrl, setPdfUrl] = useState(null);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  useEffect(() => {
    const fetchPdf = async () => {
      const pdf =
        "https://www.aeee.in/wp-content/uploads/2020/08/Sample-pdf.pdf";
      setPdfUrl(pdf);
    };

    fetchPdf();
  }, [pdfUrl]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const fileUrl = URL.createObjectURL(file);
    console.log(fileUrl);
    setPdfUrl(fileUrl);
  };

  return (
    <div className="pdf-viewer-container">
      {/* <input type="file" accept=".pdf" onChange={handleFileChange} /> */}
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
