import React, { useState } from "react";

// Reusable Card component for Projects
function ProjectCard({ title, image, description, demoUrl }) {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1f1f1f",
    borderRadius: "8px",
    boxShadow: isHovered
      ? "0 8px 16px rgba(0, 0, 0, 0.5)"
      : "0 4px 8px rgba(0, 0, 0, 0.3)", // Shadow changes on hover
    padding: "20px",
    textAlign: "center",
    transition:
      "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease", // Smooth hover transition
    cursor: "pointer",
    transform: isHovered ? "scale(1.05)" : "scale(1)",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    marginBottom: "15px",
  };

  const headingStyle = {
    fontSize: "1.8rem",
    fontWeight: "bold",
    color: "#e0e0e0",
    marginBottom: "10px",
  };

  const descriptionStyle = {
    fontSize: "1rem",
    color: "#a0a0a0",
    marginBottom: "20px",
  };

  const demoButtonStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    textDecoration: "none",
    fontSize: "1rem",
    transition: "background-color 0.3s ease",
  };

  const demoButtonHoverStyle = {
    backgroundColor: "#0056b3",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {image && <img src={image} alt={title} style={imageStyle} />}
      <h5 style={headingStyle}>{title}</h5>
      <p style={descriptionStyle}>{description}</p>
      <a
        href={demoUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          ...demoButtonStyle,
          ...(isHovered ? demoButtonHoverStyle : {}),
        }}
      >
        View Demo
      </a>
    </div>
  );
}

// Projects component to display a list of projects
function Projects() {
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", // 3 cards per row
    gap: "30px", // More spacing between cards
    marginTop: "50px",
    padding: "20px",
    backgroundColor: "#121212",
    color: "#e0e0e0",
  };

  const projectData = [
    {
      title: "Project 1: E-Commerce Platform",
      image: "https://via.placeholder.com/500x300.png?text=E-Commerce+Project", // Example image URL
      description:
        "An online store platform where users can buy and sell products. Features include product management, user authentication, and secure payments.",
      demoUrl: "https://www.example.com/project1", // Link to demo
    },
    {
      title: "Project 2: Social Media App",
      image: "https://via.placeholder.com/500x300.png?text=Social+Media+App", // Example image URL
      description:
        "A social media platform with messaging, notifications, and profile customization. Focuses on real-time interactions and user engagement.",
      demoUrl: "https://www.example.com/project2", // Link to demo
    },
    {
      title: "Project 3: Video Streaming Platform",
      image:
        "https://via.placeholder.com/500x300.png?text=Video+Streaming+Platform", // Example image URL
      description:
        "A platform to stream movies, TV shows, and live events. Includes features like video recommendations, user subscriptions, and content management.",
      demoUrl: "https://www.example.com/project3", // Link to demo
    },
    {
      title: "Project 4: Real-Time Chat Application",
      image: "https://via.placeholder.com/500x300.png?text=Real-Time+Chat+App", // Example image URL
      description:
        "A real-time chat application with group chat and private messaging features. Integrates WebRTC for video and voice calls.",
      demoUrl: "https://www.example.com/project4", // Link to demo
    },
    {
      title: "Project 5: Blogging Platform",
      image: "https://via.placeholder.com/500x300.png?text=Blogging+Platform", // Example image URL
      description:
        "A blogging platform for writers and content creators. Features include content creation, user profiles, and comment sections.",
      demoUrl: "https://www.example.com/project5", // Link to demo
    },
  ];

  return (
    <div style={{ background: "#121212" }}>
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h2 style={{ color: "#e0e0e0", paddingTop: "30px" }}>
          Recent Projects
        </h2>
      </div>

      <div style={containerStyle}>
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            image={project.image}
            description={project.description}
            demoUrl={project.demoUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
