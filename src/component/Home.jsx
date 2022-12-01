import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <>


            <div className='container header'>
                <div className='row'>
                    <div className='col-md-12'>
                        <img className='header-img' src="/images/toplayer.svg" alt="" />
                        <div className='header-nav'>
                            <img src="/images/logo.svg" alt="" />
                            <div className='drop-item'>
                                <div className="dropdown">
                                    <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">
                                        Who We Help
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><NavLink className="dropdown-item" to="/dashboard">Link 1</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="/dashboard">Link 2</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="/dashboard">Link 3</NavLink></li>
                                    </ul>
                                </div>
                                <div className="dropdown">
                                    <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">
                                        What We Do
                                    </button>
                                    <ul class="dropdown-menu">
                                    <li><NavLink className="dropdown-item" to="/dashboard">Link 1</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="/dashboard">Link 2</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="/dashboard">Link 3</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            <button className='header-btn'>Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-6 banner'>
                        <h4>Grow Your<br></br>
                            Business Online</h4>
                        <p>Onlineable assists businesses in achieving
                            enduring ecommerce growth via managed outsourcing.</p>
                        <button>Let’s Talk</button>
                    </div>
                    <div className='col-md-6 bannerimg'>
                        <img src="/images/banner.svg" alt="" />
                    </div>
                </div>
            </div>

            <div className='container-fluid waves'>
                <div className='row'>
                    <div className='col-md-12 background-waves'>
                        <img src="/images/Maskgroup.svg" alt="" />
                    </div>
                </div>
            </div>

            <div className='container margin-auto'>
                <div className='row'>
                    <div className='col-md-4 '></div>
                    <div className='col-md-4 margin-auto midarticle'>
                        <h5>How It Works</h5>
                        <p className='bottom-line'></p>
                    </div>
                    <div className='col-md-4'></div>
                </div>
            </div>

            <div className='container card-block'>
                <div className='row'>
                    <div className='col-md-3 '>
                        <div className="imgcard text-center">
                            <div className='circle'>
                                <img src="/images/icon1.svg" alt="" />
                            </div>
                            <h6>1. Discovery</h6>
                            <p >Define the goals and determine what will be contracted out.</p>
                        </div>
                    </div>
                    <div className='col-md-3 '>
                        <div className="imgcard text-center">
                            <div className='circle2'>
                                <img src="/images/icon4.svg" alt="" />
                            </div>
                            <h6>2. Organising</h6>
                            <p >Adapt the project's structure to the requirements of the company.</p>
                        </div>
                    </div>
                    <div className='col-md-3 '>
                        <div className="imgcard text-center">
                            <div className='circle'>
                                <img src="/images/icon3.svg" alt="" />
                            </div>
                            <h6>3. Implementation</h6>
                            <p >Get started now that the project management and resources are ready.</p>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="imgcard text-center">
                            <div className='circle2'>
                                <img src="/images/icon2.svg" alt="" />
                            </div>
                            <h6>4. Optimisation</h6>
                            <p >Evaluate how things are going and make any process adjustments.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container invisible my-5'>
                <div className='row my-5'>
                    <div className='col-md-4 my-5 py-5'></div>
                    <div className='col-md-4 my-5 py-5 midarticle'> </div>
                    <div className='col-md-4 my-5 py-5'></div>
                </div>
            </div>

            <div className='container my-5'>
                <div className='row my-5'>
                    <div className='col-md-4 '></div>
                    <div className='col-md-4  midarticle'>
                        <h5>Our Services</h5>
                        <p className='bottom-line'></p>
                    </div>
                    <div className='col-md-4 '></div>
                </div>
            </div>

            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-7 service-block'>
                        <h4>SEO</h4>
                        <p>By engaging in strategic long-term SEO, we help you climb to the top of the organic rankings, producing bankable results over time.<br></br><br></br>

                            Recognizing the factors that are holding back your success in search engines is key and we are committed to developing the most effective strategy specifically for your business.<br></br><br></br>

                            We create focused traffic that turns into sales and ROI by fusing performance marketing methods with search engine optimization.</p>
                        <button>Learn More</button>
                    </div>
                    <div className='col-md-1'></div>
                    <div className='col-md-4 bannerimg'>
                        <img src="/images/seo.svg" alt="" />
                    </div>
                </div>
            </div>

            <div className='container my-5'>
                <div className='row'>
                    <div className='col-md-4 bannerimg'>
                        <img src="/images/ecom.svg" alt="" />
                    </div>
                    <div className='col-md-1'></div>
                    <div className='col-md-7 service-block'>
                        <h4>eCommerce</h4>
                        <p>We provide a high level integration support for payment gateways, CRM, ERP and data feeds including Google, Facebook, Instagram, Amazon, Ebay & more.<br></br><br></br>

                            We abide by a structured content management system for database uploads and data visibility enhancements in a collaborative environment.<br></br><br></br>

                            We can manage your paid search channels, clear errors and optimise listings across marketplaces.</p>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-7 service-block'>
                        <h4>Web Development</h4>
                        <p>We provide sustainable web development solutions via our highly skilled and creative offshore team.<br></br><br></br>

                            We are your development partner for eCommerce and service-based businesses, where we monitor performance, build enhancements, and perform regular maintenance.<br></br><br></br>

                            Our development work is based on SEO-friendly principles to ensure the development budget is being driven by a measurable and beneficialreturn on investment wherever possible.</p>
                        <button>Learn More</button>
                    </div>
                    <div className='col-md-1'></div>
                    <div className='col-md-4 bannerimg'>
                        <img src="/images/web.svg" alt="" />
                    </div>
                </div>
            </div>

            <div className='container-fluid waves'>
                <div className='row'>
                    <div className='col-md-12'>
                        <img src="/images/flipwav.svg" alt="" />
                    </div>
                </div>
            </div>


            <div className='container my-5'>
                <div className='row my-5'>
                    <div className='col-md-3 '></div>
                    <div className='col-md-6  midarticle'>
                        <h5>Software We Use</h5>
                        <p className='bottom-line'></p>
                    </div>
                    <div className='col-md-3 '></div>
                </div>
            </div>


            <div className='container-fluid icon-table'>
                <div className='row'>
                    <div className='col-md-2 text-center'></div>
                    <div className='col-md-2 text-center'>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><img className='footer-icon' src="/images/software-icon/shoping.svg" alt="" /></li>
                            <li class="list-group-item"><img className='footer-icon' src="/images/software-icon/adword.svg" alt="" /></li>
                            <li class="list-group-item"><img className='footer-icon' src="/images/software-icon/analytics.svg" alt="" /></li>
                            <li class="list-group-item"><img className='footer-icon' src="/images/software-icon/woocommerce.svg" alt="" /></li>
                        </ul>
                    </div>
                    <div className='col-md-2 text-center'>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><img className='footer-icon' src="/images/software-icon/magento.svg" alt="" /></li>
                            <li class="list-group-item"><img className='footer-icon' src="/images/software-icon/hubshot.svg" alt="" /></li>
                            <li class="list-group-item"><img className='footer-icon' src="/images/software-icon/wordpress.svg" alt="" /></li>
                            <li class="list-group-item"><img className='footer-icon' src="/images/software-icon/jira.svg" alt="" /></li>
                            <li class="list-group-item"><img className='footer-icon' src="/images/software-icon/ebay.svg" alt="" /></li>
                        </ul>
                    </div>
                    <div className='col-md-2 text-center'>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><img className='footer-icon' src="/images/software-icon/amajon.svg" alt="" /></li>
                            <li class="list-group-item"><img className='footer-icon' src="/images/software-icon/css.svg" alt="" /></li>
                            <li class="list-group-item"><img className='footer-icon' src="/images/software-icon/html.svg" alt="" /></li>
                            <li class="list-group-item"><img className='footer-icon' src="/images/software-icon/react.svg" alt="" /></li>
                            <li class="list-group-item"><img className='footer-icon' src="/images/software-icon/php.svg" alt="" /></li>
                        </ul>
                    </div>
                    <div className='col-md-2 text-center'>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><img className='footer-icon' src="/images/software-icon/filemaker.svg" alt="" /></li>
                            <li class="list-group-item"><img className='footer-icon' src="/images/software-icon/facebook.svg" alt="" /></li>
                            <li class="list-group-item"><img className='footer-icon' src="/images/software-icon/instagram.svg" alt="" /></li>
                            <li class="list-group-item"><img className='footer-icon' src="/images/software-icon/semrush.svg" alt="" /></li>
                        </ul>
                    </div>
                    <div className='col-md-2 text-center'></div>
                </div>
            </div>

            <div className='container-fluid footer'>
                <div className='row'>
                    <div className='col-md-12 footer-banner'>
                        <div className='img-box'>
                            <img src="/images/calenders.svg" alt="" />
                        </div>
                        <h4>To Book A Consult, Contact Us</h4>
                        <button>Let’s Talk</button>
                    </div>
                    <div className='col-md-12  text-center'>
                        <p className='text-light'></p>
                        <p className='text-light'>Contact Us  |  Privacy Policy  |  Terms And Conditions  |  Questions?We Love To Hear From You!</p>
                        <p className='text-light'>© 2022 Onlineable. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home