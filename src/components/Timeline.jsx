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
        <img src="/RSLogo.png" className="w-[40px] max-xs:w-[30px]"/>
        </div>
      }
      >
        <h3 className="vertical-timeline-element-title text-[1.5rem] max-xs:text-[1.25rem] pb-2">Junior Full Stack Developer</h3>
        <h4 className="vertical-timeline-element-subtitle text-[1.25rem] pb-2 font-bold">ResearchSat</h4>
        <div>
          <ul className="list-disc text-[1.25rem] max-xs:text-[1rem] px-4">
            <li className="py-2">Developed a full stack sensor data dashboard with React, Node.js/Express, HTML and styled with Tailwind CSS; enabling ResearchSat to present live feed mission data to clients</li>
            <li  className="py-2">Implemented back end Node.js pipeline to read and save raw data from AWS S3 to MongoDB</li>
            <li className="py-2">Created 6 RESTful APIs to serve sensor data from MongoDB to front end</li>
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
        <h3 className="vertical-timeline-element-title text-[1.5rem] max-xs:text-[1.25rem] pb-2">Business Analyst</h3>
        <h4 className="vertical-timeline-element-subtitle text-[1.25rem] pb-2 font-bold">HSBC</h4>
        <div>
          <ul className="list-disc text-[1.25rem] max-xs:text-[1rem] px-4">
            <li className="py-2">At HSBC I had the opportunity to work on some exciting projects including looking after a sector-wide SharePoint which involved learning HTML and CSS to create an engaging space for colleagues</li>
            <li className="py-2">I was also working in the capacity as a change manager for the Direct Custody & Clearing product, researching and testing new ways to increase efficiency in a range of processes</li>
          </ul>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(2, 38, 64)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(2, 38, 64)" }}
        date="June 2019 to May 2020"
        iconStyle={{ background: "rgb(2, 38, 64)", color: "#fff" }}
        icon={
          <div className="h-[100%] flex justify-center place-items-center">
        <img src="/AXALogo.jpg" className="w-[40px]"/>
        </div>
      }
      >
        <h3 className="vertical-timeline-element-title text-[1.5rem] max-xs:text-[1.25rem] pb-2">Business Analyst</h3>
        <h4 className="vertical-timeline-element-subtitle text-[1.25rem] pb-2 font-bold">AXA Group Solutions</h4>
        <div>
          <ul className="list-disc text-[1.25rem] max-xs:text-[1rem] px-4">
            <li className="py-2">At AXA I was part of the digital transformation team working on a customer facing chat bot project; through data analysis and testing I put forward a solution that raised the chat bot's response accuracy from 50% to over 80%</li>
          </ul>
        </div>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default Timeline;
