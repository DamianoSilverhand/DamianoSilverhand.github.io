import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return (
          <div key={education.school} className="resume-item">
            <div className="resume-item-header">
              <h3>{education.school}</h3>
              <span className="resume-item-date">{education.graduated}</span>
            </div>
            <h4 className="resume-item-title">{education.degree}</h4>
            <p className="resume-item-description">{education.description}</p>
          </div>
        )
      })
      var work = this.props.data.work.map(function(work){
        return (
          <div key={work.company} className="resume-item">
            <div className="resume-item-header">
              <h3>{work.company}</h3>
              <span className="resume-item-date">{work.years}</span>
            </div>
            <h4 className="resume-item-title">{work.title}</h4>
            <p className="resume-item-description">{work.description}</p>
          </div>
        )
      })
      var skills = this.props.data.skills.map(function(skill){
        return (
          <div key={skill.name} className="skill-item">
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-level">{skill.level}</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{width: skill.level}}></div>
            </div>
          </div>
        )
      })
      
      var certifications = this.props.data.certifications ? this.props.data.certifications.map(function(certification){
        return (
          <div key={certification.name} className="certification-item">
            <div className="certification-header">
              <h4>{certification.name}</h4>
              <span className="certification-category">{certification.category}</span>
            </div>
          </div>
        )
      }) : null;
    }

    return (
      <section id="resume" className="resume-section">
        <div className="container">
          <div className="section-header">
            <h2>Resume</h2>
            <p>{skillmessage}</p>
          </div>

          <div className="resume-content">
            {/* Education Section */}
            <div className="resume-section-group">
              <div className="resume-section-header">
                <div className="section-icon">
                  <i className="fa fa-graduation-cap"></i>
                </div>
                <h3>Education</h3>
              </div>
              <div className="resume-items">
                {education}
              </div>
            </div>

            {/* Work Experience Section */}
            <div className="resume-section-group">
              <div className="resume-section-header">
                <div className="section-icon">
                  <i className="fa fa-briefcase"></i>
                </div>
                <h3>Work Experience</h3>
              </div>
              <div className="resume-items">
                {work}
              </div>
            </div>

            {/* Skills Section */}
            <div className="resume-section-group">
              <div className="resume-section-header">
                <div className="section-icon">
                  <i className="fa fa-code"></i>
                </div>
                <h3>Skills & Expertise</h3>
              </div>
              <div className="skills-container">
                {skills}
              </div>
            </div>

            {/* Certifications Section */}
            <div className="resume-section-group">
              <div className="resume-section-header">
                <div className="section-icon">
                  <i className="fa fa-certificate"></i>
                </div>
                <h3>Certifications</h3>
              </div>
              <div className="certifications-container">
                {certifications}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
