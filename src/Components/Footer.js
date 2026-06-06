import React, { Component } from 'react';

class Footer extends Component {
  render() {
    if (!this.props.data) return null;

    const { name, email, phone, phone2, address, social, tagline } = this.props.data;
    const year = new Date().getFullYear();

    const networks = social.map(network => (
      <a
        key={network.name}
        href={network.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={network.name}
      >
        <i className={network.className}></i>
      </a>
    ));

    return (
      <footer className="site-footer">
        <div className="container">
          <div className="footer-inner">
            <div>
              <div className="footer-brand">{name}</div>
              <p className="footer-tagline">
                {tagline || 'AI & Digital Transformation leader building scalable FinTech platforms and secure enterprise infrastructure.'}
              </p>
            </div>

            <nav className="footer-links" aria-label="Footer navigation">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#resume">Resume</a>
              <a href="#testimonials">Testimonials</a>
              <a href="#contact">Contact</a>
            </nav>

            <div className="footer-social">{networks}</div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {year} {name}. All rights reserved · {email} · {phone}{phone2 ? ` · ${phone2}` : ''} · {address.city}, {address.country}</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
