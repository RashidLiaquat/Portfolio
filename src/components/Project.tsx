import React from "react";
import img8 from '../assets/images/img8.png';
import img3 from '../assets/images/img3.png';
import img5 from '../assets/images/img5.png';
import img4 from '../assets/images/img4.png';
import img7 from '../assets/images/img7.png';
import img6 from '../assets/images/img6.png';
import img2 from '../assets/images/img2.png';
import img1 from '../assets/images/img1.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1> KEY PROJECTS</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.partnerlinq.com/" target="_blank" rel="noreferrer"><img src={img1} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.partnerlinq.com/" target="_blank" rel="noreferrer"><h2>PartnerLinq </h2></a>
                <p>Developed a unified digital supply chain connectivity solution using PartnerLinQ, enhancing real-time visibility, seamless integrations, and AI-driven decision-making across global supply chains. The platform supports over 2,000 partner networks, processing more than 100 million transactions monthly..
                </p>
            </div>
            <div className="project">
                <a href="https://www.visionet.com/service/business-process-services/visirelease" target="_blank" rel="noreferrer"><img src={img2} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.visionet.com/service/business-process-services/visirelease" target="_blank" rel="noreferrer"><h2>VisiRecording </h2></a>
                <p>Developed and implemented VisiRelease, Visionet's end-to-end mortgage recording and lien release solution, automating document preparation and county communications. The platform enhances efficiency, ensures compliance, and reduces manual paperwork in mortgage servicing.</p>
            </div>
            <div className="project">
                <a href="https://www.certusrecording.com/CertusWebsite/" target="_blank" rel="noreferrer"><img src={img6} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.certusrecording.com/CertusWebsite/" target="_blank" rel="noreferrer"><h2>Certus Recording </h2></a>
                <p>Developed and implemented Certus Recording's real estate recording software, providing accurate and comprehensive recording fee and tax information. The solution enhances the efficiency of processing real estate transactions by offering real-time calculations and integration support.​</p>
            </div>
            <div className="project">
                <a href="https://www.visionet.com/news/visionet-to-showcase-vlr-integration-at-experience-2020 " target="_blank" rel="noreferrer"><img src={img7} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.visionet.com/news/visionet-to-showcase-vlr-integration-at-experience-2020 " target="_blank" rel="noreferrer"><h2>VLR                 </h2></a>
                <p>Developed and implemented VisiLoanReview (VLR), integrating it with Ellie Mae’s Encompass® Digital Lending Platform to automate document processing and data synchronization. This solution enhances loan origination efficiency, reduces turnaround times, and lowers operational costs.</p>
            </div>
            <div className="project">
                <a href="https://www.carrefouruae.com/mafuae/en/" target="_blank" rel="noreferrer"><img src={img4} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.carrefouruae.com/mafuae/en/" target="_blank" rel="noreferrer"><h2>Carrefour</h2></a>
                <p>Developed and optimized Carrefour UAE's e-commerce platform, enhancing user experience and streamlining online shopping processes. Implemented features for seamless browsing, secure transactions, and efficient order fulfillment.</p>
            </div>
            <div className="project">
                <a href="https://www.siteone.com/" target="_blank" rel="noreferrer"><img src={img5} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.siteone.com/" target="_blank" rel="noreferrer"><h2>Site One                </h2></a>
                <p>Developed and optimized SiteOne Landscape Supply's digital platform, enhancing user experience and streamlining the procurement process for landscape professionals. Implemented features for seamless browsing, real-time inventory management, and efficient order fulfillment.</p>
            </div>
            <div className="project">
                <a href="https://www.evolent.com/" target="_blank" rel="noreferrer"><img src={img3} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.evolent.com/" target="_blank" rel="noreferrer"><h2>Evolent</h2></a>
                <p>Contributed to the development and optimization of Evolent Health’s value-based care platform, integrating advanced clinical decision support across multiple specialties. Enhanced care coordination and operational efficiency, impacting over 40 million covered members</p>
            </div>
            <div className="project">
                <a href="https://www.regeneron.com/" target="_blank" rel="noreferrer"><img src={img8} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.regeneron.com/" target="_blank" rel="noreferrer"><h2>Regeneron</h2></a>
                <p>Contributed to the development and optimization of Regeneron's biotechnology platforms, enhancing the discovery and delivery of innovative therapies for serious diseases. Implemented solutions that improved research efficiency and accelerated the transition from science to medicine.</p>
            </div>
           
        </div>
    </div>
    );
}

export default Project;