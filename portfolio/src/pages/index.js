import React, { useState } from 'react'
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Intro from '../components/Intro';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import ContactMe from '../components/ContactMe';
import Footer from '../components/Footer';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Intro />
            <AboutMe />
            <Projects />
            <ContactMe />
            <Footer />
        </>
    )
}

export default Home
