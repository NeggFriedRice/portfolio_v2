import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Timeline() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{}}
        contentArrowStyle={{ borderRight: "7px solid  rgb(2, 38, 64)" }}
        date="May 2024 to July 2024"
        iconStyle={{ background: "rgb(2, 38, 64)", color: "#fff" }}
        icon={
          <div className="h-[100%] flex justify-center place-items-center">
        <img src="/RSLogo.png" className="w-[40px]"/>
        </div>
      }
      >
        <h3 className="vertical-timeline-element-title text-[1.5rem] pb-2">Junior Full Stack Developer</h3>
        <h4 className="vertical-timeline-element-subtitle text-[1.25rem] pb-2">ResearchSat</h4>
        <div>
          <ul className="list-disc text-[1.25rem] px-4">
            <li className="py-2">Developed a full stack sensor data dashboard with React, Node.js/Express, HTML and styled with Tailwind CSS; enabling ResearchSat to present live feed mission data to clients</li>
            <li  className="py-2">Implemented back end Node.js pipeline to read and save raw data from AWS S3 to MongoDB</li>
            <li className="py-2">Created 6 RESTful APIs to server sensor data from MongoDB to front end</li>
            <li className="py-2">Integrated dynamic and interactable data visualisations (temperature, humidity, pressure and spectral data) by utilising Recharts library</li>
          </ul>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(2, 38, 64)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(2, 38, 64)" }}
        date="September 2020 to June 2023"
        iconStyle={{ background: "rgb(2, 38, 64)", color: "#fff" }}
        icon={
          <div className="h-[100%] flex justify-center place-items-center">
        <img src="/HSBCLogo.png" className="w-[40px]"/>
        </div>
      }
      >
        <h3 className="vertical-timeline-element-title text-[1.5rem] pb-2">Business Analyst</h3>
        <h4 className="vertical-timeline-element-subtitle text-[1.25rem] pb-2">HSBC</h4>
        <div>
          <ul className="list-disc text-[1.25rem] px-4">
            <li className="py-2">Managed a sector wide SharePoint site built with HTML and CSS</li>
            <li  className="py-2">Engaged as a Business Analyst to focus on change management and process improvement for the Direct Custody & Clearing (commercial) product operations</li>
            <li className="py-2">Automated weekly stakeholder report using Excel, SharePoint and VBA reducing a 2 hour task to 15 seconds</li>
          </ul>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(2, 38, 64)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(2, 38, 64)" }}
        date="September 2020 to June 2023"
        iconStyle={{ background: "rgb(2, 38, 64)", color: "#fff" }}
        icon={
          <div className="h-[100%] flex justify-center place-items-center">
        <img src="/AXALogo.jpg" className="w-[40px]"/>
        </div>
      }
      >
        <h3 className="vertical-timeline-element-title text-[1.5rem] pb-2">Business Analyst</h3>
        <h4 className="vertical-timeline-element-subtitle text-[1.25rem] pb-2">AXA Group Solutions</h4>
        <div>
          <ul className="list-disc text-[1.25rem] px-4">
            <li className="py-2">Engaged as a business analyst and provided a customer facing chat bot dataanalysis and solution (mobile and web-based app) that resulted in an accuracy increase of over 40%.</li>
            <li  className="py-2">Contributed to a chat bot operating model through process mapping, gap analysis and identifying critical success factors</li>
          </ul>
        </div>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default Timeline;
