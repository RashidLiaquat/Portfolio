import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import img10 from '../assets/images/img10.jpg';
import img11 from '../assets/images/img11.jpg';
import img12 from '../assets/images/img12.jpg';

const labelsFirst = [
    "Dot NET Core",
    "ASP.NET MVC",
    " REST API ",
    " C# ",
    " REST API ",
    "Microservices",
    "AngularJS",
    "Entity Framework",
    "jQuery",
    "PostgreSQL",
    "JavaScript",
    "SQL Server",
    "MySQL",
    "HTML",
    "Bootstrap",
    "CSS"
];

const labelsSecond = [
    "Microsoft Azure",
    "AWS",
    "Linux (Ubuntu, RHL)",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Ansible",
    "Git",
    "GitLab",
    "Jenkins",
    "Ubuntu",
    "RHL"
];

const labelsThird = [
    "Visual Studio",
    "GitHub Desktop",
    "Visual Studio Code",
    "Service Now",
    "Jira",
    "SVN",
    "TFS",
    "Slack",
    "MicroSOft Teams",
    
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
            <div className="skill">
    <img src={img10} alt="DotNet Logo" className="tech-logo" />
    <h3>Senior Dot Net Developer</h3>
    <p>
        Experienced .NET Developer with a strong background in architecting, building, and maintaining scalable web and enterprise-level applications.
        Skilled in a broad range of technologies including .NET Core, ASP.NET MVC, REST APIs, and more. Hands-on experience in both backend and frontend 
        development using modern tools and frameworks.
    </p>
    
    <div className="tech-stack">
        <span className="chip-title">Tech stack:</span>
        <div className="flex-chips">
            {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
            ))}
        </div>
    </div>
</div>


                <div className="skill">
                    {/* <FontAwesomeIcon icon={faDocker} size="3x"/> */}
                    <img src={img11} alt="DotNet Logo" className="tech-logo" />
                    <h3>Devopes Engineer</h3>
                    <p>DevOps Engineer with a focus on bridging development and operations by automating, streamlining, and optimizing the software delivery lifecycle.
                         Skilled in CI/CD pipelines, cloud infrastructure, containerization, and monitoring tools to deliver scalable, secure, and high-availability deployment environments that support rapid innovation .</p>
                         <div className="tech-stack">
                              <span className="chip-title">Tech stack:</span>
                                <div className="flex-chips">
                                  {labelsSecond.map((label, index) => (
                                   <Chip key={index} className="chip" label={label} />
                                     ))}
                                </div>
                            </div>
                </div>

                <div className="skill">
                    {/* <FontAwesomeIcon icon={faPython} size="3x"/> */}
                    <img src={img12} alt="DotNet Logo" className="tech-logo" />
                    <h3>Tools</h3>
                    <p>I utilize a wide range of modern development tools and technologies to enhance productivity, maintain high code quality,
                         and streamline the development lifecycle. From version control and automation tools to frameworks and libraries, I leverage industry-leading solutions to build robust, scalable, and maintainable software systems.</p>
                         <div className="tech-stack">
                            <span className="chip-title">Tech stack:</span>
                            <div className="flex-chips">
                               {labelsThird.map((label, index) => (
                              <Chip key={index} className="chip" label={label} />
                              ))}
                            </div>
                          </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;