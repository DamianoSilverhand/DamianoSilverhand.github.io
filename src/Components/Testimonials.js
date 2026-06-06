import React, { Component } from 'react';

class Testimonials extends Component {
  render() {
    if (!this.props.data) return null;

    const items = this.props.data.testimonials.map(item => {
      const initials = item.user
        .split(' ')
        .slice(0, 2)
        .map(word => word[0])
        .join('')
        .toUpperCase();

      return (
        <div key={item.user} className="testimonial-card">
          <div className="testimonial-quote">&ldquo;</div>
          <p className="testimonial-text">{item.text}</p>
          <div className="testimonial-author">
            <div className="author-avatar">{initials}</div>
            <div className="author-name">{item.user}</div>
          </div>
        </div>
      );
    });

    return (
      <section id="testimonials" className="testimonials-section">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-label">Testimonials</span>
            <h2>What people say</h2>
            <p>Hear from colleagues and clients about their experience working with me</p>
          </div>

          {items}

          <div className="testimonials-cta">
            <a href="#contact" className="btn btn-primary smoothscroll">Start a project</a>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;
