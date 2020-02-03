import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import './login.css'

export default class Login extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="container">
                <div className="wrapper__left">
                    <div className="wrapper__container--form">
                        <div className="wrapper__container--heading">
                            <h1 className="heading">SurfCrash &nbsp; | &nbsp; Sign In</h1>
                        </div>
                        <div className="wrapper__left--form">
                            <form className="form__login">
                                <label htmlFor="input_user_email">Email</label>
                                <input className="form__input" id="input_user_email" placeholder="Enter your email"/>
                                
                                <label htmlFor="input_user_password">Password</label>
                                <input type="password" className="form__input" id="input_user_password" placeholder="Enter your email"/>
                                
                                <button className="form__button">Log In</button>
                            </form>
                            <div className="bottomForm">
                                <p>Don't have an account ?</p>
                                <NavLink to="/signup" className="signup__link">Sign Up</NavLink>
                            </div>
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
