// Skills.jsx
import React from 'react';

function Skills () {
    return (
        <section id="skills" className="skills-section">
            <div className="container rounded-4">
                <div class="text-center mb-5">
                    <h1 class="display-5 fw-bolder mb-0"><span className=" d-inline">Skills</span></h1>
                </div>
                <div className="container-md py-4 shadow rounded-4 skills-section-table">
                    <div className="row d-flex py-5 skills-section-row1">
                        <div className="col-md skills-section-column11">
                            <h2 className='text-center py-3'>Math</h2>
                            <div className="container text-center">
                                <div className="row">
                                    <div className="col">
                                        <h5>Advanced mathematical <br /> thinking</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h5>Logics</h5>
                                    </div>
                                    <div className="col">
                                        <h5>Discrete Mathamatics</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h5>Optimization</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h5>Algebra</h5>
                                    </div>
                                    <div className="col">
                                        <h5>Calculus</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h5>Statistics</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md  skills-section-column12">
                            <h2 className='text-center py-3'>Programming</h2>
                            <div className="container text-center">
                                <div className="row">
                                    <div className="col">
                                        <i className="devicon-c-line skills-icons"></i>
                                    </div>
                                    <div className="col">
                                        <i className="devicon-python-plain-wordmark skills-icons"></i>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <i className="devicon-git-plain-wordmark skills-icons"></i>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <i className="devicon-html5-plain-wordmark skills-icons"></i>
                                    </div>
                                    <div className="col">
                                        <i className="devicon-css3-plain-wordmark skills-icons"></i>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <i className="devicon-javascript-plain skills-icons"></i>
                                    </div>
                                </div>
                            </div>     
                        </div>
                        <div className="col-md  skills-section-column12">
                            <h2 className='text-center py-3'>Technologies</h2>
                            <div className="container text-center">
                                <div className="row">
                                    <div className="col">
                                        <i className="devicon-fastapi-plain-wordmark skills-icons"></i>
                                    </div>
                                    <div className="col">
                                        <i className="devicon-django-plain-wordmark skills-icons"></i>
                                    </div>
                                </div>
                                <div classNmae="row">
                                    <div className="col">
                                        <i className="devicon-github-original-wordmark skills-icons"></i>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <i className="devicon-bootstrap-plain-wordmark skills-icons"></i>
                                    </div>
                                    <div className="col">
                                        <i className="devicon-latex-original skills-icons"></i>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <i className="devicon-react-original-wordmark skills-icons"></i>
                                    </div>
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