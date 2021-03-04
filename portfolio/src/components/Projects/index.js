import React from 'react';
import styles from './projects.css';
import DayScheduler from '../../images/dayScheduler.png';
import Outdoorsy from '../../images/Outdoorsy.png';
import passGenerator from '../../images/passGenerator.png'

function Projects() {
    return (
        <div>
            <div id="projects" className="container mt-3 pt-5">
                <h1 className="orange mb-3 pb-2">My Projects</h1>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                        <div className="card">
                            <img src={Outdoorsy} className="card-img-top" alt="Outdoorsy website" />
                            <div className="card-body">
                                <h5 className="card-title">Outdoorsy</h5>
                                <p className="card-text">The objective of the OUTDoorsy project was to create a useful tool for
                                outdoor enthusiasts to scout out hiking trails and local conditions in and around various
                            cities.</p>
                                <a href="https://jruuuu.github.io/OUTDoorsy/" target="_blank" className="btn btn-warning">See
                            Project</a>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                        <div className="card">
                            <img src={passGenerator} className="card-img-top" alt="password generator application" />
                            <div className="card-body">
                                <h5 className="card-title">Password Generator</h5>
                                <p className="card-text">This app is a simple password generator.</p>
                                <a href="https://brettwinterstrom.github.io/Bretts-pw-generator/" target="_blank" className="btn btn-warning">See
                            Project</a>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                        <div className="card">
                            <img src={DayScheduler} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Work Day Scheduler</h5>
                                <p className="card-text">This work day scheduler application is designed for adding, deleting, and
                            updating notes on a digital planner.</p>
                                <a href="https://brettwinterstrom.github.io/bretts-calendar/" target="_blank" className="btn btn-warning">See
                            Project</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Projects
