import React from 'react'
import person_1 from '../img/person/person_1.jpg'
import person_2 from '../img/person/person_2.jpg'
import person_3 from '../img/person/person_3.jpg'
import { NavLink } from 'react-router-dom'


function Blog() {
    return (
        <>
            <div className="container mt-5">
                <div className="page-banner">
                    <div className="row justify-content-center align-items-center h-100">
                        <div className="col-md-6">
                            <nav aria-label="Breadcrumb">
                                <ul className="breadcrumb justify-content-center py-0 bg-transparent">
                                    <li className="breadcrumb-item"><NavLink to='/'>Home</NavLink></li>
                                    <li className="breadcrumb-item active">Blogs</li>
                                </ul>
                            </nav>
                            <h1 className="text-center">Blogs</h1>
                        </div>
                    </div>
                </div>
            </div>

            <main>
                <div className="page-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-4 py-3">
                                <div className="card-blog">
                                    <div className="header">
                                        <div className="avatar">
                                            <img src={person_1} alt="" />
                                        </div>
                                        <div className="entry-footer">
                                            <div className="post-author">Sam Newman</div>
                                            <NavLink  className="post-date">23 Apr 2020</NavLink>
                                        </div>
                                    </div>
                                    <div className="body">
                                        <div className="post-title"><NavLink to='/blog'>What is Business Management?</NavLink></div>
                                        <div className="post-excerpt">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                                    </div>
                                    <div className="footer">
                                        <NavLink to='/blog' className="read-more">Read More <i className="fa-solid fa-chevron-right"></i></NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 py-3">
                                <div className="card-blog">
                                    <div className="header">
                                        <div className="avatar">
                                            <img src={person_2} alt="" />
                                        </div>
                                        <div className="entry-footer">
                                            <div className="post-author">Sam Newman</div>
                                            <NavLink  className="post-date">23 Apr 2020</NavLink>
                                        </div>
                                    </div>
                                    <div className="body">
                                        <div className="post-title"><NavLink to='/blog'>What is Assets Management?</NavLink></div>
                                        <div className="post-excerpt">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                                    </div>
                                    <div className="footer">
                                        <NavLink to='/blog' className="read-more">Read More <i className="fa-solid fa-chevron-right"></i></NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 py-3">
                                <div className="card-blog">
                                    <div className="header">
                                        <div className="avatar">
                                            <img src={person_3} alt="" />
                                        </div>
                                        <div className="entry-footer">
                                            <div className="post-author">Sam Newman</div>
                                            <NavLink  className="post-date">23 Apr 2020</NavLink>
                                        </div>
                                    </div>
                                    <div className="body">
                                        <div className="post-title"><NavLink to='/blog'>What is Code of Conduct Business?</NavLink></div>
                                        <div className="post-excerpt">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                                    </div>
                                    <div className="footer">
                                        <NavLink to='/blog' className="read-more">Read More <i className="fa-solid fa-chevron-right"></i></NavLink>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 py-3">
                                <div className="card-blog">
                                    <div className="header">
                                        <div className="avatar">
                                            <img src={person_1} alt="" />
                                        </div>
                                        <div className="entry-footer">
                                            <div className="post-author">Sam Newman</div>
                                            <NavLink  className="post-date">23 Apr 2020</NavLink>
                                        </div>
                                    </div>
                                    <div className="body">
                                        <div className="post-title"><NavLink to='/blog'>What is Business Management?</NavLink></div>
                                        <div className="post-excerpt">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                                    </div>
                                    <div className="footer">
                                        <NavLink to='/blog' className="read-more">Read More <i className="fa-solid fa-chevron-right"></i></NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 py-3">
                                <div className="card-blog">
                                    <div className="header">
                                        <div className="avatar">
                                            <img src={person_2} alt="" />
                                        </div>
                                        <div className="entry-footer">
                                            <div className="post-author">Sam Newman</div>
                                            <NavLink  className="post-date">23 Apr 2020</NavLink>
                                        </div>
                                    </div>
                                    <div className="body">
                                        <div className="post-title"><NavLink to='/blog'>What is Assets Management?</NavLink></div>
                                        <div className="post-excerpt">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                                    </div>
                                    <div className="footer">
                                        <NavLink to='/blog' className="read-more">Read More <i className="fa-solid fa-chevron-right"></i></NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 py-3">
                                <div className="card-blog">
                                    <div className="header">
                                        <div className="avatar">
                                            <img src={person_3} alt="" />
                                        </div>
                                        <div className="entry-footer">
                                            <div className="post-author">Sam Newman</div>
                                            <NavLink  className="post-date">23 Apr 2020</NavLink>
                                        </div>
                                    </div>
                                    <div className="body">
                                        <div className="post-title"><NavLink to='/blog'>What is Code of Conduct Business?</NavLink></div>
                                        <div className="post-excerpt">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                                    </div>
                                    <div className="footer">
                                        <NavLink to='/blog' className="read-more">Read More <i className="fa-solid fa-chevron-right"></i></NavLink>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 py-3">
                                <div className="card-blog">
                                    <div className="header">
                                        <div className="avatar">
                                            <img src={person_1} alt="" />
                                        </div>
                                        <div className="entry-footer">
                                            <div className="post-author">Sam Newman</div>
                                            <NavLink  className="post-date">23 Apr 2020</NavLink>
                                        </div>
                                    </div>
                                    <div className="body">
                                        <div className="post-title"><NavLink to='/blog'>What is Business Management?</NavLink></div>
                                        <div className="post-excerpt">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                                    </div>
                                    <div className="footer">
                                        <NavLink to='/blog' className="read-more">Read More <i className="fa-solid fa-chevron-right"></i></NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 py-3">
                                <div className="card-blog">
                                    <div className="header">
                                        <div className="avatar">
                                            <img src={person_2} alt="" />
                                        </div>
                                        <div className="entry-footer">
                                            <div className="post-author">Sam Newman</div>
                                            <NavLink  className="post-date">23 Apr 2020</NavLink>
                                        </div>
                                    </div>
                                    <div className="body">
                                        <div className="post-title"><NavLink to='/blog'>What is Assets Management?</NavLink></div>
                                        <div className="post-excerpt">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                                    </div>
                                    <div className="footer">
                                        <NavLink to='/blog' className="read-more">Read More <i className="fa-solid fa-chevron-right"></i></NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 py-3">
                                <div className="card-blog">
                                    <div className="header">
                                        <div className="avatar">
                                            <img src={person_3} alt="" />
                                        </div>
                                        <div className="entry-footer">
                                            <div className="post-author">Sam Newman</div>
                                            <NavLink  className="post-date">23 Apr 2020</NavLink>
                                        </div>
                                    </div>
                                    <div className="body">
                                        <div className="post-title"><NavLink to='/blog'>What is Code of Conduct Business?</NavLink></div>
                                        <div className="post-excerpt">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                                    </div>
                                    <div className="footer">
                                        <NavLink to='/blog' className="read-more">Read More <i className="fa-solid fa-chevron-right"></i></NavLink>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 mt-5">
                                <nav aria-label="Page Navigation">
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item disabled">
                                            <NavLink className="page-link"  tabindex="-1" aria-disabled="true">Previous</NavLink>
                                        </li>
                                        <li className="page-item"><NavLink className="page-link" >1</NavLink></li>
                                        <li className="page-item active" aria-current="page">
                                            <NavLink className="page-link" >2 <span className="sr-only">(current)</span></NavLink>
                                        </li>
                                        <li className="page-item"><NavLink className="page-link" >3</NavLink></li>
                                        <li className="page-item">
                                            <NavLink className="page-link" >Next</NavLink>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                        </div>

                    </div>
                </div>
            </main>

        </>
    )
}

export default Blog
