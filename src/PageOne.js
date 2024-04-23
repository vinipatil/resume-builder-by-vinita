import React, { useState } from "react";
import "./App.css";

const PageOne = ({ formData, handleChange, nextPage, handleImageChange, imageData }) => {
  const [emailError, setEmailError] = useState("");

  const handleEmailChange = (e) => {
    const email = e.target.value;
    handleChange("email", email);

    const emailPattern = /^[^\s@]+@gmail\.com$/;
    const isValidEmail = emailPattern.test(email);

    setEmailError(isValidEmail ? "" : "Please enter a valid email address ending with @gmail.com");
  };


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleImageChange(file);
    }
  };

  return (
    <div className="page">
      <h2>Personal Information</h2>
      <input
        type="text"
        value={formData.fullName}
        onChange={(e) => handleChange("fullName", e.target.value)}
        placeholder="Full Name"
      />
      <input
        type="text"
        value={formData.profession}
        onChange={(e) => handleChange("profession", e.target.value)}
        placeholder="Profession"
      />
      <input
        type="email"
        value={formData.email}
        onChange={handleEmailChange}
        placeholder="Email"
      />
      {emailError && <span className="error">{emailError}</span>}
      <input
        type="tel"
        value={formData.phoneNumber}
        onChange={(e) => handleChange("phoneNumber", e.target.value)}
        placeholder="Phone Number"
      />

      <input
        type="text"
        value={formData.permanentAddress}
        onChange={(e) => handleChange("permanentAddress", e.target.value)}
        placeholder="Address"
      />

      <input
        type="text"
        value={formData.linkedin}
        onChange={(e) => handleChange("linkedin", e.target.value)}
        placeholder="LinkedIn"
      />

      <div className="image-container">
        <input type="file" onChange={handleFileChange} accept="image/*" />
        {imageData && <img src={imageData} alt="Uploaded" style={{ width: '100px', height: '100px' }} />}
      </div>
      <button className="next" onClick={nextPage}>Next</button>
    </div>
  );
};

export default PageOne;
