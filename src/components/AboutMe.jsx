import "./AboutMe.css";
import "bulma/css/bulma.min.css";
import React from 'react';

function AboutMe() {
    return (
        <div className="about-me-wrapper">
            <div className="about-me box has-background-dark">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-128x128">
                            <img className="is-rounded" src="pfp.JPG" alt="Profile" />
                        </figure>
                    </div>
                    <div className="media-content">
                        <p className="title is-3 has-text-light about-me-text">Akhil Deshpande</p>
                        <p className="subtitle is-4 has-text-info about-me-text">Test Software Engineer</p>
                        <p className="subtitle is-5 has-text-info about-me-text"><a href="https://usa.visa.com" target="_blank">Visa</a></p>
                    </div>
                </div>
                <div className="abt-me-ps">
                    <p className="has-text-light about-me-info">Hello there! My name is Akhil Deshpande. Earlier this year, I graduated with a B.S. in Physics from the University of Texas at Austin. I am currently a new graduate employed by <a href="https://usa.visa.com" target="_blank">Visa</a> as a Software Test Engineer in Austin, TX. My main interests these days revolve around creative programming solutions to everyday problems I face in the real world.</p>
                    <p className="about-me-info"><br />To the right, you can see two of of my personal tracker projects - Github Streak Stats (forked from a public repository), as well as my original Leetcode Experience Points tracker</p>
                </div>
            </div>
            <div className="imgs">
                <div className="streak-img-container">
                    <img className="streak-img-container" src="https://github-readme-streak-stats-kappa-three.vercel.app?user=adeshpande03&theme=adeshpande03&border_radius=10&hide_longest_streak=true&hide_border=true" alt="GitHub Streak" />
                </div>
                <img src="https://github.com/adeshpande03/LeetCode-Points-Graph/blob/main/points_graph_rounded_corners.png?raw=true" alt="" />
            </div>
        </div>
    );
}

export default AboutMe;
