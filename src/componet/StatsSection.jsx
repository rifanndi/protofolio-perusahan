import React from "react";
import CountUp from "react-countup";
import "./StatsSection.css"; // File CSS untuk styling

const StatsSection = () => {
  return (
    <div className="stats-container">
      <div className="stat-item">
        <CountUp end={2868} duration={3} />
        <p>PROJECTS / YEAR</p>
      </div>
      <div className="stat-item">
        <CountUp end={2609} duration={3} />
        <p>HAPPY CLIENTS</p>
      </div>
      <div className="stat-item">
        <CountUp end={88} duration={3} />
        <p>QUALIFIED STAFF</p>
      </div>
    </div>
  );
};

export default StatsSection;
