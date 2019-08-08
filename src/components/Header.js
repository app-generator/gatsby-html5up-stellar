import React from 'react'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>
        <a href="https://www.gatsbyjs.org/">Gatsby</a> Html5Up
        </h1>
        <p>
            <a href="https://github.com/app-generator/gatsby-html5up-stellar">Open-Source</a> app with Stellar design
        </p>
    </header>
)

export default Header
