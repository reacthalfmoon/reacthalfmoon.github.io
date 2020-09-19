import React from 'react';
import PropTypes from 'prop-types';

export default function DropdownContent ({children, className, ...attributes}) {
    let classes = "dropdown-content";
    if(className) classes += " " + className;
    return <div {...attributes} className={classes} children={children} />
}

DropdownContent.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any.isRequired,
}