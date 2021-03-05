import React from 'react';
import BrettImg1 from '../../images/image0 (1).jpeg';
import styles from './IntroElements.css';

function Intro() {
    return (
        <div>
            <div className="container main-container">
                <div className="row main_row">
                    <div className="col-md-6">
                        <h2 className="text-white">Hello, I'm</h2>
                        <h1 className="orange">Brett Winterstrom</h1>
                        <h2 className="text-white">Web Developer</h2>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <img src={BrettImg1} className="img-fluid rounded pic" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro
