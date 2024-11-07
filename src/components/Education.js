import React, { useState } from "react";
import {
  FaGraduationCap,
  FaUniversity,
  FaBriefcase,
  FaChalkboardTeacher,
} from "react-icons/fa";

// Reusable Card component
function Card({ icon, title, subTitle, duration, description, iconColor }) {
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

  const iconStyle = {
    fontSize: "3rem",
    color: iconColor || "#007bff", // Default to blue icon
    marginBottom: "10px",
  };

  const headingStyle = {
    fontSize: "1.8rem",
    fontWeight: "bold",
    color: "#e0e0e0",
    marginBottom: "10px",
  };

  const subHeadingStyle = {
    fontSize: "1rem",
    color: "#a0a0a0",
    marginBottom: "20px",
  };

  const detailStyle = {
    fontSize: "1rem",
    color: "#d0d0d0",
    marginBottom: "15px",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={title} // Added aria-label for accessibility
    >
      {icon && <div style={iconStyle}>{icon}</div>}
      <h5 style={headingStyle}>{title}</h5>
      <p style={subHeadingStyle}>{subTitle}</p>
      <p style={detailStyle}>{duration}</p>
      <p style={detailStyle}>{description || "No description available"}</p>
    </div>
  );
}

function Education() {
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", // 3 cards per row
    gap: "30px", // More spacing between cards
    marginTop: "50px",
    padding: "20px",
    backgroundColor: "#121212",
    color: "#e0e0e0",
  };

  const educationData = [
    {
      icon: <FaGraduationCap />,
      title: "10th Grade",
      subTitle: "Saraswati Shishu Vidya Mandir High School Khujner",
      duration: "2016 - 2017",
      description:
        "Completed 10th grade with a focus on Science and Mathematics.",
      iconColor: "#007bff",
    },
    {
      icon: <FaGraduationCap />,
      title: "12th Grade",
      subTitle: "GOVT.HSS GANDHI PACHORE",
      duration: "2018 - 2019",
      description:
        "Completed 12th grade with a focus on Computer Science and Physics.",
      iconColor: "#007bff",
    },
    {
      icon: <FaGraduationCap />,
      title: "B.Tech in Computer Science",
      subTitle: "RGPV University ( Bhopal )",
      duration: "06/2020 - 06/2024",
      description:
        "Pursuing a B.Tech in Computer Science with a focus on software development, algorithms, and full-stack technologies.",
      iconColor: "#007bff",
    },
    {
      icon: <FaUniversity />,
      title: "Master's in Computer Science (Pursuing)",
      subTitle: "RGPV University ( Bhopal )",
      duration: "Expected 2026",
      description:
        "Planning to pursue a Master's degree in Computer Science with a focus on advanced topics like AI, machine learning, and data science.",
      iconColor: "#ff9900", // Adjusted icon color
    },
  ];

  const experienceData = [
    {
      icon: <FaBriefcase />,
      title: "Employee",
      subTitle: "Softseekers Infotech Pvt Ltd",
      duration: "12/2023 - Present",
      description: "Bhopal, India",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Intern",
      subTitle: "LEADZEN Private LTD",
      duration: "03/2023 - 09/2023",
      description: "Mumbai, India",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Intern",
      subTitle: "CRTD Private Technology",
      duration: "07/2022 - 10/2022",
      description: "Bhopal, India",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Intern",
      subTitle: "SUVIDHA FOUNDATION",
      duration: "06/2022 - 07/2022",
      description: "Nagpur, India",
    },
  ];

  return (
    <div style={{ background: "#121212" }}>
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h2 style={{ color: "#e0e0e0", paddingTop: "30px" }}>Education</h2>
      </div>

      <div style={containerStyle}>
        {educationData.map((item, index) => (
          <Card
            key={index}
            icon={item.icon}
            title={item.title}
            subTitle={item.subTitle}
            duration={item.duration}
            description={item.description}
            iconColor={item.iconColor}
          />
        ))}
      </div>

      <div
        style={{ textAlign: "center", marginTop: "50px", marginBottom: "30px" }}
      >
        <h2 style={{ color: "#e0e0e0" }}>Experience</h2>
      </div>

      <div style={containerStyle}>
        {experienceData.map((item, index) => (
          <Card
            key={index}
            icon={item.icon}
            title={item.title}
            subTitle={item.subTitle}
            duration={item.duration}
            description={item.description}
            iconColor="#ff9900"
          />
        ))}
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "50px",
          paddingBottom: "50px",
        }}
      >
        <h3 style={{ color: "#e0e0e0", marginBottom: "30px" }}>
          Core Qualifications & Technical Skills
        </h3>
        <ul style={{ textAlign: "left", margin: "0 auto", maxWidth: "800px" }}>
          <li style={{ color: "#fff" }}>
            Designed and implemented web applications using the MERN stack
            (MongoDB, Express.js, React.js, Node.js) for various clients.
          </li>
          <li style={{ color: "#fff" }}>
            Developed and integrated RESTful APIs with third-party services,
            enhancing the functionality of applications.
          </li>
          <li style={{ color: "#fff" }}>
            Managed and optimized MongoDB databases for scalable applications.
          </li>
          <li style={{ color: "#fff" }}>
            Hands-on experience in HTML, CSS, and JavaScript for web
            development.
          </li>
          <li style={{ color: "#fff" }}>
            Ensured responsive design principles for cross-device compatibility.
          </li>
          <li style={{ color: "#fff" }}>
            Troubleshot and debugged software, minimizing errors and downtime.
          </li>
          <li style={{ color: "#fff" }}>
            Wrote clean, maintainable code for functional and sustainable web
            applications.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Education;
