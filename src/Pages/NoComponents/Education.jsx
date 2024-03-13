// Education.jsx

import React from 'react';

function Education () {
    return (
        <section id="education" className="education-section">
            <div className="container-md education-section-table">
                <div className='col-md'>
                    <h1>Education</h1>
                </div> 
                <div className='col-md'>   
                    <div className="row education-section-row">
                        <div className="col-md-6 order-md-1 education-section-column">
                            <div className="education-item" >
                                <div className="education-date">
                                    <div className="education-circle"></div>
                                    <p>2011 - 2012</p>
                                </div>
                                <div className="education-content">
                                    <h3>University of Havana, Universitary Proyect</h3>
                                    <p>Descripción de tu experiencia en este centro educativo.</p>
                                    <a href="https://www.uh.cu/2022/11/10/convocatoria-para-la-captacion-de-jovenes-de-onceno-grado-de-los-institutos-preuniversitarios-para-su-posterior-ingreso-en-las-carreras-de-ciencias-exactas-naturales-periodismo-p/" className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Proyect UH</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 order-md-2 education-section-column1">
                            <a href="https://www.uh.cu/inicio/">
                                <img src="./img/uh.jpg" alt="University of Havana" className="img-fluid rounded" />
                            </a>
                        </div>
                    </div>
                    
                    <div className="row education-section-row">
                        <div className="col-md-6 order-md-2 education-section-column1">
                            <div className="education-item" >
                                <div className="education-date">
                                    <div className="education-circle"></div>
                                    <p>2013 - 2018</p>
                                </div>
                                <div className="education-content">
                                    <h3>University of Havana, MatCom</h3>
                                    <p>Descripción de tu experiencia en este centro educativo.</p>
                                    <a href="https://www.uh.cu/2022/11/10/convocatoria-para-la-captacion-de-jovenes-de-onceno-grado-de-los-institutos-preuniversitarios-para-su-posterior-ingreso-en-las-carreras-de-ciencias-exactas-naturales-periodismo-p/" className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Degree in Mathematics</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 order-md-1 education-section-column">
                            <a href="https://www.uh.cu/inicio/">
                                <img src="./img/matcom.png" alt="University of Havana" className="img-fluid rounded" />
                            </a>
                        </div>
                    </div>
                    
                    <div className="row education-section-row">
                        <div className="col-md-6 order-md-1 education-section-column">
                            <div className="education-item">
                                <div className="education-date">
                                    <div className="education-circle"></div>
                                    <p>2018 - 2019</p>
                                </div>
                                <div className="education-content">
                                    <h3>University of Informatics Sciences</h3>
                                    <p>Descripción de tu experiencia en este centro educativo.</p>
                                    <a href="https://www.uci.cu/" className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Postgrade Curses</a>
                                </div> 
                            </div>
                        </div>
                        <div className="col-md-6 order-md-2 education-section-column1">
                            <a href="https://www.uci.cu/">
                                <img src="./img/uci.jpg" alt="UCI" className="img-fluid rounded"/>
                            </a>
                        </div>
                    </div>
                    
                    <div className="row education-section-row">
                        <div className="col-md-6 order-md-2 education-section-column1">
                            <div className="education-item">
                                <div className="education-date">
                                    <div className="education-circle"></div>
                                    <p>2015 - 2019</p>
                                </div>
                                <div className="education-content">
                                    <h3>University of Granada</h3>
                                    <p>Descripción de tu experiencia en este centro educativo.</p>
                                    <a href="https://masteres.ugr.es/matematicas" className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Master in Math</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 order-md-1 education-section-column">
                            <a href="https://fciencias.ugr.es/">
                                <img src="./img/ugr.png" alt="MatCom" className="img-fluid rounded"/>
                            </a>
                        </div>
                    </div>
                    
                    <div className="row education-section-row">
                        <div className="col-md-6 order-md-1 education-section-column">
                            <div className="education-item" >
                                <div className="education-date">
                                    <div className="education-circle"></div>
                                    <p>2020 - 2022</p>
                                </div>
                                <div className="education-content">
                                    <h3>University Politecnic of Catalunya</h3>
                                    <p>Descripción de tu experiencia en este centro educativo.</p>
                                    <a href="https://doctorat.upc.edu/es/programas/ingenieria-electronica" className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Doctoral Curses</a>
                                </div> 
                            </div>
                        </div>
                        <div className="col-md-6 order-md-2 education-section-column1">
                            <a href="https://www.upc.edu/es">
                                <img src="./img/upc.png" alt="UPC" className="img-fluid rounded" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>    
        </section> 
    )
}

export default Education;