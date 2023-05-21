import React from "react";
import Navbar from "./components/Navbar.jsx"
import Home from "./components/Home.jsx";
import SocialLinks from "./components/SocialLinks.jsx";
import About from "./components/About.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
function App() {
    return (
        <div>
            <Navbar></Navbar>
            <Home></Home>
            <About></About>
            <Portfolio></Portfolio>
            <Experience></Experience>
            <Contact></Contact>
            <SocialLinks></SocialLinks>
            
        </div>
    );
}

export default App;
