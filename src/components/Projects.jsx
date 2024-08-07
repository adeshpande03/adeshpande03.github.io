import React, { useState, useEffect } from 'react';
import './Projects.css';
import 'bulma/css/bulma.min.css';
import projects from "../Projects.json"

function Projects() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1250);
    function sortProjects(projects) {
        let sortedData
        sortedData = projects.sort(function (a, b) {
            let x = a.name.toLowerCase();
            let y = b.name.toLowerCase();
            if (x > y) { return 1; }
            if (x < y) { return -1; }
            return 0;
        });

        return sortedData
    }
    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 1250);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div id="Projects" className="projects-wrapper">
            <section className='hero is-medium is-link' data-aos="fade-up">
                <div className="hero-body">
                    <div className="title">Projects</div>
                </div>
            </section>

            {sortProjects(projects).map((project) => (
                <div key={project.id} className="card has-background-dark" data-aos="fade-up">
                    <div className="card-content">
                        <p className="title">
                            <a target="_blank" href={"https://" + project.url}>{project.name}</a>
                        </p>
                        <p className='subtitle'>{project.languages.sort().join(', ')}</p>
                        <div className="card-content ">
                            <div style={{"font-size":"larger", "color":"#fff"}}className="content">
                                {project.content}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Projects;
