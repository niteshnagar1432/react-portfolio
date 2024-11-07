import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Projects from "../components/Projects";

function MyProject() {
  return (
    <>
      <Header />
      <div className="blank"></div>
      <Projects />
      <div className="blank"></div>
      <Footer />
    </>
  );
}

export default MyProject;
