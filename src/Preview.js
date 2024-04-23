// Preview.js
import React from 'react';


class Preview extends React.Component {
  render() {
    const { personalDetails, educationDetails, jobExperience, skills, jobExpectations } = this.props;
    return (
      <div className="preview-container">
        <h2>Resume Preview</h2>
        <div className="resume-section">
          <h3>Personal Details</h3>
          <p>{personalDetails}</p>
        </div>
        <div className="resume-section">
          <h3>Education Details</h3>
          <p>{educationDetails}</p>
        </div>
        <div className="resume-section">
          <h3>Job Experience</h3>
          <p>{jobExperience}</p>
        </div>
        <div className="resume-section">
          <h3>Skills</h3>
          <p>{skills}</p>
        </div>
        <div className="resume-section">
          <h3>Job Expectations</h3>
          <p>{jobExpectations}</p>
        </div>
      </div>
    );
  }
}

export default Preview;
