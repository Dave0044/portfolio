export default function Skills () {
    return (
        <section id="skills" className="about-section">
            <div className="about-section-table">
                <div className="about-section-column1">
                    <img src="./img/perfil.png" alt="my photo" className="about-section-column1-img" />
                    <p className="about-section-column1-name">I'm David</p>
                    <p className="about-section-column1-job">Mathematician & Web Developer</p>
                    <button className="about-section-column1-cv">See CV</button>
                </div>
                <div className="about-section-column2">
                    <h1 className="about-section-column2-AboutMe">About me:</h1>
                    <p className="about-section-column2-paragraph">
                        I'm a Cuban mathematician with 4 years of research experience in Spain.
                        <br />
                        I'm currently working as a Research Mathematician at the Polytechnic University of Catalonia in Barcelona, Spain. I have been involved for two years in a project called Biometric Cryptosystems for Post-Quantum Technologies, where I develop mathematically efficient algorithms implemented in C.
                        <br />
                        I created the Galois Fields Web Proyect by calling C functions from Python in a web project built with Django.
                        <br />
                        I'm currently developing web applications with FastAPI using python and with React using JavaScript.
                    </p>
                </div>
            </div>
        </section>    
    )
}