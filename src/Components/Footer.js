import React, { Component } from 'react';

class Footer extends Component {
  render() {

    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url} target="_blank" rel="noopener noreferrer"><i className={network.className}></i></a></li>
      })
    }

    return (
      <footer className="modern-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>{this.props.data?.name || 'Damiano Chintala'}</h3>
              <p>'Senior Full Stack Developer passionate about creating innovative web solutions and delivering exceptional user experiences.'</p>
              <div className="footer-social">
                <ul className="social-list">
                  {networks}
                </ul>
              </div>
            </div>
            
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Services</h4>
              <ul className="footer-links">
                <li>Full Stack Development</li>
                <li>Systems Integration</li>
                <li>Mobile App Development</li>
                <li>Cloud Infrastructure</li>
                <li>DevOps & CI/CD</li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Contact Info</h4>
              <div className="contact-info">
                <p><i className="fa fa-envelope"></i> {this.props.data?.email || 'damianochintala@gmail.com'}</p>
                <p><i className="fa fa-phone"></i> {this.props.data?.phone || '+260 962 812 927'}</p>
                {this.props.data?.phone2 && <p><i className="fa fa-phone"></i> {this.props.data.phone2}</p>}
                <p><i className="fa fa-map-marker"></i> {this.props.data?.address?.city || 'Lusaka'}, {this.props.data?.address?.country || 'Zambia'}</p>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p>&copy; 2025 Damiano Chintala. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
