import React from "react";
import "./PDFLayout.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';


const PDFLayout = ({ formData, imageData }) => {
  const additionalFields = {
    fullName: "Name",
    profession: "Profession",
    email: "Email",
    phoneNumber: "Phone No",
    permanentAddress: "Address",
    linkedin: "LinkedIn",
    ssc: "SSC",
    hsc: "HSC",
    diploma: "Diploma",
    graduation: "Graduation",
    aboutme: "About",
    skills: "Skills",
    language: "Language",
    certificates: "Certificates",
  };

  return (
    <div className="pdf-layout">
      <div className="form-slip">
        <div className="pdf-image-container">
          {imageData && (
            <img src={imageData} alt="Uploaded" className="pdf-image" />
          )}
        </div><br></br>
        {Object.entries(additionalFields)
          .filter(([key]) => ['fullName', 'profession', 'email', 'phoneNumber', 'permanentAddress', 'linkedin'].includes(key))
          .map(([key, label]) => (
            <div className="form-field" key={key}>
              <label>{label}:</label>
              <span>{formData[key]}</span>
            </div>
          ))}
      </div>

      <div className="additional-fields">
        {Object.entries(additionalFields)
          .filter(([key]) => !['fullName', 'profession', 'email', 'phoneNumber', 'permanentAddress', 'linkedin'].includes(key))
          .map(([key, label]) => (
            <div className="form-field" key={key}>
              <label>{label}:</label>
              <span>{formData[key]}</span>
            </div>
          ))}

      </div>

    </div>
  );
};


export default PDFLayout;
