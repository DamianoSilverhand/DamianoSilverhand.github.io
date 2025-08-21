import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var city = this.props.data.address.city;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about" className="about-section">
        <div className="container">
          <div className="section-header">
            <h2>About Me</h2>
            <p>Get to know me better and understand what drives me as a developer</p>
          </div>
          
          <div className="about-content">
            <div className="about-image">
              <div className="image-container">
                <img src={profilepic} alt={`${name} Profile`} />
                <div className="image-overlay"></div>
              </div>
            </div>
            
            <div className="about-text">
              <div className="about-bio">
                <h3>Who I Am</h3>
                <p>{bio}</p>
              </div>
              
              <div className="about-details">
                <div className="detail-item">
                  <div className="detail-icon">
                    <i className="fa fa-map-marker"></i>
                  </div>
                  <div className="detail-content">
                    <h4>Location</h4>
                    <p>{city}</p>
                  </div>
                </div>
                
                <div className="detail-item">
                  <div className="detail-icon">
                    <i className="fa fa-phone"></i>
                  </div>
                  <div className="detail-content">
                    <h4>Phone</h4>
                    <p>{phone}</p>
                  </div>
                </div>
                
                <div className="detail-item">
                  <div className="detail-icon">
                    <i className="fa fa-envelope"></i>
                  </div>
                  <div className="detail-content">
                    <h4>Email</h4>
                    <p>{email}</p>
                  </div>
                </div>
              </div>
              
              <div className="about-actions">
                <a href={resumeDownload} className="button primary-button" download="Damiano Chintala Resume">
                  <i className="fa fa-download"></i>
                  Download Resume
                </a>
                <a href="#contact" className="button secondary-button">
                  <i className="fa fa-envelope"></i>
                  Get In Touch
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
