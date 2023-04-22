import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Welcome from '../../Components/Welcome/Welcome';
import About from '../../Components/About/About';
import Resume from '../../Components/Resume/Resume';
import Servicess from '../../Components/Servicess/Servicess';
import Skills from '../../Components/Skills/Skills';

function Home(props) {
    return (
        <div>
            <Navbar/>
            <Welcome/>
            <About/>
            <Resume/>
            <Servicess/>
            <Skills/>
        </div>
    );
}

export default Home;