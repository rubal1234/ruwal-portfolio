import React from 'react'
import '../Css/Contact.css'
const Contact = () => {
    return (
        <div>
            <section id="contact">
                <div class="contact container">
                    <div className='pt-md-5 mt-md-3'>
                        <h1 class="section-title">Con<span>tact</span></h1>
                    </div>
                    <div class="contact-items pt-md-5 mt-md-5">
                        <div class="contact-item">
                            <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/phone.png" /></div>
                            <div class="contact-info">
                                <h1>Phone</h1>
                                <h2>+44 7737811625</h2>
                            </div>
                        </div>
                        <div class="contact-item">
                            <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/new-post.png" /></div>
                            <div class="contact-info">
                                <h1>Email</h1>
                                <h2>ruwalkumarshah@gmail.com</h2>
                            </div>
                        </div>
                        <div class="contact-item">
                            <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/map-marker.png" /></div>
                            <div class="contact-info">
                                <h1>Address</h1>
                                <h2>E15 4HR, Hurry Close London, UK</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact