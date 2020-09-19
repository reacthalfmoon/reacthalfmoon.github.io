import React from 'react';
import PropTypes from 'prop-types';

export default function SidebarItem ({href, active, className, children, ...attributes}) {
    let classes = "sidebar-link";
    if(active) classes += " active";
    if(className) classes += " " + className;
    if(href) return <a href={href} {...attributes} children={children} className={classes} />
    return <div {...attributes} className={classes} children={children} />
}

SidebarItem.propTypes = {
    className: PropTypes.string,
    href: PropTypes.string,
    active: PropTypes.bool
}