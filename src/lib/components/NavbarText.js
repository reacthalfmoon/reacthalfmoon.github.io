import React from 'react';
import PropTypes from 'prop-types';

export default function NavbarText ({className, ...attributes}) {
    let classes = "navbar-text";
    if(className) classes += " " + className;
    return <span {...attributes} className={classes} />
}

NavbarText.propTypes = {
    className: PropTypes.string,
}