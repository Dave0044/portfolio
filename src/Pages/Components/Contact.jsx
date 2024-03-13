
// Contact.jsx

import React from 'react';

function Contact () {
    return (
        <section id="contact" className="contact-section py-5">
            <div className="container-md py-4 shadow rounded contact-section-table">
                <h1 className='shadow'>Contact</h1>
                <div className="py-4">
                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className='py-2'>
                    <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                    <button type="button" className="btn btn btn-outline-info btn-sm btn-lg contact-section-column1-btn">Send</button>
            </div>
        </section>    
    )
}

export default Contact;