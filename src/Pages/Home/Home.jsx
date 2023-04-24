import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Welcome from '../../Components/Welcome/Welcome';
import About from '../../Components/About/About';
import Resume from '../../Components/Resume/Resume';
import Servicess from '../../Components/Servicess/Servicess';
import Skills from '../../Components/Skills/Skills';
import Project from '../../Components/Project/Project';

function Home(props) {
    return (
        <div>
            <Navbar/>
            <Welcome/>
            <About/>
            <Resume/>
            <Servicess/>
            <Skills/>
            <Project/>
        </div>
    );
}

export default Home;