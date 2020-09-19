import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {NavbarContext} from './PageWrapper';

export default function Navbar ({className, ...attributes}) {
    const {withNavbar} = useContext(NavbarContext);
    let classes = "navbar";
    if(withNavbar==="bottom") classes += " navbar-fixed-bottom";
    if(className) classes += " " + className;
    return <nav {...attributes} className={classes} />
}

Navbar.propTypes = {
    className: PropTypes.string,
}