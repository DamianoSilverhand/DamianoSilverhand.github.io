import React, { Component } from 'react';

class Testimonials extends Component {
  render() {

    if(this.props.data){
      var testimonials = this.props.data.testimonials.map(function(testimonials){
        return (
          <div key={testimonials.user} className="testimonial-item">
            <div className="testimonial-content">
              <div className="quote-icon">
                <i className="fa fa-quote-left"></i>
              </div>
              <p className="testimonial-text">{testimonials.text}</p>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>{testimonials.user}</h4>
                  <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })
    }

    return (
      <section id="testimonials" className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className='testimonial-heading'>What People Say</h2>
            <p className='testimonial-description' style={{color: '#f4eeee'}}>Hear from colleagues and clients about their experience working with me</p>
          </div>
          
          <div className="testimonials-grid">
            {testimonials}
          </div>
          
          <div className="testimonials-cta">
            <p>Ready to work together?</p>
            <a href="#contact" className="button primary-button">
              Let's Start a Project
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;
