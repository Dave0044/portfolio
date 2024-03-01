import About from "../Components/About";
import Contact from "../Components/Contact";
import Education from "../Components/Education";
import Footer from "../Components/Footer";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";
import Work from "../Components/Work";

export default function Home () {
    return (
        <>
            <About />
            <Education />
            <Work />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}