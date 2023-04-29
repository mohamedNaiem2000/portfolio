import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Welcome from '../../Components/Welcome/Welcome';
import About from '../../Components/About/About';
import Resume from '../../Components/Resume/Resume';
import Servicess from '../../Components/Servicess/Servicess';
import Skills from '../../Components/Skills/Skills';
import Project from '../../Components/Project/Project';
import Blog from '../../Components/Blog/Blog';
import Counter from '../../Components/Counter/Counter';
import Available from '../../Components/Available/Available';


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
            <Blog/>
            <Counter/>
            <Available/>
        </div>
    );
}

export default Home;