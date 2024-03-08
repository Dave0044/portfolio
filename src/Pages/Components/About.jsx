// About.jsx

import React from 'react';

function About () {
    return (
        <section id="about" className="about-section" >
            <div className="container-md about-section-table">
                <div className="row">  
                    <div className="col-12 col-md-5 text-center about-section-column1">
                        <img src="./img/perfil.png" alt="perfil" className="rounded about-section-column1-img" />
                        <h3 className="about-section-column1-name">I'm David</h3>
                        <h2 className="about-section-column1-job">Mathematician & <br /> Web Developer</h2>
                        <button type="button" className="btn btn-outline-info btn-lg btn-sm about-section-column1-cv">See CV</button>
                    </div>
                    <div className="col-12 col-md-7 about-section-column2">
                        <h1 className="about-section-column2-AboutMe">About me</h1>
                        <p className="about-section-column2-paragraph">
                            I'm a Cuban mathematician with 4 years of research experience in Spain.
                            <br />
                            I'm currently working as a Research Mathematician at the Polytechnic University of Catalonia in Barcelona, Spain. 
                            <br />
                            I have been involved for two years in a project called Biometric Cryptosystems for Post-Quantum Technologies, where I develop mathematically efficient algorithms implemented in C.
                        </p>    
                        <h2 className="about-section-column2-interests">Interests</h2>
                        <div className="accordion" id="accordionFlushExample" data-bs-theme="dark">
                            <div className="accordion-item">
                                    <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        Math
                                    </button>
                                    </h2>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
                                    </div>
                            </div>
                            <div className="accordion-item">
                                    <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        Cryptography
                                    </button>
                                    </h2>
                                    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                                    </div>
                            </div>
                            <div class="accordion-item">
                                    <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        Skills
                                    </button>
                                    </h2>
                                    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>    
    )
}

export default About;