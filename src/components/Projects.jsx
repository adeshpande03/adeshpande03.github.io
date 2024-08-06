import React, { useState, useEffect } from 'react';
import './Projects.css';
import 'bulma/css/bulma.min.css';
import projects from "../Projects.json"

function Projects() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1250);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 1250);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div id="Projects" className="projects-wrapper">
            <h1>Projects</h1>
            {projects.map((project) => (
                <div key={project.id} className="card has-background-dark">
                    <div className="card-content">
                        <p className="title">
                            {project.name}
                        </p>
                        <p className='subtitle'>{project.languages.join(', ')}</p>
                        <div className="card-content ">
                            <div className="content">

                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Projects;
