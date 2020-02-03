import React, { Component } from 'react';


// Style
import './homepage.css';

import { banner } from '../../data/data';
import Footer from '../layouts/footer';
import Header from '../layouts/header';

class HomePage extends Component {
    render() {
        return (
            <div className="body">
                <Header/>

                {/* Hero image */}
                <div className="hero">
                    <div className="hero__text">
                        <p>Learn to surf</p>
                    </div>
                    <div className="hero__text">
                        <p>Share your skills</p>
                    </div>
                    <div className="hero__text">
                        <p>Meet Professionals</p>
                    </div>
                </div>

                {/* Informational  section*/}
                <section className="about">
                    <div className="about__text">
                        <h1>About Us</h1><br></br>
                        SurfCrash gives you the best guides you need to know to learn surfing. It helps you share your skills 
                        and connect with Professionals.
                    </div>
                    
                    {/* People who recently joined */}
                    <div className="team">
                        <div className="team__heading">
                            <h1>Our Team</h1><br></br>
                            <p>Our resources are crafted by our talented team of Professional Surfers from different backgrounds and cultures.</p>
                        </div><br></br>
                        <div className="team__members">
                            <div className="team__members--person">
                                <img src={banner} alt="user profile" className="team__members--person__image"></img>
                                <h3>John Doe</h3>
                                <p>Texas, United States</p>
                            </div>
                            <div className="team__members--person">
                                <img src={banner} alt="user profile" className="team__members--person__image"></img>
                                <h3>Jane Doe</h3>
                                <p>Bukavu, Democratic Republic of Congo</p>
                            </div>
                            <div className="team__members--person">
                                <img src={banner} alt="user profile" className="team__members--person__image"></img>
                                <h3>John Smith</h3>
                                <p>Sillicon Valley, United States</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="footer">
                    <div className="copyright">
                        &copy; 2020 SurfCrash
                    </div>
                    <Footer/>
                </div>
            </div>
        )
    }
}
export default HomePage;
