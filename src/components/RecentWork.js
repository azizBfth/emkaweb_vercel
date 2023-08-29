import React from "react";
import RecentWorkData from "./RecentWorkData";
import recentworkImg1 from "../assets/sonotrak p5 indoor.jpeg";
import recentworkImg2 from "../assets/sonotrak p5outdoor.jpeg";
import recentworkImg3 from "../assets/SRTMP5INDOOR .jpeg";
import recentworkImg4 from "../assets/SORETRAS BUS.jpeg";
import recentworkImg5 from "../assets/SRTM.jpeg";
import recentworkImg6 from "../assets/SRTMDJERBA.jpeg";
import "./RecentWorkStyles.css";
export default function RecentWork() {
  return (
    <div className="recentwork">
      <h1>Recent Works</h1>
      <p>you can discover our recent work using Google Maps</p>
      <div className="recentworkcard">
        <RecentWorkData
          image={recentworkImg1}
          heading="work1"
          text="description for this work"
        />
        <RecentWorkData
          image={recentworkImg2}
          heading="work2"
          text="description for this work"
        />
        <RecentWorkData
          image={recentworkImg3}
          heading="work3"
          text="description for this work"
        />

      
      </div>
      <div className="recentworkcard">
        <RecentWorkData
          image={recentworkImg4}
          heading="work4"
          text="description for this work"
        />
        <RecentWorkData
          image={recentworkImg5}
          heading="work5"
          text="description for this work"
        />
        <RecentWorkData
          image={recentworkImg6}
          heading="work6"
          text="description for this work"
        />
      </div>
    </div>
  );
}
