import React from 'react'
import { NavLink } from 'react-router-dom'

function Footers() {

    const date = new Date()

    return (
        <>

            <footer className="page-footer">
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-3 py-3">
                            <img src="../assets/img/ele.png" className="logo-footer" alt="" />


                                <p>
                                    This Open Source Notes Application is a versatile tool designed for users to capture, organize, and manage their notes effectively.
                                    This application was created specifically for students pursuing engineering degrees.
                                    Enables users to sync notes across devices, ensuring consistency and accessibility from anywhere.
                                </p>
                        </div>
                        <div className="col-lg-3 py-3">
                            <h5>Quick Links</h5>
                            <ul className="footer-menu">
                                <li><NavLink to='/*'>How it works</NavLink></li>
                                <li><NavLink to='/*'>Security</NavLink></li>
                                <li><NavLink to='/*'>Pricing</NavLink></li>
                                <li><NavLink to='/*'>Resources</NavLink></li>
                                <li><NavLink to='/*'>Report a Bug</NavLink></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 py-3">
                            <h5>About Us</h5>
                            <ul className="footer-menu">
                                <li><NavLink to='/about'>About Us</NavLink></li>
                                <li><NavLink to='/*'>Jobs</NavLink></li>
                                <li><NavLink to='/*'>Our Teams</NavLink></li>
                                <li><NavLink to='/*'>Testimonials</NavLink></li>
                                <li><NavLink to='/blog'>Blogs & Press</NavLink></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 py-3">
                            <h5>Follow Us</h5>
                            <div className="sosmed-button mt-4">
                                <NavLink to='/*' className="fb"><i className="fa-brands fa-facebook-f"></i></NavLink>
                                <NavLink to='/*' className="in"><i className="fa-brands fa-linkedin-in"></i></NavLink>
                                <NavLink to='/*' className="rd"><i className="fa-brands fa-reddit-alien"></i></NavLink>
                                <NavLink to='/*' className="env"><i className="fa-regular fa-envelope"></i></NavLink>
                                <NavLink to='/*' className="lnk"><i className="fa-solid fa-link"></i></NavLink>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6 py-2">
                            <p id="copyright">&copy; {date.getFullYear()} Eelenotes. All rights reserved</p>
                        </div>
                        <div className="col-sm-6 py-2 text-right">
                            <div className="d-inline-block px-3">
                                <NavLink to='/*' className="footer-item">Privacy Policy</NavLink>
                            </div>
                            <div className="d-inline-block px-3">
                                <NavLink to='/contact' className="footer-item">Contact Us</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </footer> 

        </>
    )
}

export default Footers
