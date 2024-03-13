// Education.jsx

import React from 'react';

function Education1 () {
    return (
    <section id="education" className="education-section">
        <div className="container education-section-table" >
            <h1 className='text-center'>Education</h1>
            <div className='container-md shadow rounded mb-5'>         
                <div className="row education-section-row" id="item-1">
                    <div className="col-md-6 order-md-1 education-section-column">
                        <div className="education-item" >
                            <h4>College University of Havana</h4>
                            <div className="education-date">
                                <div className="education-circle"></div>
                                <p>2011 - 2012</p>
                            </div>
                            <div className="education-content">
                                <h3>University of Havana, Faculty of Mathematics and Computing, MATCOM.</h3>
                                <p>Selected in recruiting young talents in mathematics through a competitive exam. The exam is carried out throughout the country to study the last pre-university year at the University, only the best 30 students are selected.</p>
                                <a href="https://www.uh.cu/2022/11/10/convocatoria-para-la-captacion-de-jovenes-de-onceno-grado-de-los-institutos-preuniversitarios-para-su-posterior-ingreso-en-las-carreras-de-ciencias-exactas-naturales-periodismo-p/" className="link-info link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">See more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 order-md-2 education-section-column1">
                        <a href="https://www.uh.cu/inicio/">
                            <img src="./img/uh.jpg" alt="University of Havana" className="img-fluid rounded" />
                        </a>
                    </div>
                </div>
            </div>
            
            <div className='container-md shadow rounded mb-5'>
                <div className="row education-section-row" id="item-2">
                    <div className="col-md-6 order-md-2 education-section-column1">
                        <h4 >Degree</h4>
                        <div className="education-item" >
                            <div className="education-date">
                                <div className="education-circle"></div>
                                <p>2013 - 2018</p>
                            </div>
                            <div className="education-content">
                                <h3>University of Havana, MatCom</h3>
                                <p>Descripción de tu experiencia en este centro educativo.</p>
                                <a href="https://www.uh.cu/2022/11/10/convocatoria-para-la-captacion-de-jovenes-de-onceno-grado-de-los-institutos-preuniversitarios-para-su-posterior-ingreso-en-las-carreras-de-ciencias-exactas-naturales-periodismo-p/" className="link-info link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">Degree in Mathematics</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 order-md-1 education-section-column">
                        <a href="https://www.uh.cu/inicio/">
                            <img src="./img/matcom.png" alt="University of Havana" className="img-fluid rounded" />
                        </a>
                    </div>
                </div>
            </div>
            
            <div className='container-md shadow rounded mb-5'>
                <div className="row education-section-row" id="item-3">
                    <div className="col-md-6 order-md-1 education-section-column">
                        <div className="education-item">
                            <h4 >Teach</h4>
                            <div className="education-date">
                                <div className="education-circle"></div>
                                <p>2018 - 2019</p>
                            </div>
                            <div className="education-content">
                                <h3>University of Informatics Sciences</h3>
                                <p>Descripción de tu experiencia en este centro educativo.</p>
                                <a href="https://www.uci.cu/" className="link-info link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">Postgrade Curses</a>
                            </div> 
                        </div>
                    </div>
                    <div className="col-md-6 order-md-2 education-section-column1">
                        <a href="https://www.uci.cu/">
                            <img src="./img/uci.jpg" alt="UCI" className="img-fluid rounded"/>
                        </a>
                    </div>
                </div>
            </div>
        
            
            <div className='container-md shadow rounded mb-5'>
                <div className="row education-section-row" id="item-4">
                    <div className="col-md-6 order-md-2 education-section-column1">
                        <div className="education-item">
                            <h4 >Master</h4>
                            <div className="education-date">
                                <div className="education-circle"></div>
                                <p>2015 - 2019</p>
                            </div>
                            <div className="education-content">
                                <h3>University of Granada</h3>
                                <p>Descripción de tu experiencia en este centro educativo.</p>
                                <a href="https://masteres.ugr.es/matematicas" className="link-info link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">Master in Math</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 order-md-1 education-section-column">
                        <a href="https://fciencias.ugr.es/">
                            <img src="./img/ugr.png" alt="MatCom" className="img-fluid rounded"/>
                        </a>
                    </div>
                </div>
            </div>
            
            <div className='container-md shadow rounded mb-5'>
                <div className="row education-section-row" id="item-5">
                    <div className="col-md-6 order-md-1 education-section-column">
                        <div className="education-item" >
                            <h4>Postgrade</h4>
                            <div className="education-date">
                                <div className="education-circle"></div>
                                <p>2020 - 2022</p>
                            </div>
                            <div className="education-content">
                                <h3>University Politecnic of Catalunya</h3>
                                <p>Descripción de tu experiencia en este centro educativo.</p>
                                <a href="https://doctorat.upc.edu/es/programas/ingenieria-electronica" className="link-info link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">Doctoral Curses</a>
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

export default Education1;