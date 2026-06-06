import React, { Component } from 'react';

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const { bio, address, phone, email, resumedownload } = this.props.data;
    const city = address.city;

    return (
      <section id="about" className="about-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">About</span>
            <h2>Technology leader driving<br />digital transformation at scale</h2>
          </div>

          <div className="about-grid">
            <div className="about-meta">
              <div className="meta-card">
                <div className="meta-icon"><i className="fa fa-map-marker"></i></div>
                <div>
                  <div className="meta-label">Location</div>
                  <div className="meta-value">{city}, Zambia</div>
                </div>
              </div>
              <div className="meta-card">
                <div className="meta-icon"><i className="fa fa-envelope"></i></div>
                <div>
                  <div className="meta-label">Email</div>
                  <div className="meta-value">{email}</div>
                </div>
              </div>
              <div className="meta-card">
                <div className="meta-icon"><i className="fa fa-phone"></i></div>
                <div>
                  <div className="meta-label">Phone</div>
                  <div className="meta-value">{phone}</div>
                </div>
              </div>
            </div>

            <div className="about-bio">
              <p>{bio}</p>
              <div className="about-actions">
                <a href={resumedownload} className="btn btn-primary" download="Damiano Chintala Resume">
                  <i className="fa fa-download"></i> Download Resume
                </a>
                <a href="#contact" className="btn btn-outline smoothscroll">
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
