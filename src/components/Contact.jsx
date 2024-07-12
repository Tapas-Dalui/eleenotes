import React from 'react'
import { NavLink } from 'react-router-dom'

function Contact() {
    return (
        <>

            <div className="container mt-5">
                <div className="page-banner">
                    <div className="row justify-content-center align-items-center h-100">
                        <div className="col-md-6">
                            <nav aria-label="Breadcrumb">
                                <ul className="breadcrumb justify-content-center py-0 bg-transparent">
                                    <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                                    <li className="breadcrumb-item active">Contact</li>
                                </ul>
                            </nav>
                            <h1 className="text-center">Contact Us</h1>
                        </div>
                    </div>
                </div>
            </div>

            <main>
                <div className="page-section">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 py-3">
                                <h2 className="title-section">Get in Touch</h2>
                                <div className="divider"></div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Laborum ratione autem quidem veritatis!</p>

                                <ul className="contact-list">
                                    <li>
                                        <div className="icon"><i className="fa-regular fa-map"></i></div>
                                        <div className="content">23/B Salt Lake, Sector V, WB</div>
                                    </li>
                                    <li>
                                        <div className="icon"><i className="fa-regular fa-envelope"></i></div>
                                        <div className="content"><NavLink to='/contact'>info@eelenotes.com</NavLink> </div>
                                    </li>
                                    <li>
                                        <div className="icon"><i className="fa-solid fa-phone"></i></div>
                                        <div className="content"><NavLink to='/contact'>+91 7532 2357 98</NavLink> </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6 py-3">
                                <div className="subhead">Contact Us</div>
                                <h2 className="title-section">Drop Us a Line</h2>
                                <div className="divider"></div>

                                <form action="#">
                                    <div className="py-2">
                                        <input type="text" className="form-control" placeholder="Full name" />
                                    </div>
                                    <div className="py-2">
                                        <input type="text" className="form-control" placeholder="Email" />
                                    </div>
                                    <div className="py-2">
                                        <textarea rows="6" className="form-control" placeholder="Enter message"></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-login mt-4">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}

export default Contact
