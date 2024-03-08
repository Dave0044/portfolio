// Skills.jsx
import React from 'react';

function Skills () {
    return (
        <section id="skills" className="skills-section">
            <div className="container-md skills-section-table">
                <h1>Skills</h1>
                <div className="row d-flex skills-section-row1">
                    <div className="col-md skills-section-column11">
                        <h2 className='text-center py-3'>Math</h2>
                            <ul class="list-group py-5 list-group-numbered" data-bs-theme="dark">
                                <li class="list-group-item">Advanced mathematical thinking</li>
                                <li class="list-group-item">Logics</li>
                                <li class="list-group-item">Discrete Mathamatics</li>
                                <li class="list-group-item">Optimization</li>
                                <li class="list-group-item">Statistics</li>
                                <li class="list-group-item">Algebra</li>
                                <li class="list-group-item">Calculus</li>
                            </ul>
                    </div>
                    <div className="col-md  skills-section-column12">
                    <h2 className='text-center py-3'>Programming</h2>
                            <div class="container text-center py-3">
                                <div class="row">
                                    <div class="col">
                                        <i className="devicon-c-line"></i>
                                    </div>
                                    <div class="col">
                                        <i className="devicon-python-plain-wordmark"></i>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <i className="devicon-git-plain-wordmark"></i>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <i className="devicon-html5-plain-wordmark"></i>
                                    </div>
                                    <div class="col">
                                        <i className="devicon-css3-plain-wordmark"></i>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <i className="devicon-javascript-plain"></i>
                                    </div>
                                </div>
                            </div>     
                    </div>
                    <div className="col-md  skills-section-column12">
                        <h2 className='text-center py-3'>Technologies</h2>
                        <div class="container text-center py-3">
                                <div class="row">
                                    <div class="col">
                                        <i className="devicon-django-plain-wordmark"></i>
                                    </div>
                                    <div class="col">
                                        <i className="devicon-fastapi-plain-wordmark"></i>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <i className="devicon-github-original-wordmark"></i>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <i className="devicon-bootstrap-plain-wordmark"></i>
                                    </div>
                                    <div class="col">
                                        <i className="devicon-latex-original"></i>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <i className="devicon-react-original-wordmark"></i>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>    
    )
}

export default Skills;