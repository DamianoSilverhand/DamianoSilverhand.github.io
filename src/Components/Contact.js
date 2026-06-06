import React, { Component } from 'react';

class Contact extends Component {
  render() {
    if (!this.props.data) return null;

    const { email, phone, phone2, address, contactmessage } = this.props.data;
    const city = address.city;

    return (
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-intro">
              <span className="section-label">Contact</span>
              <h2>Let&apos;s build something together</h2>
              <p>{contactmessage}</p>
              <a href={`mailto:${email}`} className="contact-email-cta">
                <i className="fa fa-envelope"></i>
                {email}
              </a>
            </div>

            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-card-icon"><i className="fa fa-phone"></i></div>
                <div>
                  <div className="contact-card-label">Phone</div>
                  <div className="contact-card-value">
                    <a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a>
                    {phone2 && (
                      <>
                        <br />
                        <a href={`tel:${phone2.replace(/\s/g, '')}`}>{phone2}</a>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon"><i className="fa fa-map-marker"></i></div>
                <div>
                  <div className="contact-card-label">Location</div>
                  <div className="contact-card-value">{city}, {address.country}</div>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon"><i className="fa fa-linkedin"></i></div>
                <div>
                  <div className="contact-card-label">LinkedIn</div>
                  <div className="contact-card-value">
                    <a
                      href="https://www.linkedin.com/in/damianochintala/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
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
