import React, { useState } from "react";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import PageFour from "./PageFour";
import PDFGenerator from './PDFGenerator';
import "./App.css";
import backgroundVideo from "./bg1.mp4"; 


function App() {
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    profession:"",
    email: "",
    phoneNumber: "",
    permanentAddress: "",
    linkedin:"",
    ssc: "",
    hsc: "",
    diploma: "",
    graduation:"",
    aboutme:"",
    skills:"",
    language:"",
    certificates:"",
  });

  const [progress, setProgress] = useState(0);
  const [imageData, setImageData] = useState(""); 
  const [submitted, setSubmitted] = useState(false); 
  

  const steps = [
    { title: "Personal Information", icon: "👤" },
    { title: "Education Details", icon: "📚" },
    { title: "Resume Content", icon: "📄" },
    { title: "Preview", icon: "🔍" }
  ];

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
    setProgress((prevProgress) => prevProgress + 25);
  };

  const previousPage = () => {
    setPage((prevPage) => prevPage - 1);
    setProgress((prevProgress) => prevProgress - 25);
  };

  const handleChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleImageChange = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setImageData(e.target.result);
    };
    reader.readAsDataURL(file); 
  };

  const onSubmit = () => {
    console.log("Generating PDF...");
    setSubmitted(true); 
  };

  return (
    <div className="App">
    <video autoPlay muted loop className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="progress-bar">
        {steps.map((step, index) => (
          <div key={index} className={`step ${page >= index + 1 ? "active" : ""}`}>
            <span className="icon">{step.icon}</span>
            <span className="title">{step.title}</span>
          </div>
        ))}
      </div>
      {page === 1 && (
        <PageOne
          formData={formData}
          handleChange={handleChange}
          nextPage={nextPage}
          handleImageChange={handleImageChange}
          imageData={imageData} 
        />
      )}
      {page === 2 && (
        <PageTwo
          formData={formData}
          handleChange={handleChange}
          nextPage={nextPage}
          previousPage={previousPage}
        />
      )}
      {page === 3 && (
        <PageThree
          formData={formData}
          handleChange={handleChange}
          nextPage={nextPage}
          previousPage={previousPage}
        />
      )}
      {page === 4 && (
        <>
          {submitted ? ( 
            <PDFGenerator formData={formData} imageData={imageData} />
          ) : ( 
            <PageFour
              formData={formData}
              imageData={imageData}
              previousPage={previousPage}
              onSubmit={onSubmit} 
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
