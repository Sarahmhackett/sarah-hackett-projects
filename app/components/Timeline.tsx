"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

/* 
Pink/red ACOTAR: #e64451
green Must and Fury: #229880
blue Frost and Starlight: #1a9fd4
orange Silverflames: #f26c27
grey Silverflames: #6e6c6d
purple Wings and Ruin: #cb528b
 */

export default function MyVerticalTimeline() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Jun 2023 - current"
        iconStyle={{ background: "#e64451", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">
          Frontend Software Engineer
        </h3>
        <p className="vertical-timeline-element-subtitle">
          Flutter Entertainment
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2023"
        iconStyle={{ background: "#229880", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">Code First Girls</h3>
        <p className="vertical-timeline-element-subtitle">
          Full Stack Degree bootcamp | Javascript Foundation | mySQL Foundation
          courses
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2021 - 2023"
        iconStyle={{ background: "#1a9fd4", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">Business Analyst</h3>
        <p className="vertical-timeline-element-subtitle">
          Flutter Entertainment
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2018"
        iconStyle={{ background: "#f26c27", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">
          CIM Chartered Instite of Marketing
        </h3>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2014 - 2021"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">Marketing Manager</h3>
        <p className="vertical-timeline-element-subtitle"></p>
      </VerticalTimelineElement>

      {/* More elements if needed */}
    </VerticalTimeline>
  );
}
