import React from 'react'
import banner from '../img/banner.png'
import person_1 from '../img/person/person_1.jpg'
import person_2 from '../img/person/person_2.jpg'
import { NavLink } from 'react-router-dom'


function About() {
    return (
        <>

            <div className="container mt-5">
                <div className="page-banner">
                    <div className="row justify-content-center align-items-center h-100">
                        <div className="col-md-6">
                            <nav aria-label="Breadcrumb">
                                <ul className="breadcrumb justify-content-center py-0 bg-transparent">
                                    <li className="breadcrumb-item"><NavLink  to="/">Home</NavLink></li>
                                    <li className="breadcrumb-item active">About</li>
                                </ul>
                            </nav>
                            <h1 className="text-center">About Us</h1>
                        </div>
                    </div>
                </div>
            </div>

            <main>
                <div className="page-section">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 py-3">
                                <div className="img-fluid text-center">
                                    <img src={banner} className="about-banner" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6 py-3 pr-lg-5">
                                <h2 className="title-section">Why you Choose <span className="marked">Eelenotes?</span></h2>
                                <div className="divider"></div>
                                
                                    <ul>
                                        <li><i className="fa-solid fa-circle"></i>
                                            The Eelenotes is a Open Source Notes Application, designed for Engineering Students to capture, organize, and manage their notes effectively.

                                        </li>
                                        <li><i className="fa-solid fa-circle"></i>
                                            Developed under an open-source license, it fosters collaboration, customization, and community-driven enhancements.
                                        </li>
                                        <li><i className="fa-solid fa-circle"></i>
                                            Facilitates tagging and categorization of notes for easy retrieval and organization.
                                        </li>
                                        <li><i className="fa-solid fa-circle"></i>
                                            Ensures data security and privacy through robust encryption mechanisms, protecting sensitive information.
                                        </li>
                                    </ul>
                                
                                <NavLink to='/about' className="btn btn-login">Login</NavLink>
                                <NavLink to='/about' className="btn btn-outline border ml-2">Sign Up</NavLink>
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

                
                <div className="page-section bg-light">
                    <div className="container">

                        <div className="owl-carousel" id="testimonials">
                            <div className="item">
                                <div className="row align-items-center">
                                    <div className="col-md-6 py-3">
                                        <div className="testi-image">
                                            <img src={person_1} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 py-3">
                                        <div className="testi-content">
                                            <p>Necessitatibus ipsum magni accusantium consequatur delectus a repudiandae nemo quisquam dolorum itaque, tenetur, esse optio eveniet beatae explicabo sapiente quo.</p>
                                            <div className="entry-footer">
                                                <strong>Melvin Platje</strong> &mdash; <span className="text-grey">CEO Slurin Group</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="row align-items-center">
                                    <div className="col-md-6 py-3">
                                        <div className="testi-image">
                                            <img src={person_2} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 py-3">
                                        <div className="testi-content">
                                            <p>Repudiandae vero assumenda sequi labore ipsum eos ducimus provident a nam vitae et, dolorum temporibus inventore quaerat consectetur quos! Animi, qui ratione?</p>
                                            <div className="entry-footer">
                                                <strong>George Burke</strong> &mdash; <span className="text-grey">CEO Letro</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </main>

        </>
    )
}

export default About
