import React from "react";
import "./App.css";

const PageThree = ({ formData, handleChange, previousPage, nextPage }) => {
  return (
    <div className="pg">
      <h2>Resume Content</h2>
      <input
        type="text"
        value={formData.aboutme} 
        onChange={(e) => handleChange("aboutme", e.target.value)} 
        placeholder="About me"
      />
      <input
        type="text"
        value={formData.skills} 
        onChange={(e) => handleChange("skills", e.target.value)} 
        placeholder="Skills"
      />
      <input
        type="text"
        value={formData.language} 
        onChange={(e) => handleChange("language", e.target.value)} 
        placeholder="Language"
      />
      <input
        type="text"
        value={formData.certificates} 
        onChange={(e) => handleChange("certificates", e.target.value)} 
        placeholder="Certificates"
      />

      <div className="prev-nxt">
        <button className="pr" onClick={previousPage}>Previous</button>
        <button className="nx" onClick={nextPage}>Next</button>
      </div>
    </div>
  );
};

export default PageThree;
