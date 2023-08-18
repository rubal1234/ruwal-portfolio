import React, { useState } from 'react'
import '../Css/Service.css';
import ServiceList from './ServiceList';
import SoftwareImg from '../Images/software.png';
import WebDevelopment from '../Images/web-development.png';
import Ui from '../Images/ui.png';
const Service = () => {

    const service_text = [
        {
            img: SoftwareImg,
            title: 'Software Development',
            text: 'Offer comprehensive software development services tailored to meet your specific business needs. Utilize cutting-edge technologies and best practices to create high-quality software solutions. From conceptualization to deployment, I handle every phase of the software development life cycle with precision and attention to detail.'
        },
        {
            img: WebDevelopment,
            title: 'Web Application Development',
            text: 'My web development service provides tailored solutions to help your business establish a strong online presence .I utilize the latest technologies and frameworks to build robust and scalable web applications. I follow best practices in web development to ensure clean code, optimal performance, and cross-browser compatibility.'
        },
        {
            img: Ui,
            title: 'User Interface Development',
            text: 'My user interface (UI) development service focuses on creating visually appealing and intuitive interfaces that enhance the user experience. I combine design principles, usability best practices, and the latest front-end technologies to deliver outstanding UI solutions. I work closely with designers to bring wireframes and mockups to life.'
        }
    ]
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <section id="services">
                        <div className="services">
                            <div className='row'>
                                <div className='col'>
                                    <div className="service-top">
                                        <h1 className="section-title">Serv<span>i</span>ces</h1>
                                    </div>
                                </div>
                            </div>
                                <div className='row'>
                                    {service_text.map((index, i) => {
                                        return <ServiceList key={i} imgSrc={index.img} title={index.title} text={index.text}></ServiceList>
                                    })}
                                </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Service