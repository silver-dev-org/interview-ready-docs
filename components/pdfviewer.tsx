import React, { useEffect } from "react";

const PDFViewer = () => {
  const resizeEmbed = () => {
    const embed = document.getElementById("pdfEmbed");
    if (embed) {
      const windowHeight = window.innerHeight;
      embed.style.height = `${windowHeight}px`;
    }
  };

  useEffect(() => {
    resizeEmbed();
    window.addEventListener("resize", resizeEmbed);
    return () => window.removeEventListener("resize", resizeEmbed);
  }, []);

  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <embed
        id="pdfEmbed"
        src="/resources/victorvigon.pdf"
        type="application/pdf"
        width="100%"
        style={{ border: "none", height: "100%" }}
      />
    </div>
  );
};

export default PDFViewer;
