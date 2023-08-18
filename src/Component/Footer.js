import React from 'react'
import '../Css/Footer.css'
import linkedin from '../Images/linkedin.png'
import facebook from '../Images/facebook.png'
import hackerrank from '../Images/hackerrank.png'
import github from '../Images/github.png'
const Footer = () => {
    return (
        <section id="footer">
            <div class="footer d-flex justify-content-center align-items-center">
                <div class="brand">
                    <h1><span>R</span>uwal <span>K</span>umar</h1>
                </div>
                <h2>Your Complete Web Solution</h2>
                <div class="social-icon">
                    <div class="social-item">
                        <a href="https://www.facebook.com/thaquree.rozan/"><img src={facebook} className='w-100 h-100'/></a>
                    </div>
                    <div class="social-item">
                        <a href="https://github.com/rubal1234"><img src={github} className='w-100 h-100'/></a>
                    </div>
                    <div class="social-item">
                        <a href="https://www.linkedin.com/in/ruwal-kumar-shah-3594361a0/"><img src= {linkedin} className='w-100 h-100'/></a>
                    </div>
                    <div class="social-item">
                        <a href="https://www.hackerrank.com/ruwalkumarshah?hr_r=1"><img src={hackerrank} className='w-100 h-100'/></a>
                    </div>
                </div>
                <p>Copyright © 2023 Ruwal. All rights reserved</p>
            </div>
        </section>
    )
}

export default Footer