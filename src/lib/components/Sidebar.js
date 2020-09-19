import React from 'react';
import PropTypes from 'prop-types';

export default function Sidebar ({className, ...attributes}) {
    let classes = "sidebar";
    if(className) classes += " " + className;
    return <div {...attributes} className={classes} />
}

Sidebar.propTypes = {
    className: PropTypes.string,
}