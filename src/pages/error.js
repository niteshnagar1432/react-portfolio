import React from "react";

function Error() {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    color: "#333",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f8f8f8",
  };

  const headingStyle = {
    fontSize: "4rem",
    fontWeight: "bold",
    color: "#ff6347",
  };

  const messageStyle = {
    fontSize: "1.5rem",
    color: "#666",
  };

  const buttonStyle = {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#ff6347",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>404</h1>
      <p style={messageStyle}>
        Oops! The page you’re looking for was not found.
      </p>
      <button style={buttonStyle} onClick={() => (window.location.href = "/")}>
        Go Back Home
      </button>
    </div>
  );
}

export default Error;
