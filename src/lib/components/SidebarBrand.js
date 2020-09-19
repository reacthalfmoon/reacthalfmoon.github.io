import React from 'react';
import PropTypes from 'prop-types';

export default function SidebarBrand ({href, className, children, ...attributes}) {
    let classes = "sidebar-brand";
    if(className) classes += " " + className;
    if(href) return <a {...attributes} className={classes} children={children} />
    return <span {...attributes} className={classes} children={children} />
}

SidebarBrand.propTypes = {
    className: PropTypes.string,
    href: PropTypes.string
}