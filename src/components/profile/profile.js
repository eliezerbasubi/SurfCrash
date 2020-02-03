import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './profile.css'
import { banner } from '../../data/data';
// import { user_img, picker } from '../../data/data';

class Profile extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <div className="wrapper__right" id="container__profile">
                        
                    </div>
                    <div className="wrapper__left no__padding">
                        <div className="topNavBar">
                            <ul>
                                <li>
                                    <NavLink to="/" className="link__item">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/guides" className="link__item">Guides</NavLink>
                                </li>
                                <li className="btn__logout">
                                    <NavLink to="/" className="link__item">Logout</NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className="profile__info">
                            <div className="divider"></div>
                            
                            <div className="profile__info--header">
                                <div className="circular__image--wrapper">
                                    <img src={ banner } alt="circular user profile" className="circular__image"/>
                                </div>
                                <div className="profile__info--details">
                                    <h2>John Doe</h2>
                                    <h4>Professional</h4>
                                </div>
                            </div>

                            {/* Personal user info */}
                            <div className="personal__info">
                                <div className="divider__medium"></div>
                                <h2>Personal Details</h2>
                                <div className="personal__info--email mb-12">
                                    <h3>Email</h3>
                                    <p>john.doe@gmail.com</p>
                                </div>
                                <div className="personal__info--phone mb-12">
                                    <h3>Phone Number</h3>
                                    <p>(+243) 975 989 758</p>
                                </div>

                                <div className="personal__info--dob mb-12">
                                    <h3>Date of Birth</h3>
                                    <p>03 May 1890</p>
                                </div>

                                <div className="personal__info--address mb-12">
                                    <h3>Address</h3>
                                    <p>Bukavu, DR. Congo</p>
                                </div>
                            </div>

                            {/* One question */}
                            <div className="profile_questions">
                                <div className="divider"></div>
                                <h2>Security Question</h2>
                                <p>What is the name of your grandmother?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;
