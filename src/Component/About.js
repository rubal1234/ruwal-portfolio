import React from 'react'
import '../Css/About.css'
import User from '../Images/user.jpg'

const About = (props) => {

    const handleDownload = () => {
        props.handleDownload();
    }
  return (
    <section id="about">
    <div class="about d-flex justify-content-center">
      <div class="col-left">
        <div class="about-img">
          <img src= {User} alt="img" className='w-100 h-100'/>
        </div>
      </div>
      <div class="col-right">
        <h1 class="section-title">About <span>me</span></h1>
        <h2>Full Stack Developer</h2>
        <p>Hello, I'm Ruwal Kumar Shah, a passionate tech enthusiast and a full stack developer. With a deep love for technology and a knack for problem-solving, I find immense joy in crafting innovative and robust software solutions.
        My technical skillset includes proficiency in frontend technologies such as HTML, CSS, Bootstrap5 and JavaScript, along with popular library like React.js and jQuery for building dynamic and interactive user interfaces. On the backend, I have experience with server-side technologies such as Php and Java, as well as working with databases like MySQL.
        </p>
          <button type="button" className="cta" onClick={handleDownload}>Download CV</button>
      </div>
    </div>
  </section>
  )
}

export default About