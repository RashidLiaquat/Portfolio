import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="NOV 2024 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Axon (Remote)</h4>
            <p>
            As a Software Engineer at Axon (Remote), I lead the design and development of scalable web and enterprise applications using .NET Core. I collaborate with cross-functional teams to build RESTful APIs and integrate front-end interfaces with React/TypeScript. My focus is on ensuring high performance, clean code, and continuous improvement.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="AUG 2019 - OCT 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title"> Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Sysytems Limited (Full Time)</h4>
            <p>
            As a Software Engineer at Systems Limited, I design and develop scalable backend systems with .NET Core and RESTful APIs. I work on cloud deployments and CI/CD pipelines while collaborating with cross-functional teams. My focus is on delivering high-quality software solutions.
            </p>
         
        
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;