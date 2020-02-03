import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <nav>
                <div className="navBar">
                    <ul>
                        <li className="current">Home</li>
                        <li>Guides</li>
                        <li>Sign Up</li>
                        <li>Log In</li>
                    </ul>
                </div>
            </nav>
        )
    }
}
