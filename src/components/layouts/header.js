import React, { Component } from 'react';
import { NavLink, Link} from "react-router-dom";

export default class Header extends Component {
    state = {
        isExpanded : false
    }
    render() {
        const {isExpanded} = this.state;
        return (
            <div>
                <nav className="navigation__drawer">
                    <p href="#" className="appName">SurfCrash<span className="dot">.</span></p>
                    <div className="mobileNavBar">
                        <Link className="toggle__menu" to="#" onClick={()=>{
                            this.setState({
                                isExpanded: !isExpanded
                            });
                        }}>&#9776;</Link>
                    </div>
                    <div className="navBar" style={{display: !isExpanded ? "block" : "none"}}>
                        <ul>
                            <li className="current">
                                <NavLink to="/" className="link__item">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/" className="link__item">Guides</NavLink>
                            </li>
                            <li>
                                <NavLink to="/signup" className="link__item">Sign Up</NavLink>
                            </li>
                            <li>
                                <NavLink to='/login' className="link__item">Log In</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
