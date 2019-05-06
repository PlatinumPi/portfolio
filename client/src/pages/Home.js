import React, { Component } from "react";

class Home extends Component {

    render() {
        return (
            <div>
                <nav id="menu" className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        {/* Brand and toggle get grouped for better mobile display */}
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar" /> <span className="icon-bar" /> <span className="icon-bar" /> </button>
                            <a className="navbar-brand page-scroll" href="#header"><i className="fa fa-floppy-o" /> Chandler Paulk</a> </div>
                        {/* Collect the nav links, forms, and other content for toggling */}
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#about" className="page-scroll">About</a></li>
                                <li><a href="#services" className="page-scroll">Services</a></li>
                                <li><a href="#pricing" className="page-scroll">Portfolio</a></li>
                                <li><a href="#contact" className="page-scroll">Contact</a></li>
                            </ul>
                        </div>
                        {/* /.navbar-collapse */}
                    </div>
                    {/* /.container-fluid */}
                </nav>
                {/* Header */}
                <header id="header">
                    <div className="intro">
                        <div className="overlay">
                            <div className="container">
                                <div className="row">
                                    <div className="intro-text">
                                        <h1>Chandler Paulk</h1>
                                        <p>Elegance in Design | Beauty in Code</p>
                                        <a href="#about" className="btn btn-custom btn-lg page-scroll">Read More</a> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* About Section */}
                <div id="about">
                    <div className="container">
                        <div className="section-title text-center center">
                            <h2>About Me</h2>
                            <hr />
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-md-6"> <img src="img/about.jpg" className="img-responsive thumbnail" alt /> </div>
                            <div className="col-xs-12 col-md-6">
                                <div className="about-text">
                                    <h3>Who am I?</h3>
                                    <p>My name is Chandler Paulk. I'm an entrepreneur and a team player. I want to get your projects done quickly and accuratletly with the best technlogies available.</p>
                                    <p>Here are just a handful of technologies I have used in some of my Web Applications:</p>
                                    <div className="list-style">
                                        <div className="col-lg-6 col-sm-6 col-xs-12">
                                            <ul>
                                                <li>JavaScript</li>
                                                <li>Java</li>
                                                <li>Python 3</li>
                                                <li>MongoDB</li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 col-sm-6 col-xs-12">
                                            <ul>
                                                <li>Node.js</li>
                                                <li>JQuery</li>
                                                <li>Bootstrap</li>
                                                <li>MongoDB</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Services Section */}
                <div id="services" className="text-center">
                    <div className="container">
                        <div className="col-md-10 col-md-offset-1 section-title">
                            <h2 className="h2-secondary">Services</h2>
                            <hr />
                            <p className="p-secondary">What do I have to offer?</p>
                        </div>
                        <div className="row">
                            <div className="col-xs-6 col-md-3"> <i className="fa fa-home" />
                                <h4>Remote</h4>
                                <p className="p-secondary">I want to get your projects done as quickly and efficiently as possible. By working remote, I don't waste your time or mine.</p>
                            </div>
                            <div className="col-xs-6 col-md-3"> <i className="fa fa-umbrella" />
                                <h4>Protection</h4>
                                <p className="p-secondary">My software comes as protected as it can be. I utilize the best available technologies for software protection.</p>
                            </div>
                            <div className="col-xs-6 col-md-3"> <i className="fa fa-gears" />
                                <h4>Collaborate</h4>
                                <p className="p-secondary">Collaborating is important to your company and to mine.</p>
                            </div>
                            <div className="col-xs-6 col-md-3"> <i className="fa fa-language" />
                                <h4>Communication</h4>
                                <p className="p-secondary">Connections are key! Let me help you with that.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Pricing Section */}
                <div id="pricing" className="text-center">
                    <div className="container">
                        <div className="section-title center">
                            <h2>Portfolio</h2>
                            <hr />
                            <p>Take a look at my Portfolio!</p>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-sm-4">
                                <div className="pricing-table highlight-plan">
                                    <div className="plan-name">
                                        <h3>(Project Title)</h3>
                                    </div>
                                    <div className="plan-price">
                                        <div className="price-value"><i className="fa fa-floppy-o" /></div>
                                    </div>
                                    <div className="plan-list">
                                        <ul>
                                            <li><strong>Date</strong> (Project Date)</li>
                                            <li><strong>Link</strong> (Project Repository)</li>
                                        </ul>
                                    </div>
                                    <div className="plan-signup"> <a href="#" className="btn-system border-btn">Visit</a> </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <div className="pricing-table highlight-plan">
                                    <div className="plan-name">
                                        <h3>Project 2</h3>
                                    </div>
                                    <div className="plan-price">
                                        <div className="price-value"><i className="fa fa-floppy-o" /></div>
                                    </div>
                                    <div className="plan-list">
                                        <ul>
                                            <li><strong>Date</strong> 5-5-2019</li>
                                            <li><strong>Link</strong> https://dry-wave-69554.herokuapp.com/</li>
                                        </ul>
                                    </div>
                                    <div className="plan-signup"> <a href="https://dry-wave-69554.herokuapp.com/" className="btn-system border-btn">Visit</a> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Contact Section */}
                <div id="contact" className="text-center">
                    <div className="container">
                        <div className="section-title center">
                            <h2 className="h2-secondary">Contact Me</h2>
                            <hr />
                            <p className="p-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
                        </div>
                        <div className="col-md-8 col-md-offset-2">
                            <form name="sentMessage" id="contactForm" noValidate>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" id="name" className="form-control" placeholder="Name" required="required" />
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="email" id="email" className="form-control" placeholder="Email" required="required" />
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <textarea name="message" id="message" className="form-control" rows={4} placeholder="Message" required defaultValue={""} />
                                    <p className="help-block text-danger" />
                                </div>
                                <div id="success" />
                                <button type="submit" className="btn btn-custom btn-lg">Send Message</button>
                            </form>
                            <div className="social">
                                <ul>
                                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                                    <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                                    <li><a href="#"><i className="fa fa-youtube" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="footer">
                    <div className="container text-center">
                        <div className="fnav">
                            <p>Copyright © 2019 Designed by Chandler Paulk</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;