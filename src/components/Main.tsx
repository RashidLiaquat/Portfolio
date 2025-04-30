import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import img9 from '../assets/images/img9.png';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={img9} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/HRashidLiaquat" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/rashid-liaquat" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Rashid Liaquat</h1>
          <p> Senior Software Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/HRashidLiaquat" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/rashid-liaquat" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;