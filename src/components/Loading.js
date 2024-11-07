import React from "react";

function Loading() {
  const loadingStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "black",
    color: "white",
    fontSize: "2rem",
    fontFamily: "Arial, sans-serif",
  };

  // Style for individual dots
  const dotStyle = {
    display: "inline-block",
    margin: "0 5px",
    animation: "pulse 1.5s infinite ease-in-out",
  };

  // Animation for each dot
  const dotAnimation = {
    "@keyframes pulse": {
      "0%": { opacity: 0 },
      "50%": { opacity: 1 },
      "100%": { opacity: 0 },
    },
  };

  return (
    <>
      <style>
        {`
          @keyframes pulse {
            0% { opacity: 0; }
            50% { opacity: 1; }
            100% { opacity: 0; }
          }
        `}
      </style>
      <div style={loadingStyle}>
        <span style={{ ...dotStyle, animationDelay: "0s" }}>.</span>
        <span style={{ ...dotStyle, animationDelay: "0.3s" }}>.</span>
        <span style={{ ...dotStyle, animationDelay: "0.6s" }}>.</span>
      </div>
    </>
  );
}

export default Loading;
