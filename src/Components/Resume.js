import React, { Component } from 'react';

class Resume extends Component {
  renderTimelineItem(item, key) {
    const bullets = item.highlights || (item.description ? [item.description] : []);

    return (
      <div key={key} className="timeline-item">
        <div className="timeline-dot"></div>
        <div>
          <div className="timeline-date">{item.years}</div>
          <div className="timeline-company">{item.company || item.name}</div>
          <div className="timeline-role">{item.title || item.role}</div>
          {item.category && <div className="timeline-category">{item.category}</div>}
          {bullets.length > 0 && (
            <ul className="timeline-highlights">
              {bullets.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          )}
          {!bullets.length && item.description && (
            <p className="timeline-desc">{item.description}</p>
          )}
        </div>
      </div>
    );
  }

  render() {
    if (!this.props.data) return null;

    const {
      skillmessage,
      education,
      work,
      projects,
      skillCategories,
      skills,
      certifications,
      achievements
    } = this.props.data;

    const workItems = work.map(item =>
      this.renderTimelineItem(item, item.company)
    );

    const educationItems = education.map(item =>
      this.renderTimelineItem({ ...item, title: item.degree, years: item.graduated, company: item.school }, item.school)
    );

    const projectItems = projects ? projects.map(item =>
      this.renderTimelineItem(item, item.name)
    ) : null;

    const skillGroups = skillCategories ? skillCategories.map(group => (
      <div key={group.name} className="skill-group">
        <h4 className="skill-group-title">{group.name}</h4>
        <div className="skills-grid">
          {group.skills.map(skill => (
            <span key={skill} className="skill-pill">{skill}</span>
          ))}
        </div>
      </div>
    )) : (
      <div className="skills-grid">
        {skills.map(skill => (
          <span key={skill.name} className="skill-pill">{skill.name}</span>
        ))}
      </div>
    );

    const certCards = certifications ? certifications.map(cert => (
      <div key={cert.name} className="cert-card">
        <div className="cert-name">{cert.name}</div>
        <div className="cert-tag">{cert.category}</div>
      </div>
    )) : null;

    const achievementCards = achievements ? achievements.map(item => (
      <div key={item.title} className="achievement-card">
        <h4 className="achievement-title">{item.title}</h4>
        <p className="achievement-desc">{item.description}</p>
      </div>
    )) : null;

    return (
      <section id="resume" className="resume-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Experience</span>
            <h2>Resume &amp; expertise</h2>
            <p>{skillmessage}</p>
          </div>

          <div className="resume-layout">
            <div className="resume-block resume-block--full">
              <h3 className="resume-block-title">
                <i className="fa fa-briefcase"></i> Work Experience
              </h3>
              <div className="timeline">{workItems}</div>
            </div>

            {projects && (
              <div className="resume-block resume-block--full">
                <h3 className="resume-block-title">
                  <i className="fa fa-rocket"></i> Key Projects &amp; Open Source
                </h3>
                <div className="timeline">{projectItems}</div>
              </div>
            )}

            <div className="resume-block">
              <h3 className="resume-block-title">
                <i className="fa fa-graduation-cap"></i> Education
              </h3>
              <div className="timeline">{educationItems}</div>
            </div>

            {achievements && (
              <div className="resume-block">
                <h3 className="resume-block-title">
                  <i className="fa fa-trophy"></i> Key Achievements
                </h3>
                <div className="achievements-grid">{achievementCards}</div>
              </div>
            )}

            <div className="resume-block resume-block--full">
              <h3 className="resume-block-title">
                <i className="fa fa-code"></i> Core Competencies
              </h3>
              <div className="skill-groups">{skillGroups}</div>
            </div>

            {certifications && (
              <div className="resume-block resume-block--full">
                <h3 className="resume-block-title">
                  <i className="fa fa-certificate"></i> Certifications
                </h3>
                <div className="cert-grid">{certCards}</div>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
