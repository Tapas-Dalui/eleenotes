import React from 'react'
import { NavLink } from 'react-router-dom'
import banner3 from '../img/banner3.png'
import banner4 from '../img/banner4.png'

function Home() {
    return (
        <>
            <div class="back-to-top"></div>
            <div className="page-bannerr home-banner">
                <div className="container h-100">
                    <div className="row align-items-center h-100">
                        <div className="col-lg-6 py-3 wow fadeInUp">
                            <h1 className="mb-4">Welcome to <span className="marked">Eelenotes!</span></h1>
                            <p className="text-lg mb-5">Eelenots is an Open Source Application, designed for users to capture, organize, and manage their notes effectively. This application is created specifically for students pursuing engineering degrees.</p>

                            <NavLink to='/' className="btn btn-login">Login</NavLink>
                            <NavLink to='/' className="btn btn-outline  ml-2">Sign Up <div className="fab"><span className="mai-play"></span></div></NavLink>
                        </div>
                        <div className="col-lg-6 py-3 wow zoomIn">
                            <div className="img-place">
                                <img src={banner3} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <main>
                <div className="page-section features">
                    <div className="container">
                        <div className="text-center wow fadeInUp">
                            <div className="subhead">Follow Steps</div>
                            <h2 className="title-section">Follow <span className="marked">Simple</span> Steps For Access</h2>
                            <div className="divider mx-auto"></div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-6 col-lg-4 py-3 wow fadeInUp">
                                <div className="d-flex flex-row">
                                    <div className="img-fluid mr-3">
                                        <i className="fa-solid fa-1 number"></i>
                                    </div>
                                    <div>
                                        <h5>For New Registration</h5>
                                        <p className="steps">Students must enter correct information while registering, such as their name, email address, phone number, etc.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 py-3 wow fadeInUp">
                                <div className="d-flex flex-row">
                                    <div className="img-fluid mr-3">
                                        <i className="fa-solid fa-2 number"></i>
                                    </div>
                                    <div>
                                        <h5>Student Login</h5>
                                        <p className="steps">Students who have successfully registered can log in using their legitimate login credentials.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 py-3 wow fadeInUp">
                                <div className="d-flex flex-row">
                                    <div className="img-fluid mr-3">
                                        <i className="fa-solid fa-3 number"></i>
                                    </div>
                                    <div>
                                        <h5>Access Student Portal</h5>
                                        <p className="steps">Students can access all of the notes pertaining to their engineering degree at no cost after successfully logging in.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="page-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 py-3 wow zoomIn">
                                <div className="img-place text-center">
                                    <img src={banner4} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6 py-3 wow fadeInRight">
                                <h2 className="title-section">Thousands of <span className="marked">Free!</span> Notes Are Available For Students</h2>
                                <div className="divider"></div>
                                <p>We are happy to offer thousands of complimentary notes for students to aid them in their academic endeavors. Instructors confirm the notes. </p>

                                <NavLink to='/' className="btn btn-login">Login</NavLink>
                                <NavLink to='/' className="btn btn-outline border ml-2">Sign Up</NavLink>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="page-section counter-section">
                    <div className="container">
                        <div className="row align-items-center text-center">
                            <div className="col-lg-4">
                                <p>Registered Students</p>
                                <h2><span className="number" data-number="598278"></span></h2>
                            </div>
                            <div className="col-lg-4">

                                <p>Total Notes</p>
                                <h2><span className="number" data-number="216422"></span></h2>
                            </div>
                            <div className="col-lg-4">
                                <p>Notes Categories</p>
                                <h2><span className="number" data-number="100"></span><span className="number">+</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}

export default Home
