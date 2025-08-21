import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url} target="_blank" rel="noopener noreferrer"><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home" className="modern-header">
        <nav id="nav-wrap" className="modern-nav">
          <div className="nav-container">
            <div className="nav-brand">
              <a href="#home" className="smoothscroll">{name}</a>
            </div>
            
            <ul id="nav" className="nav-menu">
              <li><a className="smoothscroll nav-link" href="#home">Home</a></li>
              <li><a className="smoothscroll nav-link" href="#about">About</a></li>
              <li><a className="smoothscroll nav-link" href="#resume">Resume</a></li>
              <li><a className="smoothscroll nav-link" href="#testimonials">Testimonials</a></li>
              <li><a className="smoothscroll nav-link" href="#contact">Contact</a></li>
            </ul>

            <div className="nav-toggle">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>

        <div className="hero-section">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title fade-in-up">
                Hi, I'm <span className="highlight">{name}</span>
              </h1>
              <h2 className="hero-subtitle fade-in-up">
                {occupation} based in {city}
              </h2>
              <p className="hero-description fade-in-up">
                {description}
              </p>
              <div className="hero-cta fade-in-up">
                <a href="#about" className="button primary-button">
                  Get to know me
                </a>
                <a href="#contact" className="button secondary-button">
                  Let's talk
                </a>
              </div>
            </div>
            
            <div className="hero-image fade-in-up">
              <img src={`images/${this.props.data?.image || 'dman.png'}`} alt={`${name} Profile`} />
            </div>
          </div>
          
          <div className="social-links fade-in-up">
            <ul className="social-list">
              {networks}
            </ul>
          </div>
        </div>

        <div className="scroll-indicator">
          <a className="smoothscroll" href="#about">
            <div className="scroll-arrow">
              <i className="icon-down-circle"></i>
            </div>
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
