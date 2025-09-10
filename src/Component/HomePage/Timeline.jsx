import React from 'react';
import {
  FaRocket,
  FaMagnifyingGlass,
  FaBolt,
  FaGear,
  FaClock,
  FaBullseye,
} from 'react-icons/fa6';
import './Timeline.css';

const Timeline = () => {
  const steps = [
    { id: 1, title: "START", description: "Launch and initiate the project.", icon: <FaRocket />, color: "#d32f2f" },
    { id: 2, title: "RESEARCH", description: "Deep dive into market and user needs.", icon: <FaMagnifyingGlass />, color: "#9c27b0" },
    { id: 3, title: "STRATEGY", description: "Plan the roadmap and core approach.", icon: <FaBolt />, color: "#2196f3" },
    { id: 4, title: "PROCESS", description: "Execute with structured workflow.", icon: <FaGear />, color: "#00bcd4" },
    { id: 5, title: "TIME", description: "Manage timelines and milestones.", icon: <FaClock />, color: "#009688" },
    { id: 6, title: "TARGET", description: "Achieve goals with precision.", icon: <FaBullseye />, color: "#ff9800" },
  ];

  return (
    <div className="timeline-container">
      <div className="timeline">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            {/* Timeline Item: Circle + Text */}
            <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              {/* Circle with Icon */}
              <div className="timeline-circle" style={{ borderColor: step.color, color: step.color }}>
                {step.icon}
              </div>

              {/* Content: Title & Description */}
              <div className="timeline-content">
                <h3 style={{ color: step.color }}>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>

            {/* Connector Line (between circles) */}
            {index < steps.length - 1 && (
              <div
                className="connector"
                style={{ backgroundColor: step.color }}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Timeline;