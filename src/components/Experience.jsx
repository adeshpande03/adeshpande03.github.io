import React, { useState, useEffect } from 'react';
import './Experience.css';
import 'bulma/css/bulma.min.css';
import experience from "../Experience.json"

function Experience() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1250);
    const [activeTab, setActiveTab] = useState(null);
    const experiences = experience;
    // Data structure for experiences

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 1250);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function handleTabClick(tabId) {
        setActiveTab(tabId);
    }

    function formatExperienceDescription(experience) {
        return (
            <div>
                <subtitle style={{ "font-size": 2 + "rem" }}>{experience.name}</subtitle>
                <p>{experience.location}</p>
                <p>{experience.dates.join(" - ")}</p>
                <p>{experience.title}</p>
                <ul>
                    {experience.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}
                </ul>
            </div>
        );
    }

    return (
        <section data-aos="fade-up" className="experience-wrapper">
            <div className="hero is-fullheight is-primary">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        {!activeTab && <p className="title">Experience</p>}
                        {activeTab && (<div key={activeTab} data-aos="fade-in">
                            {formatExperienceDescription(experiences.find(exp => exp.id === activeTab))}
                        </div>)}
                    </div>
                </div>
                <div className="hero-foot" id="Experience">
                    <nav className="tabs is-boxed is-fullwidth">
                        <div className="container">
                            <ul>
                                {experiences.map(exp => (
                                    <li key={exp.id} className={exp.id === activeTab ? 'is-active' : ''}>
                                        <a onClick={() => handleTabClick(exp.id)}>{exp.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </section>
    );
}

export default Experience;
