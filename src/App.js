import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./stylesheets/style.css";
import "./stylesheets/responsive.css";
import Loading from "./components/Loading";
import Contact from "./pages/contact";
import About from "./pages/about";
import MyProject from "./pages/MyProject";

// Lazy load the components
const Home = React.lazy(() => import("./pages"));
const Error = React.lazy(() => import("./pages/error"));

function App() {
  // Block right-click and dev tools
  useEffect(() => {
    // Disable right-click
    const preventRightClick = (e) => {
      e.preventDefault();
    };

    // Prevent opening dev tools by disabling F12 key and right-click
    const preventDevTools = () => {
      window.addEventListener("contextmenu", preventRightClick); // Disable right-click
      window.addEventListener("keydown", (e) => {
        if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
          e.preventDefault(); // Disable F12 (Developer Tools)
        }
      });
    };

    // Invoke on component mount
    preventDevTools();

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("contextmenu", preventRightClick);
      window.removeEventListener("keydown", preventDevTools);
    };
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<MyProject />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
