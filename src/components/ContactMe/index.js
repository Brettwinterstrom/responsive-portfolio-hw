import React from 'react';
import styles from './contact.css';
import * as FaIcons from 'react-icons/fa';

function ContactMe() {

    return (
        <div>
            <div id="contact-me" className="container-fluid p-4">
                <div className="container text-white">
                    <h4 className="orange">Contact Me</h4>
                    <h4>Here</h4>
                    <div className="row pt-5">
                        <div className="col-md-3 media-link btn" id="linkedIn">
                            <div className="row">
                                <div className="col-6 d-flex justify-content-start">
                                    <h3 className="pt-2 m-0 text-white"><a target="_blank" className="text-white" href="https://www.linkedin.com/in/brettwinterstrom/">LinkedIn</a></h3>
                                </div>
                                <FaIcons.FaLinkedin size={50} />
                                <div className="col-6 d-flex justify-content-end align-items-center">
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 media-link btn" id="gitHub">
                            <div className="row">
                                <div className="col-6 d-flex justify-content-start">
                                    <h3 className="pt-2 m-0 text-white"><a target="_blank" className="text-white" href="https://github.com/Brettwinterstrom">Github</a></h3>
                                </div>
                                <FaIcons.FaGithub size={50} />
                                <div className="col-6 d-flex justify-content-end align-items-center">
                                </div>
                            </div>
                        </div>
                        <div id="email" className="col-md-3 media-link btn" href="https://www.linkedin.com/in/brettwinterstrom/">
                            <div className="row">
                                <div className="col-6 d-flex justify-content-start">
                                    <h3 className="pt-2 m-0 text-white"><a target="_blank" className="text-white" href="mailto:brettwinterstrom@gmail.com">Email</a></h3>
                                </div>
                                <FaIcons.FaEnvelope size={50} />
                                <div className="col-6 d-flex justify-content-end align-items-center">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMe
