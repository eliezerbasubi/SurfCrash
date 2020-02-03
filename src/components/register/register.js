import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";

import './register.css';

import { user_img, picker } from '../../data/data';

export default class SignUp extends Component {
    state = {
        isLastIndex : false
    }
    render() {
        return (
            <div className="wrapper">
                <div className="container">
                <div className="wrapper__left">
                    <div className="wrapper__container--form">
                        <div className="wrapper__container--heading">
                            <h1 className="heading">SurfCrash &nbsp;  |  &nbsp; Sign Up</h1>
                        </div>
                        <div className="wrapper__left--form">
                            <form>
                                {/* User details */}
                                <div className="user__info" style={{display: !this.state.isLastIndex ? 'flex' : 'none'}}>
                                    <div className="user_profile_wrapper">
                                        <img src={user_img} className="user_profile_placeholder" alt="user profile placeholder"/>
                                        <input type="file" id="file"/>
                                        <label htmlFor="file" className="img_picker_wrapper">
                                            <img alt="icon picker" src={picker} className="img_picker"/>
                                        </label>
                                    </div>

                                    <label htmlFor="inp_user_email">Email</label>
                                    <input className="form__input" id="inp_user_email" placeholder="Enter your email"/>
                                    
                                    <label htmlFor="inp_user_phone">Phone Number</label>
                                    <input className="form__input" id="inp_user_phone" placeholder="Enter your phone number"/>
                                    
                                    <label htmlFor="inp_user_dob">Date of Birth</label>
                                    <input type="date" className="form__input" id="inp_user_dob" placeholder="Enter your date of birth"/>
                                    
                                    <label htmlFor="inp_user_address">Address</label>
                                    <input className="form__input" id="inp_user_address" placeholder="City, Country"/>
                                </div>

                                {/* Questions */}
                                <div className="user__questions" style={{display: this.state.isLastIndex ? 'block' : 'none'}}>
                                    <div className="questions">
                                        <div className="question__one">
                                            <h2>Q1/ What is the name of your grandmother?</h2>
                                            <input/>
                                        </div>
                                        <div className="question__two">
                                            <h2>Q2/ What was the nickname of your first best friend?</h2>
                                            <input/>
                                        </div>
                                        <div className="question__three">
                                            <h2>Q2/ What is the lastname of your favorite surfer?</h2>
                                            <input/>
                                        </div>
                                    </div>
                                </div>
                            </form>

                            {/* Display back button on last index only */}
                            { this.state.isLastIndex ? <button className="btn__back" onClick={()=> { 
                                    this.setState({ isLastIndex : false 
                                })}
                            }>Back</button> : null}
                            
                            <Link to= "/profile" onClick={(event)=>{
                                this.setState({
                                    isLastIndex: true
                                });
                                return !this.state.isLastIndex ? event.preventDefault() : null;
                            }}>
                                <button className="btn__continue"> {this.state.isLastIndex ? "Sign Up" : "Continue"}</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="wrapper__right">
                    <div className="wrapper__right--welcome"><h2>We are more than just surfers.</h2></div>
                    <div className="wrapper__center"><h2 className="wrapper__center--text">Welcome to ScratchSurf</h2></div>

                    <div className="bottomNavBar">
                        <ul>
                            <li>
                                <NavLink to="/" className="link__item"><h3>Home</h3></NavLink>
                            </li>
                            <li>
                                <NavLink to="/guides" className="link__item"><h3>Guides</h3></NavLink>
                            </li>
                            <li>
                                <NavLink to="/" className="link__item"><h3>&copy;2020 SurfCrash.</h3></NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
