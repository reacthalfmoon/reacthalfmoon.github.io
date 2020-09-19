import React from 'react';
import PropTypes from 'prop-types';

export default function SidebarTitle ({className, children, ...attributes}) {
    let classes = "sidebar-title";
    if(className) classes += " " + className;
    return <h5 {...attributes} className={classes} children={children} />
}

SidebarTitle.propTypes = {
    className: PropTypes.string,
}