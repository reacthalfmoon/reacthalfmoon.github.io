import React from 'react';
import PropTypes from 'prop-types';

export default function NavbarContent ({className, ...attributes}) {
    let classes = "navbar-content";
    if(className) classes += " " + className;
    return <div {...attributes} className={classes} />
}

NavbarContent.propTypes = {
    className: PropTypes.string,
}