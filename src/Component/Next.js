import React from 'react'
import '../Css/Home.css'
import User from '../Images/user.jpg'
const Next = () => {
    return (
        <>
            <div class="theme position-fixed h-100 d-none d-lg-block"></div>
            <div className='container'>
                <div className='row'>
                    <div className='col-8 col-lg-6 mt-5 pt-5'>
                        <div className='first-left-div mt-5'>
                            <div className='greet-text'>
                                <p className='mb-auto'>Hello, I'm</p>
                            </div>
                            <div className='name-div'>
                                <h1>Ruwal Shah</h1>
                            </div>
                            <div className='headline-div'>
                                <p>Full Stack Developer | Java | React.js | jQuery <br />Bootstrap5 | Php | mySql | Html | Css</p>
                            </div>
                            <div className='resume-div mt-4'>
                                <button className='btn default-btn text-white py-2'>Download Resume</button>
                            </div>
                            <div className='social-icon-div mt-4'>
                                <div className='row'>

                                    <div className='col-4 col-xl-3 social-icon-container pe-0'>
                                        <button className='btn default-btn text-white d-flex align-items-end w-100'>Github<i class="bi bi-github"></i></button>
                                    </div>

                                    <div className='col-4 col-xl-3 social-icon-container pe-0'>
                                        <button className='btn default-btn text-white d-flex align-items-end w-100'>Facebook<i class="bi bi-facebook"></i></button>
                                    </div>

                                    <div className='col-4 col-xl-3 social-icon-container'>
                                        <button className='btn default-btn text-white d-flex align-items-end w-100'>linkedin<i class="bi bi-linkedin"></i></button>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='d-none d-lg-block col-6 mt-5 pt-5 d-flex justify-content-end'>
                        <div className='first-right-div mt-5'>
                            <div className='right-container'>
                                <p>
                                    <pre>1. print("hello world");</pre>
                                    <pre>2. echo "hello world";</pre>
                                    <pre>3. console.log("hello")</pre>
                                    <pre>4. document.write("hello world");</pre>
                                    <pre>5. System.out.println("hello world");</pre>

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Next