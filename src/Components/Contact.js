import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var email = this.props.data.email;
      var phone = this.props.data.phone;
      var phone2 = this.props.data.phone2;
      var city = this.props.data.address.city;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="section-header">
            <h2 style={{ color: '#667eea' }}>Get In Touch</h2>
            <p>Ready to start a project or have a question? Let's talk!</p>
          </div>
          
          <div className="contact-content" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div className="contact-info">
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fa fa-envelope"></i>
                </div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <p>{email}</p>
                  <a href={`mailto:${email}`} className="contact-link">Send Email</a>
                </div>
              </div>
              
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fa fa-phone"></i>
                </div>
                <div className="contact-details">
                  <h3>Phone</h3>
                  <p>{phone}</p>
                  {phone2 && <p>{phone2}</p>}
                  <a href={`tel:${phone}`} className="contact-link">Call Now</a>
                </div>
              </div>
              
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fa fa-map-marker"></i>
                </div>
                <div className="contact-details">
                  <h3>Location</h3>
                  <p>{city}</p>
                  <span className="contact-link">Based in {city}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
