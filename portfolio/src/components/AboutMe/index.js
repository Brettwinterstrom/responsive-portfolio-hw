import React from 'react';
import styles from './AboutMe.css';
import BrettImg2 from '../../images/image0.jpeg'

function AboutMe() {
    return (
        <div>
            <div id="about" class="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <img src={BrettImg2} className="img-fluid rounded mt-3 mb-3 pic" />
                    </div>
                    <div className=" col-md-6 col-sm-12 pl-5 pt-5 pb-5 text-white">
                        <h3> About Me</h3>
                        <h1>Stuff about me</h1>
                        <p>My name is Brett Winterstrom. I'm 24 years old and I am currently a full-stack development student at
                        UCSD Coding Bootcamp and am looking to change careers into full-stack development. If you're
                        interested in learning more about me download my resume and check out my contact links below.
                </p>
                        <h5><a className="orange navigation-link"
                            href="https://docs.google.com/document/d/11jL7kgI-NT92gBXKy5nCAYO09yoEag5Shd29t9N0vfU/export?format=pdf">Download
                        my resume</a>
                        </h5>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutMe
