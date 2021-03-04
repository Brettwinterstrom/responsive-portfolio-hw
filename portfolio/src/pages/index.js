import React, { useState } from 'react'
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Intro from '../components/Intro';
import AboutMe from '../components/AboutMe';

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
        </>
    )
}

export default Home
