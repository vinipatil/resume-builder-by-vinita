// Form.js
import React from 'react';
import './App.css'; // Import CSS file

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personalDetails: '',
      educationDetails: '',
      jobExperience: '',
      skills: '',
      jobExpectations: '',
      image: null
    };
    this.fileInput = React.createRef();
  }

  handleInputChange = (field, e) => {
    this.setState({ [field]: e.target.value });
  };

  handleFileChange = (e) => {
    this.setState({ image: e.target.files[0] });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { personalDetails, educationDetails, jobExperience, skills, jobExpectations, image } = this.state;
    const formData = new FormData();
    formData.append('personalDetails', personalDetails);
    formData.append('educationDetails', educationDetails);
    formData.append('jobExperience', jobExperience);
    formData.append('skills', skills);
    formData.append('jobExpectations', jobExpectations);
    formData.append('image', image);
    this.props.onSubmit(formData);
  };

  render() {
    const { personalDetails, educationDetails, jobExperience, skills, jobExpectations } = this.state;
    return (
      <div className="form-container">
        <h2>Enter Your Details</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="input-group">
            <label htmlFor="personalDetails">Personal Details:</label>
            <textarea id="personalDetails" value={personalDetails} onChange={e => this.handleInputChange('personalDetails', e)} />
          </div>
          <div className="input-group">
            <label htmlFor="educationDetails">Education Details:</label>
            <textarea id="educationDetails" value={educationDetails} onChange={e => this.handleInputChange('educationDetails', e)} />
          </div>
          <div className="input-group">
            <label htmlFor="jobExperience">Job Experience:</label>
            <textarea id="jobExperience" value={jobExperience} onChange={e => this.handleInputChange('jobExperience', e)} />
          </div>
          <div className="input-group">
            <label htmlFor="skills">Skills:</label>
            <textarea id="skills" value={skills} onChange={e => this.handleInputChange('skills', e)} />
          </div>
          <div className="input-group">
            <label htmlFor="jobExpectations">Job Expectations:</label>
            <textarea id="jobExpectations" value={jobExpectations} onChange={e => this.handleInputChange('jobExpectations', e)} />
          </div>
          <div className="input-group">
            <label htmlFor="image">Choose Image:</label>
            <input type="file" id="image" ref={this.fileInput} onChange={this.handleFileChange} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
