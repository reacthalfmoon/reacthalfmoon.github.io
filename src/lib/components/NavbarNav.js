import React from 'react';
import PropTypes from 'prop-types';

export default function NavbarNav ({className, ...attributes}) {
    let classes = "navbar-nav";
    
    if(className) classes += " " + className;
    return <ul {...attributes} className={classes} />
}

NavbarNav.propTypes = {
    className: PropTypes.string,
}