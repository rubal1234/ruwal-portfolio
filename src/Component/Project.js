import React from 'react'
import '../Css/Project.css'
import Image from '../Images/img-1.png'
import login from '../Images/login.PNG'
import register from '../Images/register.PNG'
import capture1 from '../Images/sc1.PNG'
import capture2 from '../Images/sc2.PNG'
import capture3 from '../Images/sc3.PNG'
import capture4 from '../Images/sc4.PNG'
import capture5 from '../Images/sc5.PNG'
import capture6 from '../Images/sc6.PNG'
import capture7 from '../Images/sc7.PNG'
import capture8 from '../Images/sc8.PNG'
import capture9 from '../Images/sc9.PNG'
import capture10 from '../Images/sc10.PNG'
import capture11 from '../Images/sc11.PNG'
import ProjectList from './ProjectList'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Project = () => {
    const projects = [
        {
            title : 'Bank Management System',
            url : 'https://github.com/rubal1234/Banking-Management-System/tree/master/BankAplication',
            sub_title : 'Language used are Java | Advance Java | Servlet | mySql | HTML | CSS | JS',
            desc : 'The Banking Management System is a comprehensive software solution designed to streamline and automate various banking operations and processes. It provides an integrated platform for managing day-to-day banking activities, customer accounts, transactions, and other related tasks.With the Banking Management System, banks can effectively manage their operations, improve efficiency, and enhance customer service. The system offers a range of features and functionalities that cater to the diverse needs of banks, including'
        },
        {
            title : 'Facebook Clone',
            url : 'https://github.com/rubal1234/facebook',
            sub_title : 'Language used are Php | mySql | Bootstrap5 | jQuery | HTML | CSS',
            desc : 'Welcome to my Facebook Clone project! This project aims to recreate the core features and functionalities of the popular social media platform, Facebook. By building this clone, I have sought to provide users with a familiar and immersive experience that closely resembles the original Facebook interface.'
        },
        {
            title : 'Budgety Calculator',
            url : 'https://github.com/rubal1234/Budgety-Calculator/tree/master/Budgety%20Calculator/WebContent',
            sub_title : 'Language used are Javascript | HTML | CSS',
            desc : 'Welcome to Budgety Calculator, a handy tool built with JavaScript, HTML, and CSS to help you keep track of your income and expenses. With this intuitive and user-friendly application, you can effectively manage your financial records and gain insights into your budgeting habits'
        },
        {
            title : 'Hostel App UI',
            url : 'https://github.com/rubal1234/Hostel-App',
            sub_title : 'Language used are Bootstrap5 | jQuery | HTML | CSS',
            desc : 'Introducing Hostel App - Your Ultimate Solution for Finding Hostel. Welcome to the Hostel App, a powerful tool designed to simplify the process of creating and planning hostel spaces. Whether you are an architect, interior designer, or hostel owner, this app is your go-to resource for crafting functional, aesthetically pleasing, and efficient hostel environments'
        }
    ]
  return (
    <section id="projects">
        <div class="projects container">
            <div class="projects-header p-3 p-sm-0">
                <h1 class="section-title">Proj<span>ects</span></h1>
            </div>
   
            <div className='carousel-row'>
                <div className='col-12 col-xl-5 carousel-part'>
                   <p class="section-title text-start" style={{"lineHeight" : "40px"}}><span>Recently</span> Added</p>
                   <p className='section-title text-start mt-5' style={{"fontSize" : "26px", "lineHeight" : "30px"}}>Appointment <span>Booking System</span></p>
                   <p className = "project-desc">This system was created to address real-time challenges that individuals or organizations encounter in their day-to-day lives, particularly when there's a requirement to manage daily appointment scheduling for clients or users. This solution is versatile and applicable across various industries such as healthcare, hospitality, and numerous other small and large enterprises.</p>
                   <p className = "project-desc">Languages used are: React, Bootstrap5, Node, mySql</p>
                </div>
                <div className='col-12 col-xl-7 carousel-part'>
                <Carousel autoPlay={true} interval={3000} infiniteLoop={true}>
                    <div className='carousel-div'>
                        <img src= {login} />
                        <p className="legend">Login Page</p>
                    </div>

                    <div className='carousel-div'>
                        <img src= {register} />
                        <p className="legend">Register Page</p>
                    </div>

                    <div className='carousel-div'>
                        <img src= {capture1} />
                        <p className="legend">Home Page</p>
                    </div>
                    <div className='carousel-div'>
                        <img src={capture2} />
                        <p className="legend">Appointment Booking Page for Clients</p>
                    </div>
                    <div className='carousel-div'>
                        <img src={capture3} />
                        <p className="legend">Availabe Slots After Selecting Particularl Date</p>
                    </div>
                    <div className='carousel-div'>
                        <img src={capture4} />
                        <p className="legend">Step-1 of Booking Process</p>
                    </div>
                    <div className='carousel-div'>
                        <img src={capture5} />
                        <p className="legend">Step-2 of Booking Process</p>
                    </div>
                    <div className='carousel-div'>
                        <img src={capture6} />
                        <p className="legend">Step-3 of Booking Process</p>
                    </div>
                    <div className='carousel-div'>
                        <img src={capture7} />
                        <p className="legend">Profile Page of Client</p>
                    </div>
                    <div className='carousel-div'>
                        <img src={capture8} />
                        <p className="legend">Availabe Appointment Page of Client</p>
                    </div>
                    <div className='carousel-div'>
                        <img src={capture9} />
                        <p className="legend">Create Event Page for Admin Panel</p>
                    </div>
                    <div className='carousel-div'>
                        <img src={capture10} />
                        <p className="legend">All User Page</p>
                    </div>
                    <div className='carousel-div'>
                        <img src={capture11} />
                        <p className="legend">All Booked Appointment Page</p>
                    </div>
                </Carousel>
                </div>
            </div>

            <div class="all-projects">
                {projects.map( (oldval,index) => {
                    return <ProjectList key = {index} title = {oldval.title} url = {oldval.url} sub_title = {oldval.sub_title} desc = {oldval.desc} img = {Image}></ProjectList>
                })}
            </div>
        </div>
  </section>
  )
}

export default Project