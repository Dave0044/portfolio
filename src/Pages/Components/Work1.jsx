// Work.jsx

import React from 'react';

function Work1 () {
    return (
            <section id="work" className="work-section">
                <div className="container-md work-section-table" >
                    <h1>Work</h1>
                            
                                <div className="row work-section-row">
                                    <div className="col-md-6 order-md-1 work-section-column">
                                        <div className="work-item">
                                        <h4 id="list-item-1">Professor</h4>
                                            <div className="work-date">
                                                <div className="work-circle"></div>
                                                <p>2018 - 2019</p>
                                            </div>
                                            <div className="work-content">
                                                <h3>University of Informatics Sciences</h3>
                                                <p>Teach Logic, Discrete Mathematics, Algebra, Calculus.</p>
                                                <a href="https://www.uci.cu/en/universidad/noticias/fici" className="link-info link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">FICI</a>
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="col-md-6 order-md-2 work-section-column">
                                        <a href="https://www.uci.cu/">
                                            <img src="./img/uci.jpg" alt="UCI" className="img-fluid rounded"/>
                                        </a>
                                    </div>
                                </div>

                                

                                <div className="row work-section-row">
                                    
                                    <div className="col-md-6 order-md-2 work-section-column">
                                        <div className="work-item">
                                            <h4 id="list-item-2">Professor</h4>
                                            <div className="work-date">
                                                <div className="work-circle"></div>
                                                <p>2019 - 2021</p>
                                            </div>
                                            <div className="work-content">
                                                <h3>Granada, Sevilla, Barcelona</h3>
                                                <p>Teach Logic, Discrete Mathematics, Algebra, Calculus.</p>
                                                <a href="https://www.tusclasesparticulares.com/" className="link-info link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">tusclasesparticulares.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 order-md-1 work-section-column">
                                        <a href="https://fciencias.ugr.es/">
                                            <img src="./img/ugr.png" alt="MatCom" className="img-fluid rounded" />
                                        </a>
                                    </div>
                                </div>
                            
                                
                            
                                <div className="row work-section-row">
                                    
                                    <div className="col-md-6 order-md-1 work-section-column">
                                        <div className="work-item">
                                            <h4 id="list-item-3">Professor/Researcher</h4>
                                            <div className="work-date">
                                                <div className="work-circle"></div>
                                                <p>2022 - 2024</p>
                                            </div>
                                            <div className="work-content">
                                                <h3>University Politecnic of Catalunya</h3>
                                                <p>Researcher/Professor.</p>
                                                <a href="https://futur.upc.edu/28881368" className="link-info link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">CBTP</a>
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="col-md-6 order-md-2 work-section-column">
                                        <a href="https://www.upc.edu/es">
                                            <img src="./img/upc.png" alt="UPC" className="img-fluid rounded"/>
                                        </a>
                                    </div>
                                </div>

                            
                        
                        
                </div>
            </section> 
    )
}

export default Work1;