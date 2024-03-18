
// Footer.jsx

import React from 'react';

function Footer () {
    return (
        <section id="footer" className="footer-section py-3 shadow">
                    <div className="container py-3">
                        <div className="row text-center py-2 ">
                            <div className="col-md">
                                Email: <a href="mailto:dlrlima1994@email.com" className="link-info link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">dlrlima1994@email.com</a>
                            </div>
                            <div className="col-md">
                                Phone: +34 644587587
                            </div>
                            <div className="col-md">
                                    <a className="link-info link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover i-footer" href="https://github.com/Dave0044">
                                        <i className="devicon-github-original px-3 bi fs-2"></i>
                                    </a>  
                                    <a className="link-info link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover i-footer" href="https://www.linkedin.com/in/dave0044/">
                                        <i className="devicon-linkedin-plain bi fs-2"></i>
                                    </a>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                    <div className='container shadow rounded'>
                        <div className="row text-center py-2 ">
                            <div className="col-md">
                                <a href="#privacy" className="link-info link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">Privacy Policy</a> 
                            </div>
                            <div className="col-md">
                                Copyright © 2024 My Website. All rights reserved.
                            </div>
                            <div className="col-md">
                                <a href="#terms" className="link-info link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">Terms of Service</a>
                            </div>
                        </div>
                    </div>
                    </div>
        </section>    
    )
}

export default Footer;