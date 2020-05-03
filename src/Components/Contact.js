import React, { Component } from 'react';
import axios from 'axios';

class Contact extends Component {
 constructor(props){
 	super(props);
 	this.state={
 		name: ' ',
 		subject: ' ',
 		email: ' ',
 		message: ' ',
 		sent: false,
 		buttonText: 'Send Message'
 	}
 }

 onSubjectChange(event) {
 	this.setState({subject: event.target.value})
   }

onNameChange(event) {
	this.setState({name: event.target.value})
  }

  onEmailChange(event) {
	this.setState({email: event.target.value})
  }

  onMessageChange(event) {
	this.setState({message: event.target.value})
  }

handleSubmit=(e)=>{
    e.preventDefault();
    this.setState({
          buttonText: '...sending'
      })
    
      let data = {
          name: this.state.name,
          email: this.state.email,
          message: this.state.message,
          subject: this.state.subject
      }
      
      axios.post('API_URI', data)
      .then( res => {
          this.setState({ sent: true }, this.resetForm())
      })
      .catch( () => {
        alert('Form Currently not Operational, use other contact ways');
        this.resetForm();
      })
  }

  resetForm=()=>{
    
     this.setState({
     name: ' ', 
     subject: ' ', 
     email: ' ', 
     message: ' ',
     buttonText: 'Message Sent'
     })
  }
 
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form action=""  name="contactForm" onSubmit={this.handleSubmit} >
					<fieldset>

                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text"  size="35" id="contactName" name="contactName" value={this.state.name} onChange={this.onNameChange.bind(this)}/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" value={this.state.email} onChange={this.onEmailChange.bind(this)}/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text"  size="35" id="contactSubject" name="contactSubject" value={this.state.subject} onChange={this.onSubjectChange.bind(this)}/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" name="contactMessage" value={this.state.message} onChange={this.onMessageChange.bind(this)} ></textarea>
                  </div>

                  <div>
                     <button type="submit" className="submit">Submit</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </form>

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
					   <p className="address">
						   {name}<br />
						   {street} <br />
						   {city}, {state} {zip}<br />
						   <span>{phone}</span>
					   </p>
				   </div>
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
