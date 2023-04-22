import React from 'react';
import './Navbar.css'
function Navbar(props) {
    return (
        <div>
           <div class="header" id="header">
   <div class="container">
    <a href="#" class="logo">CLARK</a>

    <ul class="main-nav">
        <li><a href="#Article">Home</a></li>
        <li><a href="#Gallery">About</a></li>
        <li><a href="#Features">Resume</a></li>
        <li><a href="#Other-links">Services</a></li>
        <li><a href="#Other-links">Skills</a></li>
        <li><a href="#Other-links">Projects</a></li>
        <li><a href="#Other-links">My Blog</a></li>
        <li><a href="#Other-links">Contact</a></li>
    </ul>
   </div>
    </div>
        </div>
    );
}

export default Navbar;