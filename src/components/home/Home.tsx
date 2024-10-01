import React from "react";
import "./Home.css"; // Add styles for the home section here
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import DownloadIcon from "@mui/icons-material/Download"; // Import a download icon for the button

import profilePicture from "../../assets/pictures/profilePicture.png"; // Import your profile image
import Resum2025 from "../../assets/documents/Shaker_Ahmed_Resume_2025.pdf";
function Home() {
  return (
    <section id="home" className="home_section">
      <div className="profile_card">
        {/* Left section with profile picture, name, and title */}
        <div className="profile_left">
          <img src={profilePicture} alt="Profile" className="profile_picture" />
          <h1 className="profile_name">Shaker Ahmed</h1>
          <h2 className="profile_title">Software Engineer - CS Student</h2>
        </div>

        {/* Social Links */}
        <div className="social_links">
          <a
            href="https://www.linkedin.com/in/shakerahmed"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon className="social_icon" />
          </a>
          <a
            href="https://github.com/Kingshak03"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon className="social_icon" />
          </a>
          <a
            href="mailto:sahmed35@buffalo.edu"
            target="_blank"
            rel="noreferrer"
          >
            <EmailIcon className="social_icon" />
          </a>
        </div>

        {/* "My Resume" Button - Positioned in the top-right corner */}
        <a
          href={Resum2025} // Replace with the actual link to your resume file
          className="resume_button"
          target="_blank"
          download={"Shaker_Ahmed_Resume"}
          rel="noreferrer"
        >
          <DownloadIcon /> My Resume
        </a>
      </div>
    </section>
  );
}

export default Home;
