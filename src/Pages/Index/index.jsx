import About from "../Components/About";
import Contact from "../Components/Contact";
import Education1 from "../Components/Education1";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";
import Work1 from "../Components/Work1";


export default function Home () {
    return (
        <>
            <Navbar />
            <About />
            <Education1 />
            <Work1 />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}