import React from 'react';
import PropTypes from 'prop-types';

export default function Collapse ({isOpen, toggle, className, ...attributes}) {
    let classes = "collapse-panel";
    if(className) classes += " " + className;
    return <details {...attributes} open={isOpen} className={classes} />
}

Collapse.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
    className: PropTypes.string,
}