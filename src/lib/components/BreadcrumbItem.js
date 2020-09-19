import React from 'react';
import PropTypes from 'prop-types';

export default function BreadcrumbItem ({active, href, className, children, ...attributes}) {
    let classes = "breadcrumb-item";
    if(active) classes += " active";
    if(className) classes += " " + className;
    if(href) return <li {...attributes} className={classes}><a href={href}>{children}</a></li>; 
    return <li {...attributes} className={classes}>{children}</li>
}

BreadcrumbItem.propTypes = {
    className: PropTypes.string,
    active: PropTypes.bool,
    href: PropTypes.string,
    children: PropTypes.string.isRequired
}