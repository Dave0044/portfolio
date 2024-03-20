// Projects.jsx

import React from 'react';

function Projects () {
    return (
        <section id="projects" className="projects-section">
            <div className="container rounded-4">
                <div class="text-center mb-5">
                    <h1 class="display-5 fw-bolder mb-0"><span className=" d-inline">Projects</span></h1>
                </div>
                <div className="container-md py-4 shadow rounded-4 projects-section-table">
                    <div className="row py-5 projects-section-row1">
                        <div className="col-md projects-section-column1">
                            <h2 className='text-center'>Research</h2>
                            <div className="row">
                                <div className="col-md-12 d-flex align-items-center justify-content-center mb-10 py-3">
                                    <div className="card-math2 shadow rounded-4" style={{ width: "25rem"}}>
                                        <img src="./img/cript.jpg" className="card-img-top rounded-4" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title text-center py-1 px-3">Biometric Cryptosystems for Post-Quantum Technologies</h5>
                                            <p className="card-text py-1 px-3">
                                                The project proposed here aims to propose a biometric cryptosystem resistant to quantum technologies. The cryptosystem bases its robustness on using cryptographic algorithms.
                                            </p>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item bg-light">Confidencial project</li>
                                        </ul>
                                        <div className="card-body btn-group btn-group-sm d-flex py-3 px-3">
                                            <a href="https://futur.upc.edu/28881368" className="btn  rounded-left-only btn-outline-info">
                                            Resume
                                            </a>
                                            <a href="https://www.upc.edu/es" className="btn  rounded-right-only btn-outline-info">
                                            Company
                                            </a>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                        <div className="col-md">
                            <h2 className='text-center'>Web</h2>
                            <div className="row">
                                <div className="col-md-12 d-flex align-items-center justify-content-center mb-10 py-3">
                                    <div className="card-math2 shadow rounded-4" style={{ width: "25rem"}}>
                                        <img src="./img/galois.png" className="card-img-top rounded-4" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title text-center py-1 px-3">Arithmetic and polynomial operations on Galois fields</h5>
                                            <p className="card-text py-1 px-3">
                                            Addition, multiplication, division operation in the Galois Field GF(2m) implemented in C, calling the functions from Python, using CTypes. Project created with Django.
                                            </p>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item bg-light">Open Source project</li>
                                        </ul>
                                        <div className="card-body btn-group btn-group-sm d-flex py-3 px-3">
                                            <a href="https://github.com/Dave0044/GaloisFields" className="btn  rounded-left-only btn-outline-info">
                                            Repository
                                            </a>
                                            <a href="https://github.com/Dave0044/GaloisFields" className="btn  rounded-right-only btn-outline-info">
                                            Web
                                            </a>
                                        </div>
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

export default Projects;