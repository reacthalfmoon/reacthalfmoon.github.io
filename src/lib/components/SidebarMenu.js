import React from 'react';
import PropTypes from 'prop-types';

export default function SidebarMenu ({className, ...attributes}) {
    let classes = "sidebar-menu";
    if(className) classes += " " + className;
    return <div {...attributes} className={classes} />
}

SidebarMenu.propTypes = {
    className: PropTypes.string,
}