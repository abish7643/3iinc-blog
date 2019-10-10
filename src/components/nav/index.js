import { Link } from "gatsby";
import React from "react";
import { window } from 'browser-monads';
import './nav.css';

const Nav = () => (
    <header>
        <div className="threeiinc-header">
            <div className="threeiinc-inner">
                <h1 href='/'>3i INC</h1>
                <nav>
                    <a href="/">About</a>
                    <a href="/">Contact</a>
                    <a href="/">Contribute</a>
                </nav>
            </div>
        </div>
    </header>
)

export default Nav