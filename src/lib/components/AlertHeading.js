import React from 'react';
import PropTypes from 'prop-types';

export default function AlertHeading ({className, children, ...attributes}) {
    let classes = "alert-heading";
    if(className) classes += " " + className;
    return <h4 {...attributes} className={classes} children={children} />
}

AlertHeading.propTypes = {
    className: PropTypes.string,
}