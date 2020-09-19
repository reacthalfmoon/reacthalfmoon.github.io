import React from 'react';
import PropTypes from 'prop-types';

export default function SidebarContent ({className, ...attributes}) {
    let classes = "sidebar-content";
    if(className) classes += " " + className;
    return <div {...attributes} className={classes} />
}

SidebarContent.propTypes = {
    className: PropTypes.string,
}