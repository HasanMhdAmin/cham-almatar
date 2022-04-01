import React from 'react';
import '../../App.css';
import Biography from "./sections/Biography";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import {useParams} from "react-router-dom";
import MainConfig from '../../projectsResource/main_config';

function Home() {
    let {section} = useParams();
    const mainConfig = MainConfig

    React.useEffect(() => {

        const element = document.getElementById(section)

        setTimeout(() => {
            window.scrollTo({
                behavior: element ? "smooth" : "auto",
                top: element ? element.offsetTop : 0
            });
        }, 100);

    }, []);

    const projects = () => {
        if (mainConfig.showProjects)
            return <Projects id="projects"/>
        else
            return <div/>
    };

    return (
        <div>
            <Biography id="biography"/>
            <Skills id="skills"/>
            <Experience id="experience" className="showBig"/>
            {projects()}
            <Education id="education"/>
            <Contact id="contact"/>
        </div>

    );
}

export default Home;
