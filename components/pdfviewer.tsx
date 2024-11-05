import React, { useEffect } from "react";

const PDFViewer = () => {
  const resizeIframe = () => {
    const iframe = document.getElementById("pdfIframe");
    if (iframe) {
      const windowHeight = window.innerHeight;
      iframe.style.height = `${windowHeight}px`;
    }
  };

  useEffect(() => {
    resizeIframe();
    window.addEventListener("resize", resizeIframe);
    return () => window.removeEventListener("resize", resizeIframe);
  }, []);

  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <iframe
        id="pdfIframe"
        src="/resources/victorvigon.pdf"
        width="100%"
        style={{ border: "none", height: "100%" }}
        title="PDF Viewer"
      />
    </div>
  );
};

export default PDFViewer;
