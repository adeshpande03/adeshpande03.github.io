import React, { useState, useEffect } from 'react';
import './AboutMe.css';
import 'bulma/css/bulma.min.css';

function AboutMe() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1250);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 1250);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section id="AboutMe" className="about-me-wrapper">
            <div className="about-me box has-background-dark">
                <div className="media">
                    <div className="media-left">
                        {!isMobile && (
                            <figure className="image is-128x128">
                                <img className="is-rounded" src="pfp.JPG" alt="Profile" />
                            </figure>
                        )}
                    </div>
                    <div className="media-content">
                        <p className="title is-3 has-text-light about-me-text">Akhil Deshpande</p>
                        <p className="subtitle is-4 has-text-info about-me-text">Test Software Engineer</p>
                        <p className="subtitle is-5 has-text-info about-me-text"><a href="https://usa.visa.com" target="_blank">Visa</a></p>
                    </div>
                </div>
                {/* <div className="abt-me-ps"> */}
                <p className="has-text-light about-me-info">Hello there! My name is Akhil Deshpande. Earlier this year, I graduated with a <a href="https://ph.utexas.edu" target='_blank' className='burnt-orange'>B.S. in Physics</a> from the <a href="https://utexas.edu" target='_blank' className='burnt-orange'>University of Texas at Austin</a>. I am currently a new graduate employed by <a href="https://usa.visa.com" target="_blank">Visa</a> as a Software Test Engineer in Austin, TX. My main interests these days revolve around creative programming solutions to everyday problems I face in the real world.</p>
                <p className="about-me-info">To the {isMobile ? "bottom" : "right"}, you can see two of my personal tracker projects - <a href="https://github.com/adeshpande03/github-readme-streak-stats/" target="_blank">Github Streak Stats</a> (bottom, forked from a public repository), as well as my original <a target="_blank" href="github.com/adeshpande03/leetCode-Points-Graph">Leetcode Experience Tracker</a> (top), both of which update in real time!</p>
                <p className="about-me-info-small">Scroll down for my projects, experience, and resume!</p>
                {/* </div> */}
            </div>
            <div className="imgs" data-aos="fade-left" data-aos-delay="2000">
                <img src="https://github.com/adeshpande03/LeetCode-Points-Graph/blob/main/points_graph_rounded_corners.png?raw=true" alt="LeetCode Points Graph" />
                <img className="streak-img-container" src="https://github-readme-streak-stats-kappa-three.vercel.app?user=adeshpande03&theme=adeshpande03&border_radius=10&hide_longest_streak=true&hide_border=true" alt="GitHub Streak" />
            </div>
        </section>
    );
}

export default AboutMe;
