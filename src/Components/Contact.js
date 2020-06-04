import React, { useState } from "react";
import axios from 'axios';

function Contact(){
	
	const [serverState, setServerState] = useState({
	submitting: false,
	status: null
	});
	const handleServerResponse = (ok, msg, form) => {
	setServerState({
	submitting: false,
	status: { ok, msg }
	});
	if (ok) {
	form.reset();
	}
	};
	const handleOnSubmit = e => {
	e.preventDefault();
	const form = e.target;
	setServerState({ submitting: true });
	axios({
	method: "post",
	url: "https://formspree.io/moqkdley",
	data: new FormData(form)
	})
	.then(r => {
	handleServerResponse(true, "Thanks! Message sent successfully", form);
	})
	.catch(r => {
	handleServerResponse(false, r.response.data.error, form);
	});
	};



 

    

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">If you are seeking to hire a Developer ,want someone to collaborate with or for any freelance work, mobile or web applications development,do not hesistate to contact me</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form action=""  name="contactForm" onSubmit={handleOnSubmit} >
               
					<fieldset>

                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text"  size="35" id="name" name="contactName" />
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="email" defaultValue="" size="35" id="email" name="contactEmail" />
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text"  size="35" id="subject" name="contactSubject" />
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="message" name="contactMessage" ></textarea>
                  </div>

                  <div>
                     <button type="submit" disabled={serverState.submitting}>Submit</button>
                     {serverState.status && (
                     <p className={!serverState.status.ok ? "errorMsg" : ""}>
                     {serverState.status.msg}
                     </p>
                     )}
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
						   Damiano Chintala<br />
						   Lusaka, Zambia<br />
						   <span>+260962812927</span>
					   </p>
				   </div>
            </aside>
      </div>
   </section>
    );
  }


export default Contact;
