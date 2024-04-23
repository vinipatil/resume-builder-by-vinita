import React from "react";
import "./App.css";

const PageTwo = ({ formData, handleChange, nextPage, previousPage }) => {
  return (
    <div className="page">
      <h2 className="title">Education Details</h2>
      <div className="form-group">
        <label className="label" htmlFor="ssc">SSC Details :</label>
        <input
          id="ssc"
          type="text"
          value={formData.ssc} 
          onChange={(e) => handleChange("ssc", e.target.value)}
          placeholder="Enter SSC details"
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label className="label" htmlFor="hsc">HSC Details :</label>
        <input
          id="hsc"
          type="text"
          value={formData.hsc} 
          onChange={(e) => handleChange("hsc", e.target.value)}
          placeholder="Enter HSC details"
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label className="label" htmlFor="diploma">Diploma Details :</label>
        <input
          id="diploma"
          type="text"
          value={formData.diploma} 
          onChange={(e) => handleChange("diploma", e.target.value)}
          placeholder="Enter Diploma details"
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label className="label" htmlFor="graduation">Graduation Details :</label>
        <input
          id="graduation"
          type="text"
          value={formData.graduation} 
          onChange={(e) => handleChange("graduation", e.target.value)}
          placeholder="Enter Graduation details"
          className="input-field"
        />
      </div>
      <div className="button-group">
        <button onClick={previousPage} className="button">Previous</button>
        <button onClick={nextPage} className="button">Next</button>
      </div>
    </div>
  );
};

export default PageTwo;
