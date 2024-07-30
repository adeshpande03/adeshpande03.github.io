import "./AboutMe.css";
import "bulma/css/bulma.min.css";
import React from 'react';

function AboutMe() {
    return (
        <div className="about-me box has-background-dark">
            <div className="media">
                <div className="media-left">
                    <figure className="image is-128x128">
                        <img className="is-rounded" src="pfp.jpg" alt="Profile" />
                    </figure>
                </div>
                <div className="media-content">
                    <p className="title is-4 has-text-light">Akhil Deshpande</p>
                    <p className="subtitle is-6 has-text-info">Test Software Engineer</p>
                    <p className="has-text-light">Hello, my name is Akhil Deshpande. Currently I am employed as a Test Software Engineer by <a href="https://usa.visa.com" target="_blank">Visa</a> in Austin, TX. I currently possess a B.S. Physics from the University of Texas at Austin.</p>
                </div>
            </div>
            {/* <div className="content has-text-light">
                <p>Here you can add more details about your professional journey, achievements, or any other information you'd like visitors to know about. Feel free to include hobbies or interests that add a personal touch.</p>
            </div> */}
        </div>
    );
}

export default AboutMe;
