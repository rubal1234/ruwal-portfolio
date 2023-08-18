import React, { useRef } from 'react';
import '../Css/Home.css';
import User from '../Images/user.jpg';
import Service from './Service';
import Project from './Project';
import About from './About';
import Skill from './Skill';
import Contact from './Contact';
const Home = () => {

const handleDownload = async() => {
    fetch('RuwalCV.docx').then(response => {
        response.blob().then(blob => {
            const fileURL = window.URL.createObjectURL(blob);
            const currentDate = new Date();
            const formattedDate = currentDate.toISOString().slice(0, 10);
            const timestamp = currentDate.getTime();
            const fileName = `Ruwal_Kumar_Shah_CV_${formattedDate}_${timestamp}.docx`;
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = fileName;
            alink.click();
        })
    })
}
  
  return (
    <>
        <section id="hero">
            <div className="hero hero-container d-flex justify-content-start align-items-center">
                
            <div>
                <h1>Hello, <span></span></h1>
                <h1>My Name is <span></span></h1>
                <h1>Ruwal <span></span></h1>
                <button type="button" className="cta" onClick={handleDownload}>Download CV</button>
            </div>
            </div>
        </section>

        <Service></Service>
        <Project></Project>
        <About handleDownload = {handleDownload}></About>
        <Skill></Skill>
        <Contact></Contact>
    </>
  );
};

export default Home;
