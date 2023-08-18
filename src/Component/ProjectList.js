import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const ProjectList = (props) => {

    return (
        <>
            <div class="project-item">
                <div class="project-info">
                    <h1>{props.title}</h1>
                    <h2>{props.sub_title}</h2>
                    <p className='project-text'>{props.desc}</p>
                    <Link to = {props.url}><button className='btn read-btn rounded-pill text-white py-2 px-5 mt-4'>View Source Code</button></Link>
                </div>
                <div class="project-img">
                    <img src={props.img} alt="img" />
                </div>
            </div>
        </>



    )
}

export default ProjectList