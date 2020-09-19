import React from 'react';
import PropTypes from 'prop-types';

export default function DropdownHeader ({className, children, ...attributes}) {
    let classes = "dropdown-header";
    if(className) classes += " " + className;
    return <h6 {...attributes} className={classes} children={children} />
}

DropdownHeader.propTypes = {
    className: PropTypes.string,
    children: PropTypes.string.isRequired,
}