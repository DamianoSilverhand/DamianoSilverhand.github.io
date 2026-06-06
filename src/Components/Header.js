import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false, scrolled: false };
    this.handleScroll = this.handleScroll.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const scrolled = window.scrollY > 24;
    if (scrolled !== this.state.scrolled) {
      this.setState({ scrolled });
    }
  }

  toggleMenu() {
    this.setState(prev => ({ menuOpen: !prev.menuOpen }));
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  render() {
    if (!this.props.data) return null;

    const { name, occupation, occupationSubtitle, description, address, social, image, stats } = this.props.data;
    const city = address.city;
    const firstName = name.split(' ')[0];
    const heroStats = stats || [
      { value: '7+', label: 'Years experience' },
      { value: '20+', label: 'RESTful APIs built' },
      { value: '5,000+', label: 'Open-source contributions' }
    ];

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
      <header id="home" className="hero">
        <nav
          id="nav-wrap"
          className={`site-nav${this.state.scrolled ? ' is-scrolled' : ''}`}
        >
          <div className="nav-inner">
            <a href="#home" className="nav-logo smoothscroll">{firstName}.</a>

            <button
              className={`nav-toggle${this.state.menuOpen ? ' is-open' : ''}`}
              onClick={this.toggleMenu}
              aria-label="Toggle navigation"
              aria-expanded={this.state.menuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <ul id="nav" className={`nav-links${this.state.menuOpen ? ' is-open' : ''}`}>
              <li><a className="smoothscroll nav-link" href="#home" onClick={this.closeMenu}>Home</a></li>
              <li><a className="smoothscroll nav-link" href="#about" onClick={this.closeMenu}>About</a></li>
              <li><a className="smoothscroll nav-link" href="#resume" onClick={this.closeMenu}>Resume</a></li>
              <li><a className="smoothscroll nav-link" href="#testimonials" onClick={this.closeMenu}>Testimonials</a></li>
              <li><a className="smoothscroll nav-link nav-cta" href="#contact" onClick={this.closeMenu}>Contact</a></li>
            </ul>
          </div>
        </nav>

        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-eyebrow animate-in">
                <span className="hero-eyebrow-dot"></span>
                Available for projects · {city}, Zambia
              </div>

              <h1 className="hero-title animate-in animate-in-delay-1">
                Building scalable<br />
                products with <em>{firstName}.</em>
              </h1>

              <p className="hero-lead animate-in animate-in-delay-2">
                {occupation}{occupationSubtitle ? ` · ${occupationSubtitle}` : ''}. {description}
              </p>

              <div className="hero-actions animate-in animate-in-delay-3">
                <a href="#resume" className="btn btn-primary smoothscroll">View my work</a>
                <a href="#contact" className="btn btn-outline smoothscroll">Get in touch</a>
              </div>

              <div className="hero-social animate-in animate-in-delay-3">
                {networks}
              </div>
            </div>

            <div className="hero-photo-wrap animate-in animate-in-delay-2">
              <img
                className="hero-photo"
                src={`images/${image || 'dman.jpeg'}`}
                alt={`${name} — Full Stack Developer`}
              />
              <div className="hero-photo-accent"></div>
            </div>
          </div>

          <div className="hero-stats">
            {heroStats.map(stat => (
              <div key={stat.label} className="hero-stat">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
